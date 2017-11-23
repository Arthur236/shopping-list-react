import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loadjs from 'loadjs';
import * as shoppingListActions from '../../actions/shoppingListActions';
import Sidebar from "../common/Sidebar";
import Navigation from "../common/Navigation";
import SLFab from "./SLFab";
import SLCreateModal from "./SLCreateModal";
import SList from "./SList";

class ShoppingLists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 2,
            limit: 3,
            next_page: '',
            previous_page: ''
        };
    }

    componentDidMount() {
        loadjs(process.env.PUBLIC_URL + '/js/custom.js');

        this.props.actions.getShoppingLists(this.state.activePage, this.state.limit);
    }

    render() {
        const { shoppingLists } = this.props;
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

function mapStateToProps(state) {
    return { shoppingLists: state.shoppingLists };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(shoppingListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingLists);
