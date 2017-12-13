import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';

const DeleteItem = ({ shoppingList, item, handleDelete }) => {
    return(
        <Modal trigger={<a className="right floated"><Icon name="trash" className="red"/></a>} basic size="small">
            <Header content={`Delete ${ item.name }`} />

            <Modal.Content>
                <p>Are you sure you want to delete this list item?</p>
            </Modal.Content>

            <Modal.Actions>
                <Button type="submit" basic color="blue" inverted>
                    <Icon name="remove" /> No
                </Button>
                <Button color="red" inverted className="right floated" onClick={() => handleDelete(shoppingList, item.id)}>
                    <Icon name="checkmark" /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

DeleteItem.propTypes = {
    shoppingList: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default DeleteItem;
