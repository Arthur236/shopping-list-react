import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from "../../actions/index";

class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.renderField = this.renderField.bind(this);
    }

    onSubmit(values) {
        this.props.register(values, () => {
            this.props.history.push("/login");
        });
    }

    renderField(field) {
        const { meta } = field;

        return(
            <div className="input-field col s12">
                <input type={ field.type }
                       className="validate"
                       required={ field.required }
                       { ...field.input } />
                <label htmlFor={ field.name }
                       data-error={ meta.error }
                       data-success={"" + field.label + " ok"}>
                    { field.label }
                </label>
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <div className="row container formsContainer wow fadeInRight">
                <div className="col s8 offset-s2 landingForm">
                    <div className="col s12">
                        <h3>Register</h3>
                    </div>

                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            type="text"
                            label="Username"
                            name="username"
                            required="required"
                            component={this.renderField}/>

                        <Field
                            type="email"
                            label="Email"
                            name="email"
                            required="required"
                            component={this.renderField}/>

                        <Field
                            type="password"
                            label="Password"
                            name="password"
                            required="required"
                            component={this.renderField}/>

                        <Field
                            type="password"
                            label="Confirm Password"
                            name="c_password"
                            required="required"
                            component={this.renderField}/>

                        <div className="input-field col s12">
                            <button type="submit" className="btn btn-large formBtn waves-effect waves-dark deep-purple">Register</button>
                        </div>
                    </form>

                    <div className="col s12">
                        <p className="center-align ">
                            Already have an account? <Link to="/login" className="formLink">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate inputs from 'values' object
    if (!values.username) {
        errors.username = "Enter a username";
    }
    if (!values.email) {
        errors.email = "Enter an email";
    }
    if (!values.password) {
        errors.password = "Enter a password";
    }
    if (values.password) {
        if (values.password.length < 6) {
            errors.password = "Password should be at least 6 characters";
        }
    }
    if (!values.c_password) {
        errors.c_password = "Confirm your password";
    }
    if (values.password !== values.c_password) {
        errors.password = "Passwords do not match";
        errors.c_password = "Passwords do not match";
    }

    // If errors is empty, the form can be submitted
    // If errors  has any properties, redux-form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'RegisterForm'
})(connect(null, { register })(RegistrationForm));
