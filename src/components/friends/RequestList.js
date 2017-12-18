import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {Card, Image} from 'semantic-ui-react';

const RequestList = ({requests, acceptFriend}) => {
    return (
        <Card.Group itemsPerRow={3}>
            {_.map(requests.friend_requests, user =>
                <Card color="purple" key={user.id}>
                    <Card.Content>
                        <Image floated="right" size="mini" src={process.env.PUBLIC_URL + '/img/avatar2.png'}/>
                        <Card.Header>
                            <Card.Header>{user.username}</Card.Header>
                        </Card.Header>
                        <Card.Meta>
                            New Friend Request
                        </Card.Meta>
                        <Card.Description>
                            {user.username} wants to be your friend
                        </Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                        <button className="ui button purple fluid" onClick={() => acceptFriend(user.id)}>Accept Friend
                        </button>
                    </Card.Content>
                </Card>
            )}
        </Card.Group>
    );
};

RequestList.propTypes = {
    requests: PropTypes.object.isRequired,
    acceptFriend: PropTypes.func.isRequired
};

export default RequestList;
