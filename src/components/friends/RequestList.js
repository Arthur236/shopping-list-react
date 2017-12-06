import React from 'react';
import { Card, Image, Header } from 'semantic-ui-react';
import _ from 'lodash';
import { ToastContainer } from 'react-toastify';

const RequestList = ({ requests, acceptFriend }) => {
    return(
        <div>
            <ToastContainer />
            <Header as='h1'>Your Friend Requests</Header>
            <Card.Group itemsPerRow={3}>
                { _.map(requests.friend_requests, user =>
                    <Card color="purple" key={user.id}>
                        <Image src={process.env.PUBLIC_URL + '/img/thumb.png'} />

                        <Card.Content>
                            <Card.Header>{user.username}</Card.Header>
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
