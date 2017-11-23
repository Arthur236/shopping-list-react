import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createShoppingList } from "../../actions/shoppingListActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator'

class SLCreateModal extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.createShoppingList(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <div id="create_modal" className="modal">
                <div className="modal-content">
                    <h4>Add Item</h4>
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <FormInput
                            type="text"
                            label="Name"
                            name="name"
                            required="required" />

                        <FormInput
                            type="text"
                            label="Description"
                            name="description"
                            required="required" />

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

export default reduxForm({
    validate,
    form: 'SLCreationForm'
})(connect(null, { createShoppingList })(SLCreateModal));
