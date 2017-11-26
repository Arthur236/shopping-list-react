import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from "../../actions/authActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator'
import Loader from '../common/Loader';

class RegistrationForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            loading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.setState({ loading: true });

        this.props.register(values)
            .then(() => {
                this.setState({ loading: false });
                this.context.router.history.push('/auth/login');
            })
            .catch(() => {
                this.setState({ loading: false })
            });
    }

    render() {
        const { handleSubmit } = this.props;
        let button = '';

        if (this.state.loading) {
            button = <div className="center-align"><Loader size="small"/></div>;
        } else {
            button = <button type="submit" className="btn btn-large formBtn waves-effect waves-dark deep-purple">Register</button>;
        }

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
                            { button }
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

// Pull in the React Router context so router is available on this.context.router.
RegistrationForm.contextTypes = {
    router: PropTypes.object
};

export default reduxForm({
    validate,
    form: 'SignUpForm'
})(connect(null, { register })(RegistrationForm));
