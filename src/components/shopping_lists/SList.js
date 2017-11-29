import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SListCol from "./SListCol";
import Loader from '../common/Loader';

const SList = ({ shoppingLists }) => {
    const { shopping_lists } = shoppingLists;

    if (!shoppingLists) {
        return(
            <div>
                <div className="preloaderBackground">
                    <Loader size="medium"/>
                </div>
                <div className="overlay" />
            </div>
        );
    }

    return (
        <div className="container wow fadeInRight">
            <div className="row">
                { _.map(shopping_lists, shoppingList => <SListCol key={shoppingList.id} shoppingList={shoppingList}/>) }
            </div>
        </div>
    );
};

SList.propTypes = {
    shoppingLists: PropTypes.object.isRequired
};

export default SList;
