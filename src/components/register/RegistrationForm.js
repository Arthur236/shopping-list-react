import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { register } from "../../actions/authActions";
import validate from '../../utils/formValidator'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = { redirect: false };

        this.renderField = this.renderField.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.register(values, () => {
            this.setState({ redirect: true });
        });
    }

    renderField(field) {
        const { meta } = field;

        return(
            <div className="input-field col s12">
                <input type={ field.type }
                       required={ field.required }
                       { ...field.input } />
                <label htmlFor={ field.name }>
                    { field.label }
                </label>
                <span className="errorText">
                    { meta.touched ? meta.error : "" }
                </span>
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;

        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        return(
            <div className="row container formsContainer wow fadeInRight">
                <div className="col s8 offset-s2 landingForm">
                    <div className="col s12">
                        <h3>Register</h3>
                    </div>

                    <form onSubmit={handleSubmit(this.onSubmit)}>
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

export default reduxForm({
    validate,
    form: 'RegisterForm'
})(connect(null, { register })(RegistrationForm));
