import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createList } from "../../actions/shoppingListActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator'

class SLEditModal extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {

    }

    render() {
        const { handleSubmit, shoppingList } = this.props;

        return(
            <div id={`md_edit_${ shoppingList.id }`} className="modal">
                <div className="modal-content">
                    <h4>Edit { shoppingList.name }</h4>
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <FormInput
                            type="text"
                            label="Name"
                            name="name"
                            required="required"
                            value={shoppingList.name}/>

                        <FormInput
                            type="text"
                            label="Description"
                            name="description"
                            required="required"
                            value={shoppingList.description}/>

                        <div className="modal-footer">
                            <button type="submit" name="add"
                                    className="modal-action modal-close waves-effect waves-green btn-flat left">
                                Edit
                            </button>
                            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

SLEditModal.propTypes = {
    shoppingList: PropTypes.object.isRequired
};

export default reduxForm({
    validate,
    form: 'SLEditForm'
})(connect(null, { createShoppingList: createList })(SLEditModal));
