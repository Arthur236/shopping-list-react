import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeleteList from "./DeleteList";

const ListColumn = ({ shoppingList }) => {
    let description = '';

    if (!shoppingList.description) {
        description = 'No description added';
    } else {
        description = shoppingList.description;
    }

    return (
        <Card color="purple" link={`/shopping_lists/${shoppingList.id}/items`}>
            <Image src={process.env.PUBLIC_URL + '/img/thumb.png'} />

            <Card.Content>
                <Card.Header>{shoppingList.name}</Card.Header>
                <Card.Meta>{shoppingList.date_created}</Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a><Icon name='edit' className="left aligned orange"/>Edit</a>
                <a><Icon name='trash' className="right aligned red"/>Delete</a>
            </Card.Content>
        </Card>

        // <div className="col s12 m6 l6">
        //     <div className="card white">
        //         <div className="card-content">
        //             <Link to={`/shopping_lists/${shoppingList.id}/items`}>
        //                 <span className="card-title">{shoppingList.name}</span>
        //             </Link>
        //             <div className="fixed-action-btn horizontal">
        //                 <a className="btn-floating btn tooltipped" data-position="top" data-delay="100"
        //                    data-tooltip="Menu">
        //                     <i className="material-icons">menu</i>
        //                 </a>
        //                 <ul>
        //                     <li>
        //                         <a href={`#md_delete_${shoppingList.id}`}
        //                            className="btn-floating modal-trigger tooltipped" data-position="top"
        //                            data-delay="100" data-tooltip="Delete">
        //                             <i className="material-icons">delete</i>
        //                         </a>
        //                     </li>
        //
        //                     <li>
        //                         <Link to={`/shopping_lists/edit/${shoppingList.id}`} className="btn-floating tooltipped" data-position="top" data-delay="100" data-tooltip="Edit">
        //                             <i className="material-icons">edit</i>
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <p className="truncateTxt">
        //                 {description}
        //             </p>
        //         </div>
        //     </div>
        //
        //     <DeleteList shoppingList={shoppingList} />
        // </div>
    );
};

ListColumn.propTypes = {
    shoppingList: PropTypes.object.isRequired
};

export default ListColumn;
