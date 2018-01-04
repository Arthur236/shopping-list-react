import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from 'semantic-ui-react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {passwordReset} from "../../actions/resetActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator';
import Footer from '../common/Footer';

export class PasswordSubmit extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        const token = this.props.match.params.token;

        this.props.passwordReset(values, token)
            .then(() => {
                this.context.router.history.push('/login');
            });
    }

    render() {
        const {handleSubmit, loading} = this.props;
        let button = '';

        if (loading) {
            button = <Button type="submit" inverted disabled loading color="purple" className="fluid">Send Request</Button>;
        } else {
            button = <Button type="submit" inverted color="purple" className="fluid">Send Request</Button>;
        }

        return (
            <div className="ui center aligned inverted landingContent">
                <img src={process.env.PUBLIC_URL + '/img/img5.jpeg'} alt="background"/>
                <div className="overlay"/>

                <div className="ui inverted center aligned grid">
                    <div className="ui inverted container formContainer">
                        <Form onSubmit={handleSubmit(this.onSubmit)} onChange={this.onChange}>
                            <h1 className="ui inverted header">Enter New Password</h1>

                            <FormInput
                                type="password"
                                placeholder="Password"
                                name="password"
                                required="required"
                                icon="key"/>

                            {button}
                        </Form>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

// Pull in the React Router context so router is available on this.context.router.
PasswordSubmit.contextTypes = {
    router: PropTypes.object
};

// Define prop types
PasswordSubmit.propTypes = {
    passwordReset: PropTypes.func,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    match: PropTypes.object
};

// Map store state to component props
export function mapStateToProps(state) {
    return {
        loading: state.reset.loading
    };
}

export default reduxForm({
    validate,
    form: 'EmailSubmitForm'
})(connect(mapStateToProps, {passwordReset})(PasswordSubmit));
