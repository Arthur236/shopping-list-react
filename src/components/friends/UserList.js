import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const UserList = ({ users, handleAdd }) => {

    if (!users) {
        return(
            <div>No data could be found</div>
        );
    }

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
                            <button type='submit' className='ui button purple fluid'>Add Friend</button>
                        </form>
                    </Card.Content>
                </Card>
            )}
        </Card.Group>
    );
};

UserList.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default UserList;
