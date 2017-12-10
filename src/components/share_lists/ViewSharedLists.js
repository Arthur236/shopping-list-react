import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from 'react-notify-toast';
import { Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSharedLists } from "../../actions/shareActions";
import Navigation from "../common/Navigation";
import PreLoader from '../common/PreLoader';
import SharedList from "./SharedList";

class ViewSharedLists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 30,
            total_lists: null
        };
    }

    componentWillMount() {
        this.props.getSharedLists(this.state.activePage, this.state.limit);
    }

    render() {
        const {share, loading} = this.props;

        if (!share || loading) {
            return (
                <PreLoader/>
            );
        }

        return(
            <div className="content">
                <Notifications />

                <Container>
                    <Navigation />

                    <Segment basic>
                        <SharedList sharedLists={share}/>
                    </Segment>
                </Container>
            </div>
        );
    }
}

ViewSharedLists.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return { share: state.share.share, loading: state.share.loading };
}

export default connect(mapStateToProps, { getSharedLists } )(ViewSharedLists);
