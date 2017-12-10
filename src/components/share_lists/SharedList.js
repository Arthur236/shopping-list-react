import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeleteSharedList from "./DeleteSharedList";

const SharedList = ({ sharedLists }) => {
    const { shared_lists } = sharedLists;

    return (
        <Card.Group itemsPerRow={3}>
            { _.map(shared_lists, sharedList =>
                <Card color="purple" key={sharedList.id}>
                    <Link to={`/shopping_lists/share/${sharedList.id}/items`}>
                        <Image src={process.env.PUBLIC_URL + '/img/thumb.png'} />
                    </Link>

                    <Card.Content>
                        <Card.Header>{sharedList.name}</Card.Header>
                        <Card.Meta>Created on: {sharedList.date_created}</Card.Meta>
                        <Card.Description>{sharedList.description ? sharedList.description : 'No description added'}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <DeleteSharedList sharedList={sharedList} />
                    </Card.Content>
                </Card>
            ) }
        </Card.Group>
    );
};

SharedList.propTypes = {
    sharedLists: PropTypes.object.isRequired
};

export default SharedList;
