import React from 'react';
import SListCol from "./SListCol";

const SList = ({ shoppingLists }) => {
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
    //myProp: PropTypes.string.isRequired
};

export default SList;
