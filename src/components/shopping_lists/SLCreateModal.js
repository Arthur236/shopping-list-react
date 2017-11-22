import React, { Component } from 'react';

class SLCreateModal extends Component {

    render() {
        return(
            <div id="create_modal" className="modal">
                <div className="modal-content">
                    <h4>Add Item</h4>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="name">Name</label>
                                <input id="name" name="name" required="required" type="text" autoFocus />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="description">Description</label>
                                <input id="description" name="description" type="text" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" name="add"
                                    className="modal-action waves-effect waves-green btn-flat left">
                                Create
                            </button>
                            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

SLCreateModal.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default SLCreateModal;
