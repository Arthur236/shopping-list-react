import React, { Component } from 'react';

class SLDeleteModal extends Component {

    render() {
        const { shoppingList } = this.props;

        return(
            <div id={`md_delete_${ shoppingList.id }`} className="modal">
                <div className="modal-content">
                    <h4>Delete { shoppingList.name }</h4>
                    <p>Are you sure you want to delete this shopping list?</p>
                </div>
                <div className="modal-footer">
                    <form className="left">
                        <button className="modal-action modal-close waves-effect waves-green btn-flat"  type="submit" name="add">
                            Delete
                        </button>
                    </form>
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
            </div>
        );
    }
}

SLDeleteModal.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SLDeleteModal;