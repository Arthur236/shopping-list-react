import React from 'react';
import PropTypes from 'prop-types';

const SLItemList = ({ shoppingListItems }) => {
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
