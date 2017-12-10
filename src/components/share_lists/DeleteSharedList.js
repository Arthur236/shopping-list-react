import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';

const DeleteSharedList = ({ sharedList, handleRemove }) => {
    return(
        <Modal trigger={<Button color='red' fluid>Remove</Button>} basic size='small'>
            <Header content={`Remove ${ sharedList.name }`} />

            <Modal.Content>
                <p>Are you sure you want to remove this shared shopping list?</p>
            </Modal.Content>

            <Modal.Actions>
                <Button type='submit' basic color='blue' inverted>
                    <Icon name='remove' /> No
                </Button>
                <Button type='submit' color='red' inverted onClick={() => handleRemove(sharedList.id)}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

DeleteSharedList.propTypes = {
    sharedList: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired
};

export default DeleteSharedList;
