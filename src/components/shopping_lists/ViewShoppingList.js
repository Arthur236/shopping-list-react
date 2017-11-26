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

    componentWillMount() {
        const id = this.props.match.params.id;

        this.props.actions.getShoppingList(id);
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

function mapStateToProps(state, ownProps) {
    const shoppingListId = ownProps.match.params.id;

    let shoppingList = state.shoppingLists.shopping_lists.find(obj => obj.id === shoppingListId);

    console.log("s_lists -----> ", state.shoppingLists);

    return { shoppingList: shoppingList };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(shoppingListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewShoppingList);
