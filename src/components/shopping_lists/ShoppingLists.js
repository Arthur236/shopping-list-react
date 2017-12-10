import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shoppingListActions from '../../actions/shoppingListActions';
import Navigation from "../common/Navigation";
import List from "./List";
import PreLoader from '../common/PreLoader';

class ShoppingLists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 30,
            total_lists: null
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillMount() {
        this.props.actions.getLists(this.state.activePage, this.state.limit);
    }

    handleDelete(id) {
        this.props.actions.deleteList(id, () => {
            this.props.actions.getLists(this.state.activePage, this.state.limit);
        });
    }

    render() {
        const { shoppingLists, loading } = this.props;
        const { redirect } = this.state;

        if (!shoppingLists || loading) {
            return(
                <PreLoader />
            );
        }

        if (redirect) {
            return <Redirect to='/dashboard' />
        }

        return(
            <div className="content">
                <Container>
                    <Navigation />

                    <Segment basic>
                        <Link to="/shopping_lists/create" className="ui button purple fluid">Create List</Link>
                    </Segment>

                    <Segment basic>
                        <List shoppingLists={shoppingLists} handleDelete={this.handleDelete} />
                    </Segment>
                </Container>
            </div>
        );
    }
}

ShoppingLists.propTypes = {
    shoppingLists: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return { shoppingLists: state.shoppingLists.shoppingLists, loading: state.shoppingLists.loading };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(shoppingListActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingLists);
