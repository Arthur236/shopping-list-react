import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getLists, deleteList} from '../../actions/shoppingListActions';
import List from "./List";
import PreLoader from '../common/PreLoader';
import Pagination from "react-js-pagination";

export class ShoppingLists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 10
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        const { getLists } = this.props;
        const { activePage, limit } = this.state;

        getLists(activePage, limit);
    }

    handleDelete(id) {
        const { getLists, deleteList } = this.props;
        const { activePage, limit } = this.state;

        deleteList(id, () => {
            getLists(activePage, limit);
        });
    }

    handlePageChange(pageNumber) {
        const { getLists } = this.props;
        const { limit } = this.state;

        this.setState({ activePage: pageNumber });
        getLists(pageNumber, limit);
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
                            innerClass="ui pagination menu"
                            itemClass="item"
                            disabledClass="disabledClass"
                        />
                </div>;
        }

        return(
            <div className="content">
                <Container>
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

// Define prop types
ShoppingLists.propTypes = {
    shoppingLists: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getLists: PropTypes.func,
    deleteList: PropTypes.func
};

// Map store state to component props
export function mapStateToProps(state) {
    const { shoppingLists } = state;

    return {
        shoppingLists: shoppingLists.shoppingLists,
        loading: shoppingLists.loading
    };
}

export default connect(mapStateToProps, {getLists, deleteList})(ShoppingLists);
