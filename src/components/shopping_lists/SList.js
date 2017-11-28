import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SListCol from "./SListCol";

const SList = ({ shoppingLists }) => {
    const { shopping_lists } = shoppingLists;

    if (!shoppingLists) {
        return(
            <div>LOADING...</div>
        );
    }

    return (
        <div className="row">
            { _.map(shopping_lists, shoppingList => <SListCol key={shoppingList.id} shoppingList={shoppingList}/>) }
        </div>
    );
};

SList.propTypes = {
    shoppingLists: PropTypes.object.isRequired
};

export default SList;
