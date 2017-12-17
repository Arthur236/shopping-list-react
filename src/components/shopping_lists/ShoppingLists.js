import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shoppingListActions from '../../actions/shoppingListActions';
import Navigation from "../common/Navigation";
import List from "./List";
import PreLoader from '../common/PreLoader';
import Pagination from "react-js-pagination";

export class ShoppingLists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 9
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        const { actions } = this.props;
        const { activePage, limit } = this.state;

        actions.getLists(activePage, limit);
    }

    handleDelete(id) {
        const { actions } = this.props;
        const { activePage, limit } = this.state;

        actions.deleteList(id, () => {
            actions.getLists(activePage, limit);
        });
    }

    handlePageChange(pageNumber) {
        const { actions } = this.props;
        const { limit } = this.state;

        this.setState({ activePage: pageNumber });
        actions.getLists(pageNumber, limit);
    }

    render() {
        const { shoppingLists, loading } = this.props;
        const { activePage, limit } = this.state;

        if (!shoppingLists || loading) {
            return(
                <PreLoader />
            );
        }

        let lists, pagination = '';
        if (_.isEmpty(shoppingLists)) {
            lists = <p>You currently have no shopping lists</p>;
            pagination = '';
        } else {
            lists = <List shoppingLists={shoppingLists} handleDelete={this.handleDelete} />;
            pagination =
                <div className="ui inverted center aligned grid">
                    <Pagination
                            activePage={activePage}
                            itemsCountPerPage={limit}
                            totalItemsCount={shoppingLists.total}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                            innerClass='ui pagination menu'
                            itemClass='item'
                            disabledClass='disabledClass'
                        />
                </div>;
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
                        { pagination }
                    </Segment>
                </Container>
            </div>
        );
    }
}

ShoppingLists.propTypes = {
    shoppingLists: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const { shoppingLists } = state;

    return {
        shoppingLists: shoppingLists.shoppingLists,
        loading: shoppingLists.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(shoppingListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingLists);
