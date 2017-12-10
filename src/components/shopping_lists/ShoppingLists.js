import _ from 'lodash';
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

        if (!shoppingLists || loading) {
            return(
                <PreLoader />
            );
        }

        let lists = '';
        if (_.isEmpty(shoppingLists)) {
            lists = <p>You currently have no shopping lists</p>;
        } else {
            lists = <List shoppingLists={shoppingLists} handleDelete={this.handleDelete} />;
        }

        return(
            <div className="content">
                <Container>
                    <Navigation />

                    <Segment basic>
                        <h1>Shopping Lists</h1>
                        <Link to="/shopping_lists/create" className="ui button purple fluid">Create List</Link>
                    </Segment>

                    <Segment basic>
                        { lists }
                    </Segment>
                </Container>
            </div>
        );
    }
}

ShoppingLists.propTypes = {
    shoppingLists: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
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
