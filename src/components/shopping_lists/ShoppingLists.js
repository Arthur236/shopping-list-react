import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadjs from 'loadjs';
import { getShoppingLists } from '../../actions/shoppingListActions';
import Sidebar from "../common/Sidebar";
import Navigation from "../common/Navigation";
import SLDeleteModal from "./SLDeleteModal";
import ShoppingList from "./ShoppingList";

class ShoppingLists extends Component {
    componentDidMount() {
        loadjs(process.env.PUBLIC_URL + '/js/custom.js');

        this.props.getShoppingLists();
    }

    renderShoppingLists() {
        if(this.props.shoppingLists === '') {
            return(
                <blockquote>
                    <h3 className="grey-text">You currently have no shopping lists in your account.</h3>
                    <br/>
                    <h4 className="grey-text">Add some by pressing the + button</h4>
                </blockquote>
            );
        }

        return _.map(this.props.shoppingLists, shoppingList => {
            return(
                <div key={shoppingList.id}>
                    <ShoppingList shoppingList={ shoppingList } />

                    <SLDeleteModal shoppingList={ shoppingList }/>
                </div>
            );
        });
    }

    render() {
        if(!this.props.shoppingLists) {
            return(<div>Loading...</div>);
        }

        return(
            <div>
                <Sidebar />
                <Navigation />

                <div className="dashboard">
                    <div className="container wow fadeInRight">
                        <div className="row">
                            { this.renderShoppingLists() }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { shoppingLists: state.shoppingLists };
}

export default connect(mapStateToProps, { getShoppingLists })(ShoppingLists);
