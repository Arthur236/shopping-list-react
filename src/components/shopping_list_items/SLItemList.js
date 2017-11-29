import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

const SLItemList = ({ listItems }) => {
    let items = '';

    if(listItems) {
        items = _.map(listItems, listItem =>
            <tr key={ listItem.id }>
                <td>{ listItem.name }</td>
                <td>{ listItem.quantity }</td>
                <td>{ listItem.unit_price }</td>
                <td>{ listItem.quantity * listItem.unit_price }</td>
            </tr>
        )
    } else {
        items = <tr><td colSpan="4">This list has no items. Please add some.</td></tr>
    }
    return (
        <div className="row shoppingListCont wow fadeInLeft">
            <div className="col s12 m12 l12">
                <h4>Shopping List Items</h4>

                <table className="highlight">
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
        </div>
    );
};

SLItemList.propTypes = {
    shoppingListItems: PropTypes.object.isRequired
};

export default SLItemList;
