import React from 'react';
import SListCol from "./SListCol";

const SList = ({ shoppingLists }) => {

    return (
        <div className="row">
            {
                shoppingLists.map(shoppingList =>
                <SListCol key={shoppingList.id} shoppingList={shoppingList}/>)
            }
        </div>
    );
};

SList.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SList;
