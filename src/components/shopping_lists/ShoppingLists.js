import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getShoppingLists } from '../../actions/shoppingListActions';

class ShoppingLists extends Component {
    componentDidMount() {
        this.props.getShoppingLists();
    }

    renderShoppingLists() {
        return _.map(this.props.shoppingLists, shoppingList => {
            return(
                <Link to={`/shopping_lists/${shoppingList.id}`} key={shoppingList.id}>
                    <li key={shoppingList.id} className="list-group-item">
                        {shoppingList.name}
                    </li>
                </Link>
            );
        });
    }

    render() {
        return(
            <div>
                SHOPPING LISTS
                <ul className="list-group">
                    { this.renderShoppingLists() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { shoppingLists: state.shoppingLists };
}

export default connect(mapStateToProps, { getShoppingLists })(ShoppingLists);
