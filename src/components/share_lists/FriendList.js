import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import _ from 'lodash';

const FriendList = ({ friends, shareList }) => {
    return(
        <Card.Group itemsPerRow={3}>
            { _.map(friends.friends.friends, friend =>
                <Card color="purple" key={friend.id}>
                    <Image src={process.env.PUBLIC_URL + '/img/thumb.png'} />

                    <Card.Content>
                        <Card.Header>{friend.username}</Card.Header>
                    </Card.Content>

                    <Card.Content extra>
                        <form onSubmit={shareList}>
                            <input type="number" name="friend_id" defaultValue={friend.id} hidden disabled />
                            <button type="submit" className="ui button blue fluid">Share</button>
                        </form>
                    </Card.Content>
                </Card>
            )}
        </Card.Group>
    );
};

FriendList.propTypes = {
    friends: PropTypes.object.isRequired,
    shareList: PropTypes.func.isRequired
};

export default FriendList;
