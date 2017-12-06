import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import _ from 'lodash';

const FriendList = ({ friends }) => {
    return(
        <Card.Group itemsPerRow={3}>
            { _.map(friends.users.friends, friend =>
                <Card color="purple" key={friend.id}>
                    <Image src={process.env.PUBLIC_URL + '/img/thumb.png'} />

                    <Card.Content>
                        <Card.Header>{friend.username}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>

                    </Card.Content>
                </Card>
            )}
        </Card.Group>
    );
};

FriendList.propTypes = {
    friends: PropTypes.object.isRequired
};

export default FriendList;
