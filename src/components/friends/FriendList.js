import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import _ from 'lodash';
import RemoveFriend from "./RemoveFriend";

const FriendList = ({ friends, removeFriend }) => {
    return(
        <Item.Group>
            { _.map(friends.friends.friends, friend =>
                <Item key={friend.id}>
                    <Item.Image size="small" src={process.env.PUBLIC_URL + '/img/avatar2.png'} />

                    <Item.Content>
                        <Item.Header>{friend.username}</Item.Header>

                        <Item.Extra>
                            <RemoveFriend friend={friend} removeFriend={removeFriend} />
                        </Item.Extra>
                    </Item.Content>
                </Item>
            )}
        </Item.Group>
    );
};

// Define prop types
FriendList.propTypes = {
    friends: PropTypes.object.isRequired,
    removeFriend: PropTypes.func.isRequired
};

export default FriendList;
