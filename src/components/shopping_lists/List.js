import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import ListColumn from "./ListColumn";
import { Card } from 'semantic-ui-react';

const List = ({ shoppingLists }) => {
    const { shopping_lists } = shoppingLists;

    return (
        <Card.Group itemsPerRow={3}>
            { _.map(shopping_lists, shoppingList => <ListColumn key={shoppingList.id} shoppingList={shoppingList}/>) }
        </Card.Group>
    );
};

List.propTypes = {
    shoppingLists: PropTypes.object.isRequired
};

export default List;
