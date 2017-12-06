import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import _ from 'lodash';

const FriendList = ({ friends, removeFriend }) => {
    console.log("<><><>< ", friends);

    return(
        <Card.Group itemsPerRow={3}>
            { _.map(friends.friends.friends, friend =>
                <Card color="purple" key={friend.id}>
                    <Image src={process.env.PUBLIC_URL + '/img/thumb.png'} />

                    <Card.Content>
                        <Card.Header>{friend.username}</Card.Header>
                    </Card.Content>

                    <Card.Content extra>
                        <button className='ui button red fluid' onClick={() => removeFriend(friend.id)}>Remove Friend</button>
                    </Card.Content>
                </Card>
            )}
        </Card.Group>
    );
};

FriendList.propTypes = {
    friends: PropTypes.object.isRequired,
    removeFriend: PropTypes.func.isRequired
};

export default FriendList;
