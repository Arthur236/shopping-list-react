import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import _ from 'lodash';
import RemoveFriend from "./RemoveFriend";

const FriendList = ({ friends, removeFriend }) => {
    return(
        <Card.Group itemsPerRow={3}>
            { _.map(friends.friends.friends, friend =>
                <Card color="purple" key={friend.id}>
                    <Image src={process.env.PUBLIC_URL + '/img/thumb.png'} />

                    <Card.Content>
                        <Card.Header>{friend.username}</Card.Header>
                    </Card.Content>

                    <Card.Content extra>
                        <RemoveFriend friend={friend} removeFriend={removeFriend} />
                    </Card.Content>
                </Card>
            )}
        </Card.Group>
    );
};

// Define prop types
FriendList.propTypes = {
    friends: PropTypes.object.isRequired,
    removeFriend: PropTypes.func.isRequired
};

export default FriendList;
