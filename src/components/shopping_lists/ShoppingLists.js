import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import customJs from '../../static/js/custom';
import * as shoppingListActions from '../../actions/shoppingListActions';
import Sidebar from "../common/Sidebar";
import Navigation from "../common/Navigation";
import Loader from '../common/Loader';
import SLFab from "./SLFab";
import SList from "./SList";
import SLCreateModal from "./SLCreateModal";

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
        customJs();

        this.props.actions.getLists(this.state.activePage, this.state.limit);
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
                <Navigation />

                <div className="content">
                    <SLFab />

                    <div className="dashboard">
                        <div className="container wow fadeInRight">
                            <SList shoppingLists={shoppingLists}/>
                        </div>
                    </div>

                    <SLCreateModal />
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

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(shoppingListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingLists);
