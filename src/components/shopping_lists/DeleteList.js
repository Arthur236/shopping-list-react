import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';

const DeleteList = ({ shoppingList, handleDelete }) => {
    return(
        <Modal trigger={<a className="right floated"><Icon name='trash' className="red"/>Delete</a>} basic size='small'>
            <Header content={`Delete ${ shoppingList.name }`} />

            <Modal.Content>
                <p>Are you sure you want to delete this shopping list?</p>
            </Modal.Content>

            <Modal.Actions>
                <Button type='submit' basic color='blue' inverted>
                    <Icon name='remove' /> No
                </Button>
                <Button color='red' inverted className='right floated' onClick={() => handleDelete(shoppingList.id)}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

DeleteList.propTypes = {
    shoppingList: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default DeleteList;
