import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Header, Icon, Button } from 'semantic-ui-react';

const RemoveFriend = ({ friend, removeFriend }) => {
    return (
        <Modal trigger={<button className="ui button red">Remove Friend</button>} basic size="small">
            <Header content={`Remove ${ friend.username }`} />

            <Modal.Content>
                <p>Are you sure you want to remove this user as your friend?</p>
            </Modal.Content>

            <Modal.Actions>
                <Button type="submit" basic color="blue" inverted>
                    <Icon name="remove" /> No
                </Button>
                <Button color="red" inverted className="right floated" onClick={() => removeFriend(friend.id)}>
                    <Icon name="checkmark" /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

// Define prop types
RemoveFriend.propTypes = {
    removeFriend: PropTypes.func.isRequired,
    friend: PropTypes.object.isRequired
};

export default RemoveFriend;
