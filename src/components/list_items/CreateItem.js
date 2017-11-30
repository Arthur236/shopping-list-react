import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import customJs from '../../static/js/custom';
import Sidebar from "../common/Sidebar";
import Navigation from "../common/Navigation";
import { createItem } from "../../actions/listItemActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator'

class CreateItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        customJs();
    }

    onSubmit(values) {
        const id = this.props.match.params.id;

        this.props.createItem(id, values, () => {
            this.context.router.history.push('/shopping_lists/'+ id +'/items');
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
                            <h4>Add Item</h4>
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <FormInput
                                    type="text"
                                    label="Name"
                                    name="name"
                                    required="required" />

                                <FormInput
                                    type="number"
                                    label="Quantity"
                                    name="quantity"
                                    required="required" />

                                <FormInput
                                    type="number"
                                    label="Unit Price"
                                    name="unit_price"
                                    required="required" />

                                <button type="submit" className="btn btn-large formBtn waves-effect waves-dark deep-purple">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Pull in the React Router context so router is available on this.context.router.
CreateItem.contextTypes = {
    router: PropTypes.object
};

CreateItem.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default reduxForm({
    validate,
    form: 'CreateItemForm'
})(connect(null, { createItem })(CreateItem));
