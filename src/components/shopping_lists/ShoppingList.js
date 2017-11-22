import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import loadjs from 'loadjs';
import SLDeleteModal from "./SLDeleteModal";

class ShoppingList extends Component {
    componentDidMount() {
        loadjs(process.env.PUBLIC_URL + '/js/custom.js');
    }

    render() {
        const { shoppingList } = this.props;

        let description = '';

        if (!shoppingList.description) {
            description = 'No description added';
        } else {
            description = shoppingList.description;
        }

        return (
            <div className="col s12 m6 l6">
                <div className="card white">
                    <div className="card-content">
                        <Link to={`/shopping_lists/${shoppingList.id}`}>
                            <span className="card-title">{shoppingList.name}</span>
                        </Link>
                        <div className="fixed-action-btn horizontal">
                            <a className="btn-floating btn tooltipped" data-position="top" data-delay="100"
                               data-tooltip="Menu">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul>
                                <li>
                                    <a href={`#modal_${shoppingList.name}`}
                                       className="btn-floating modal-trigger tooltipped" data-position="top"
                                       data-delay="100" data-tooltip="Delete">
                                        <i className="material-icons">delete</i>
                                    </a>
                                </li>

                                <li>
                                    <Link to={`/shopping_lists/${shoppingList.id}`} className="btn-floating tooltipped"
                                          data-position="top" data-delay="100" data-tooltip="Edit">
                                        <i className="material-icons">edit</i>
                                    </Link>
                                </li>

                                <li>
                                    <a href={`/shopping_lists/${shoppingList.id}`} className="btn-floating tooltipped"
                                       data-position="top" data-delay="100" data-tooltip="Add Item">
                                        <i className="material-icons">add</i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className="truncateTxt">
                            {description}
                        </p>
                    </div>
                </div>

                <SLDeleteModal shoppingList={shoppingList}/>
            </div>
        );
    }
}

export default ShoppingList;
