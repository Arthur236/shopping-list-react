import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DeleteItem from './DeleteItem';

const ItemList = ({ id, listItems }) => {
    let items, deleteModals = '';

    if(listItems) {
        items = _.map(listItems.shopping_list_items, listItem =>
            <tr key={ listItem.id }>
                <td>{ listItem.name }</td>
                <td>{ listItem.quantity }</td>
                <td>{ listItem.unit_price }</td>
                <td>{ listItem.quantity * listItem.unit_price }</td>
                <td>
                    <Link to={`/shopping_lists/${id}/items/edit/${listItem.id}`} className="btn-floating tooltipped orange"
                       data-position="top" data-delay="100" data-tooltip="Edit"><i
                        className="material-icons">edit</i></Link>
                </td>
                <td>
                    <a href={`#md_delete_${listItem.id}`} className="btn-floating modal-trigger tooltipped red" data-position="top"
                       data-delay="100" data-tooltip="Delete">
                        <i className="material-icons">delete</i>
                    </a>
                </td>
            </tr>
        );

        deleteModals = _.map(listItems.shopping_list_items, listItem =>
            <DeleteItem key={listItem.id} shoppingList={id} item={listItem} />
        );

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
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        { items }
                    </tbody>
                </table>
            </div>

            { deleteModals }
        </div>
    );
};

ItemList.propTypes = {
    listItems: PropTypes.object.isRequired
};

export default ItemList;
