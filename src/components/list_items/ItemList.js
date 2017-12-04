import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DeleteItem from './DeleteItem';

const ItemList = ({ id, listItems }) => {
    let items = '';

    if(listItems) {
        items = _.map(listItems.shopping_list_items, listItem =>
            <tr key={ listItem.id }>
                <td>{ listItem.name }</td>
                <td>{ listItem.quantity }</td>
                <td>{ listItem.unit_price }</td>
                <td>{ listItem.quantity * listItem.unit_price }</td>
                <td>
                    <Link to={`/shopping_lists/${id}/items/edit/${listItem.id}`}><i className="edit icon orange" /></Link>
                </td>
                <td>
                    <DeleteItem key={listItem.id} shoppingList={id} item={listItem} />
                </td>
            </tr>
        );
    } else {
        items = <tr><td colSpan="4">This list has no items. Please add some.</td></tr>
    }
    return (
        <div>
            <h4>Shopping List Items</h4>

            <table className="ui purple table">
                <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    { items }
                </tbody>
            </table>
        </div>
    );
};

ItemList.propTypes = {
    listItems: PropTypes.object.isRequired
};

export default ItemList;
