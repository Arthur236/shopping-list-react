import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import customJs from '../../static/js/custom';
import { getLists } from '../../actions/shoppingListActions';
import Sidebar from "../common/Sidebar";
import Navigation from "../common/Navigation";
import Loader from '../common/Loader';
import SLFab from "./SLFab";
import SList from "./SList";

class ShoppingLists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 30,
            next_page: '',
            previous_page: '',
            total_lists: null
        };
    }

    componentDidMount() {
        this.props.getLists(this.state.activePage, this.state.limit);
        customJs();
    }

    render() {
        const { shoppingLists, loading } = this.props;

        if (!shoppingLists || loading) {
            return(
                <div className="center-align"><Loader size="small"/></div>
            );
        }

        return(
            <div>
                <Sidebar />
                <Navigation header="Shopping Lists" />

                <div className="content">
                    <SLFab />

                    <div className="dashboard">
                        <SList shoppingLists={shoppingLists}/>
                    </div>
                </div>
            </div>
        );
    }
}

ShoppingLists.PropTypes = {
    shoppingLists: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return { shoppingLists: state.shoppingLists.shoppingLists, loading: state.shoppingLists.loading };
}

export default connect(mapStateToProps, { getLists })(ShoppingLists);
