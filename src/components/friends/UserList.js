import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import _ from 'lodash';

const UserList = ({ users, handleAdd }) => {
    return(
        <Card.Group itemsPerRow={3}>
            { _.map(users.friends, user =>
                <Card color="purple" key={user.id}>
                    <Image src={process.env.PUBLIC_URL + '/img/thumb.png'} />

                    <Card.Content>
                        <Card.Header>{user.username}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <form onSubmit={handleAdd}>
                            <input type='number' name='friend_id' defaultValue={user.id} hidden disabled />
                            <button type='submit' className='ui button purple fluid'>Send Request</button>
                        </form>
                    </Card.Content>
                </Card>
            )}
        </Card.Group>
    );
};

UserList.propTypes = {
    users: PropTypes.object.isRequired,
    handleAdd: PropTypes.func.isRequired
};

export default UserList;
