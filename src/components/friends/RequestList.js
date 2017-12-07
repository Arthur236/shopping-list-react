import React from 'react';
import { Card, Image, Header } from 'semantic-ui-react';
import _ from 'lodash';

const RequestList = ({ requests, acceptFriend }) => {
    return(
        <div>
            <Header as='h1'>Your Friend Requests</Header>
            <Card.Group itemsPerRow={3}>
                { _.map(requests.friend_requests, user =>
                    <Card color="purple" key={user.id}>
                        <Card.Content>
                            <Image floated='right' size='mini' src={process.env.PUBLIC_URL + '/img/avatar2.png'} />
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
                            <button className='ui button purple fluid' onClick={() => acceptFriend(user.id)}>Accept Friend</button>
                        </Card.Content>
                    </Card>
                )}
            </Card.Group>
        </div>
    );
};

RequestList.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default RequestList;
