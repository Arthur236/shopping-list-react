import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from "../../actions/authActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.setState({ isLoading: true });

        this.props.register(values)
            .then(() => {
                this.props.history.push('/auth/login');
            },
            error => this.setState({ isLoading: false })
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

                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <FormInput
                            type="text"
                            label="Username"
                            name="username"
                            required="required"/>

                        <FormInput
                            type="email"
                            label="Email"
                            name="email"
                            required="required"/>

                        <FormInput
                            type="password"
                            label="Password"
                            name="password"
                            required="required"/>

                        <FormInput
                            type="password"
                            label="Confirm Password"
                            name="c_password"
                            required="required"/>

                        <div className="input-field col s12">
                            <button type="submit" className="btn btn-large formBtn waves-effect waves-dark deep-purple">Register</button>
                        </div>
                    </form>

                    <div className="col s12">
                        <p className="center-align ">
                            Already have an account? <Link to="/auth/login" className="formLink">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    validate,
    form: 'SignUpForm'
})(connect(null, { register })(RegistrationForm));
