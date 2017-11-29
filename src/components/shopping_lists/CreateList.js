import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import customJs from '../../static/js/custom';
import Sidebar from "../common/Sidebar";
import Navigation from "../common/Navigation";
import { createList } from "../../actions/shoppingListActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator'

class CreateList extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        customJs();
    }

    onSubmit(values) {
        this.props.createList(values, () => {
            this.context.router.history.push('/dashboard');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <div>
                <Sidebar />
                <Navigation header="Create List" />

                <div className="content">
                    <div className="dashboard">
                        <div className="container wow fadeInRight">
                            <h4>Create Shopping List</h4>
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

                                <button type="submit" className="btn btn-large formBtn waves-effect waves-dark deep-purple">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Pull in the React Router context so router is available on this.context.router.
CreateList.contextTypes = {
    router: PropTypes.object
};

CreateList.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default reduxForm({
    validate,
    form: 'CreateListForm'
})(connect(null, { createList })(CreateList));
