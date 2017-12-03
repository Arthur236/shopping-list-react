import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions/listItemActions';

class DeleteItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { shoppingList, item } = this.props;

        this.props.deleteItem(shoppingList, item.id, () => {
            this.context.router.history.push('/shopping_lists/'+ shoppingList +'/items');
        });
    }

    render() {
        const { item } = this.props;

        return(
            <div id={`md_delete_${ item.id }`} className="modal">
                <div className="modal-content">
                    <h4>Delete { item.name }</h4>
                    <p>Are you sure you want to delete this item list?</p>
                </div>
                <div className="modal-footer">
                    <button className="modal-action waves-effect waves-green btn-flat" name="add" onClick={this.onClick}>
                        Delete
                    </button>
                    <button className="modal-action modal-close waves-effect waves-green btn-flat">Close</button>
                </div>
            </div>
        );
    }
}

// Pull in the React Router context so router is available on this.context.router.
DeleteItem.contextTypes = {
    router: PropTypes.object
};

DeleteItem.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default connect(null, { deleteItem })(DeleteItem);
