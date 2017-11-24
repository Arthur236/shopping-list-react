import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SLItems from "../shopping_list_items/SLItems";
import * as shoppingListActions from '../../actions/shoppingListActions';

class ViewShoppingList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            shoppingList: Object.assign({}, props.shoppingList)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.shoppingList.id !== nextProps.shoppingList.id) {
            // Necessary to populate form when existing list is loaded directly.
            this.setState({ shoppingList: Object.assign({}, nextProps.shoppingList) });
        }
    }

    render() {
        console.log(this.state);
        const { shoppingList } = this.state;

        let description = '';

        if(!shoppingList) {
            return(<div>Loading...</div>);
        }

        if (!shoppingList.description) {
            description = 'No description added';
        } else {
            description = shoppingList.description;
        }

        return(
            <div className="container">
                <h2>{ shoppingList.name }</h2>
                <div className="divider" />
                <h3>{ description }</h3>

                <SLItems />
            </div>
        );
    }
}

ViewShoppingList.propTypes = {
    shoppingList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function getShoppingListById(shoppingLists, id) {
    const shoppingList = shoppingLists.shoppingLists.filter(shoppingList => shoppingList.id === id);
    if (shoppingList) return shoppingList[0]; //since filter returns an array, have to grab the first.
    return null;
}

function mapStateToProps(state, ownProps) {
    const shoppingListId = ownProps.match.params.id;

    let shoppingList = {id: '', name: '', description: '', date_created: '', date_modified: ''};

    console.log(state.shoppingLists);

    if (shoppingListId && state.shoppingLists.length > 0) {
        shoppingList = getShoppingListById(state.shoppingLists, shoppingListId);
    }

    return { shoppingList: shoppingList };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(shoppingListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewShoppingList);
