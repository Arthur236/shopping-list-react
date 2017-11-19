import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from "../../actions/authActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator'

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            token: '',
            loggedIn: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(values) {
        this.props.login(values, () => {
            this.setState({ loggedIn: true });
        });
    }

    onChange(event) {
        let fields = {};
        fields[event.target.name] = event.target.value;
        this.setState(fields);
    }

    render() {
        const { handleSubmit } = this.props;

        if (this.state.loggedIn) {
            return <Redirect to="/" />
        }

        return(
            <div className="row container formsContainer loginContainer wow fadeInRight">
                <div className="col s8 offset-s2 landingForm">
                    <div className="col s12">
                        <h3>Log In</h3>
                    </div>

                    <form onSubmit={handleSubmit(this.onSubmit)} onChange={this.onChange}>
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

                        <div className="input-field col s12">
                            <button type="submit" className="btn btn-large formBtn waves-effect waves-dark deep-purple">Log In</button>
                        </div>
                    </form>

                    <div className="col s12">
                        <p className="center-align ">
                            Already have an account? <Link to="/auth/register" className="formLink">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    validate,
    form: 'SignInForm'
})(connect(null, { login })(LoginForm));
