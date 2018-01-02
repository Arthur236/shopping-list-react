import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Item, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeleteList from "./DeleteList";

const List = ({ shoppingLists, handleDelete }) => {
    const { shopping_lists } = shoppingLists;

    return (
        <Item.Group>
            { _.map(shopping_lists, shoppingList =>
                <Item key={shoppingList.id}>
                    <Item.Image size="small" src={process.env.PUBLIC_URL + '/img/thumb.png'} />

                    <Item.Content>
                        <Item.Header>
                            <Link to={`/shopping_lists/${shoppingList.id}/items`}>{shoppingList.name}</Link>
                        </Item.Header>

                        <Item.Meta>Created on: {shoppingList.date_created}</Item.Meta>

                        <Item.Description>
                            {shoppingList.description ? shoppingList.description : "No description added"}
                        </Item.Description>

                        <Item.Extra>
                            <Link to={`/shopping_lists/edit/${shoppingList.id}`}><Icon name="edit" className="orange"/>Edit</Link>
                            <Link to={`/shopping_lists/share/${shoppingList.id}`}><Icon name="share" className="blue" style={{marginLeft: '15px'}}/>Share</Link>
                            <DeleteList shoppingList={shoppingList} handleDelete={handleDelete} />
                        </Item.Extra>
                    </Item.Content>
                </Item>
            ) }
        </Item.Group>
    );
};

List.propTypes = {
    shoppingLists: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default List;
