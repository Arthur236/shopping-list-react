import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const FriendList = ({ users }) => {

    if (!users) {
        return(
            <div>No data could be found</div>
        );
    }

    console.log("<><><><><><> ", users);

    return(
        <Card.Group itemsPerRow={3}>
            { _.map(users.friends, user =>
                <Card color="purple" key={user.id}>
                    <Image src={process.env.PUBLIC_URL + '/img/thumb.png'} />

                    <Card.Content>
                        <Card.Header>{user.username}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <Link to={``} className='ui button purple fluid'>Add Friend</Link>
                    </Card.Content>
                </Card>
            )}
        </Card.Group>
    );
};

FriendList.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default FriendList;
