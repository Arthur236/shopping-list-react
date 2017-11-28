import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loadjs from 'loadjs';
import SLItems from "../shopping_list_items/SLItems";
import * as shoppingListActions from '../../actions/shoppingListActions';
import Sidebar from "../common/Sidebar";
import Navigation from "../common/Navigation";
import Loader from '../common/Loader';

class ViewShoppingList extends Component {
    componentWillMount() {
        loadjs(process.env.PUBLIC_URL + '/js/custom.js');

        const id = this.props.match.params.id;
        this.props.actions.getSingleList(id);
    }

    render() {
        const { activeList, loading } = this.props;

        let description = '';

        if (!activeList || loading) {
            return(
                <div className="center-align"><Loader size="small"/></div>
            );
        }

        if (!activeList.description) {
            description = 'No description added';
        } else {
            description = activeList.description;
        }

        return(
            <div>
                <Sidebar />
                <Navigation />

                <div className="content">
                    <div className="container shoppingListCont wow fadeInRight">
                        <h4>{ activeList.name }</h4>
                        <div className="divider" />
                        <p>{ description }</p>

                        <SLItems />
                    </div>
                </div>
            </div>
        );
    }
}

ViewShoppingList.propTypes = {
    activeList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return { activeList: state.shoppingLists.activeList, loading: state.shoppingLists.loading };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(shoppingListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewShoppingList);
