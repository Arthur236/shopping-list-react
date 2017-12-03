import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import customJs from '../../static/js/custom';
import ItemList from "./ItemList";
import { getListItems } from "../../actions/listItemActions";
import ItemsFab from '../list_items/ItemsFab';
import Sidebar from "../common/Sidebar";
import Navigation from "../common/Navigation";
import Loader from '../common/PreLoader';

class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 20,
            next_page: '',
            previous_page: '',
            total_items: null
        };
    }

    componentWillMount() {
        customJs();

        const id = this.props.match.params.id;
        this.props.getListItems(id, this.state.activePage, this.state.limit);
    }

    render() {
        const { listItems, activeList } = this.props;

        return(
            <div>
                <Sidebar />
                <Navigation header={ activeList.name } />

                <div className="content">
                    <ItemsFab id={ activeList.id } />

                    <div className="container shoppingListCont wow fadeInRight">
                        <h4>{ activeList.name }</h4>
                        <p>{ activeList.description }</p>
                        <div className="divider" />
                        <ItemList id={activeList.id} listItems={listItems.listItems} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { activeList: state.shoppingLists.activeList , listItems: state.listItems };
}

export default connect(mapStateToProps, { getListItems })(Items);
