import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SLEditModal from "./SLEditModal";
import SLDeleteModal from "./SLDeleteModal";

const SListCol = ({ shoppingList }) => {
    let description = '';

    if (!shoppingList.description) {
        description = 'No description added';
    } else {
        description = shoppingList.description;
    }

    const { id, name } = shoppingList;

    return (
        <div className="col s12 m6 l6">
            <div className="card white">
                <div className="card-content">
                    <Link to={`/shopping_lists/${id}`}>
                        <span className="card-title">{name}</span>
                    </Link>
                    <div className="fixed-action-btn horizontal">
                        <a className="btn-floating btn tooltipped" data-position="top" data-delay="100"
                           data-tooltip="Menu">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul>
                            <li>
                                <a href={`#md_delete_${id}`} className="btn-floating modal-trigger tooltipped"
                                   data-position="top" data-delay="100" data-tooltip="Delete">
                                    <i className="material-icons">delete</i>
                                </a>
                            </li>

                            <li>
                                <a href={`#md_edit_${id}`} className="btn-floating tooltipped"
                                      data-position="top" data-delay="100" data-tooltip="Edit">
                                    <i className="material-icons">edit</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className="truncateTxt">
                        {description}
                    </p>
                </div>
            </div>

            {/*<SLEditModal shoppingList={shoppingList} />*/}
            {/*<SLDeleteModal shoppingList={shoppingList}/>*/}
        </div>
    );
};

SListCol.propTypes = {
    shoppingList: PropTypes.object.isRequired
};

export default SListCol;
