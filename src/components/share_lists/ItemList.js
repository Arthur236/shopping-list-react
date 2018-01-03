import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ listItems }) => {
    let items = '';

    if(!_.isEmpty(listItems.shared_list_items)) {
        items = _.map(listItems.shared_list_items, listItem =>
            <tr key={listItem.id}>
                <td>{ listItem.name }</td>
                <td>{ listItem.quantity }</td>
                <td>{ listItem.unit_price }</td>
                <td>{ listItem.quantity * listItem.unit_price }</td>
            </tr>
        );
    } else {
        items = <tr><td colSpan="4">This list has no items. Please add some.</td></tr>;
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
                </tr>
                </thead>
                <tbody>
                { items }
                </tbody>
            </table>
        </div>
    );
};

// Define prop types
ItemList.propTypes = {
    listItems: PropTypes.object.isRequired
};

export default ItemList;
