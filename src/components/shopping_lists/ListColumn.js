import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeleteList from "./DeleteList";

const ListColumn = ({ shoppingList }) => {
    let description = '';

    if (!shoppingList.description) {
        description = 'No description added';
    } else {
        description = shoppingList.description;
    }

    return (
        <Card color="purple">
            <Link to={`/shopping_lists/${shoppingList.id}/items`}>
                <Image src={process.env.PUBLIC_URL + '/img/thumb.png'} />
            </Link>

            <Card.Content>
                <Card.Header>{shoppingList.name}</Card.Header>
                <Card.Meta>Created on: {shoppingList.date_created}</Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/shopping_lists/edit/${shoppingList.id}`}><Icon name='edit' className="orange"/>Edit</Link>
                <DeleteList shoppingList={shoppingList} />
            </Card.Content>
        </Card>
    );
};

ListColumn.propTypes = {
    shoppingList: PropTypes.object.isRequired
};

export default ListColumn;
