import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SLItems from "../shopping_list_items/SLItems";
import * as shoppingListActions from '../../actions/shoppingListActions';

class ViewShoppingList extends Component {
    componentWillMount() {
        const id = this.props.match.params.id;

        this.props.actions.getShoppingList(id);
    }

    render() {
        const { activeList } = this.props;
        console.log(">>>>>    >>>>>> ", this.props)

        let description = '';

        if(!activeList) {
            return(<div>Loading...</div>);
        }

        if (!activeList.description) {
            description = 'No description added';
        } else {
            description = activeList.description;
        }

        return(
            <div className="container">
                <h2>{ activeList.name }</h2>
                <div className="divider" />
                <h3>{ description }</h3>

                <SLItems />
            </div>
        );
    }
}

ViewShoppingList.propTypes = {
    activeList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    console.log("<>?<>?<>?<>?<>?<>?   ", state)
    return { activeList: state.shoppingLists.activeList };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(shoppingListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewShoppingList);
