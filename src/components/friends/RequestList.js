import React from 'react';
import { Card, Icon, Image, Header } from 'semantic-ui-react';
import _ from 'lodash';

const RequestList = ({ requests }) => {
    console.log("<><><><> ", requests);

    if (!requests) {
        return(
            <div>You do not have any friend requests</div>
        );
    }

    return(
        <div>
            <Header as='h1'>Your Friend Requests</Header>
            <Card.Group itemsPerRow={3}>
                { _.map(requests.friend_requests, user =>
                    <Card color="purple" key={user.id}>
                        <Image src={process.env.PUBLIC_URL + '/img/thumb.png'} />

                        <Card.Content>
                            <Card.Header>{user.username}</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <form>
                                <input type='number' name='friend_id' defaultValue={user.id} hidden disabled />
                                <button type='submit' className='ui button purple fluid'>Accept Friend</button>
                            </form>
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
