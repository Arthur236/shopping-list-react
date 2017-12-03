import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from 'react-notify-toast';
import { Segment, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ItemList from "./ItemList";
import { getListItems } from "../../actions/listItemActions";
import Navigation from "../common/Navigation";
import PreLoader from '../common/PreLoader';
import shoppingLists from "../../reducers/shoppingListsReducer";

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
        const id = this.props.match.params.id;
        this.props.getListItems(id, this.state.activePage, this.state.limit);
    }

    render() {
        const { listItems, activeList, loading } = this.props;

        if (!listItems || loading) {
            return(
                <PreLoader />
            );
        }

        return(
            <div className="content">
                <Notifications />

                <Container>
                    <Navigation header={activeList.name}/>

                    <Segment basic>
                        <Link to={`/shopping_lists/${activeList.id}/items/create`} className="ui button purple fluid">Create Item</Link>

                        <h3>{ activeList.name }</h3>
                        <p>{ activeList.description }</p>

                        <div className="divider" />

                        <ItemList id={activeList.id} listItems={listItems.listItems} />
                    </Segment>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeList: state.shoppingLists.activeList,
        listItems: state.listItems,
        loading: state.listItems.loading
    };
}

export default connect(mapStateToProps, { getListItems })(Items);
