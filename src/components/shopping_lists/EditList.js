import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Sidebar from "../common/Sidebar";
import Navigation from "../common/Navigation";
import { createList } from "../../actions/shoppingListActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator'

class EditList extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {

    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <div>
                <Sidebar />
                <Navigation />

                <div className="content">
                    <div className="dashboard">
                        <div className="container wow fadeInRight">
                            <h4>Edit Shopping List</h4>
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

                                <button type="submit" className="btn btn-large formBtn waves-effect waves-dark deep-purple">Edit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EditList.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default reduxForm({
    validate,
    form: 'CreateListForm'
})(connect(null, null)(EditList));
