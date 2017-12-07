import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeleteList from "./DeleteList";

const List = ({ shoppingLists }) => {
    const { shopping_lists } = shoppingLists;

    return (
        <Card.Group itemsPerRow={3}>
            { _.map(shopping_lists, shoppingList =>
                <Card color="purple" key={shoppingList.id}>
                    <Link to={`/shopping_lists/${shoppingList.id}/items`}>
                        <Image src={process.env.PUBLIC_URL + '/img/thumb.png'} />
                    </Link>

                    <Card.Content>
                        <Card.Header>{shoppingList.name}</Card.Header>
                        <Card.Meta>Created on: {shoppingList.date_created}</Card.Meta>
                        <Card.Description>{shoppingList.description ? shoppingList.description : 'No description added'}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Link to={`/shopping_lists/edit/${shoppingList.id}`}><Icon name='edit' className="orange"/>Edit</Link>
                        <Link to={`/shopping_lists/share/${shoppingList.id}`}><Icon name='share' className="blue" style={{marginLeft: '15px'}}/>Share</Link>
                        <DeleteList shoppingList={shoppingList} />
                    </Card.Content>
                </Card>
            ) }
        </Card.Group>
    );
};

List.propTypes = {
    shoppingLists: PropTypes.object.isRequired
};

export default List;
