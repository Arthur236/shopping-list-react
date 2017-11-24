import React from 'react';
import PropTypes from 'prop-types';
import SListCol from "./SListCol";

const SList = ({ shoppingLists }) => {
    console.log(shoppingLists);

    const shopping_lists = shoppingLists.shopping_lists;

    return (
        <div className="row">
            {
                shopping_lists !== undefined &&
                shopping_lists.map(shoppingList =>
                <SListCol key={shoppingList.id} shoppingList={shoppingList}/>
                )
            }
        </div>
    );
};

SList.propTypes = {
    shoppingLists: PropTypes.object.isRequired
};

export default SList;
