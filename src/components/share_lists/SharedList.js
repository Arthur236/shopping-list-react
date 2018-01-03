import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeleteSharedList from "./DeleteSharedList";

const SharedList = ({ sharedLists, handleRemove }) => {
    const { shared_lists } = sharedLists;

    return (
        <Item.Group>
            { _.map(shared_lists, sharedList =>
                <Item key={sharedList.id}>
                    <Item.Image size="small" src={process.env.PUBLIC_URL + '/img/thumb.png'} />

                    <Item.Content>
                        <Item.Header>
                            <Link to={`/shopping_lists/share/${sharedList.id}/items`}>{sharedList.name}</Link>
                        </Item.Header>

                        <Item.Meta>Created on: {sharedList.date_created}</Item.Meta>

                        <Item.Description>
                            {sharedList.description ? sharedList.description : 'No description added'}
                        </Item.Description>

                        <Item.Extra>
                            <DeleteSharedList sharedList={sharedList} handleRemove={handleRemove} />
                        </Item.Extra>
                    </Item.Content>
                </Item>
            ) }
        </Item.Group>
    );
};

// Define prop types
SharedList.propTypes = {
    sharedLists: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired
};

export default SharedList;
