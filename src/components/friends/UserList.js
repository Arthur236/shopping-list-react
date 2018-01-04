import React from 'react';
import PropTypes from 'prop-types';
import {Item} from 'semantic-ui-react';
import _ from 'lodash';

const UserList = ({users, handleAdd}) => {
    return (
        <Item.Group>
            {_.map(users.friends, user =>
                <Item key={user.id}>
                    <Item.Image size="small" src={process.env.PUBLIC_URL + '/img/avatar2.png'}/>

                    <Item.Content>
                        <Item.Header>{user.username}</Item.Header>

                        <Item.Extra>
                            <form onSubmit={handleAdd}>
                                <input type="number" name="friend_id" defaultValue={user.id} hidden disabled/>
                                <button type="submit" id="btnRequest" className="ui button purple">Send
                                    Request
                                </button>
                            </form>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            )}
        </Item.Group>
    );
};

// Define prop types
UserList.propTypes = {
    users: PropTypes.object.isRequired,
    handleAdd: PropTypes.func.isRequired
};

export default UserList;
