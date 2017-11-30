import React from 'react';
import { Link } from 'react-router-dom';

const ItemsFab = ({ id }) => {
    return (
        <div className="cornerFab">
            <div className="fixed-action-btn wow bounceInRight">
                <Link to={`/shopping_lists/${id}/items/create`}
                   className="btn-floating btn-large tooltipped waves-effect waves-light red accent-2 modal-trigger"
                   data-position="left" data-delay="100" data-tooltip="Add Item">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default ItemsFab;
