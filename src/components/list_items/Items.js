import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as listItemActions from '../../actions/listItemActions';
import ItemList from "./ItemList";
import PreLoader from '../common/PreLoader';

export class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            limit: 10
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.actions.getListItems(id, this.state.activePage, this.state.limit);
    }

    handleDelete(shoppingList, item_id) {
        this.props.actions.deleteItem(shoppingList, item_id, () => {
            this.props.actions.getListItems(shoppingList, this.state.activePage, this.state.limit);
        });
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
                <Container>
                    <Segment basic>
                        <Link to={`/shopping_lists/${activeList.id}/items/create`} className="ui button purple fluid">Create Item</Link>

                        <h3>{ activeList.name }</h3>
                        <p>{ activeList.description ? activeList.description : "No description added" }</p>

                        <hr/>

                        <ItemList id={activeList.id} listItems={listItems.listItems} handleDelete={this.handleDelete} />
                    </Segment>
                </Container>
            </div>
        );
    }
}

Items.propTypes = {
    activeList: PropTypes.object.isRequired,
    listItems: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        activeList: state.shoppingLists.activeList,
        listItems: state.listItems,
        loading: state.listItems.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(listItemActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
