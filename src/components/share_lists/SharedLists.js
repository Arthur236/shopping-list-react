import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import jwt from 'jsonwebtoken';
import * as shareActions from '../../actions/shareActions';
import Navigation from "../common/Navigation";
import PreLoader from '../common/PreLoader';
import SharedList from "./SharedList";

class SharedLists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 10,
            total_lists: null
        };

        this.handleRemove = this.handleRemove.bind(this);
    }

    componentWillMount() {
        this.props.actions.getSharedLists(this.state.activePage, this.state.limit);
    }

    handleRemove(list_id) {
        let id = jwt.decode(localStorage.getItem('token')).id;
        let user_id = { 'friend_id': id };

        this.props.actions.removeSharedList(user_id, list_id, () => {
            this.props.actions.getSharedLists(this.state.activePage, this.state.limit);
        });
    }

    render() {
        const {share, loading} = this.props;

        if (!share || loading) {
            return (
                <PreLoader/>
            );
        }

        let sharedLists = '';
        if (_.isEmpty(share)) {
            sharedLists = <p>You currently have no shared shopping lists</p>;
        } else {
            sharedLists = <SharedList sharedLists={share} handleRemove={this.handleRemove} />;
        }

        return(
            <div className="content">
                <Container>
                    <Navigation />

                    <Segment basic>
                        <h1>Shared Shopping Lists</h1>
                        { sharedLists }
                    </Segment>
                </Container>
            </div>
        );
    }
}

SharedLists.propTypes = {
    share: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return { share: state.share.share, loading: state.share.loading };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(shareActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SharedLists);
