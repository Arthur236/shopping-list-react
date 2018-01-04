import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from 'semantic-ui-react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {sendResetRequest} from "../../actions/resetActions";
import FormInput from '../common/FormInput';
import validate from '../../utils/formValidator';
import Footer from '../common/Footer';

export class EmailSubmit extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.sendResetRequest(values);
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
                            <h1 className="ui inverted header">Send Request</h1>

                            <FormInput
                                type="email"
                                placeholder="Email"
                                name="email"
                                required="required"
                                icon="mail"/>

                            {button}
                        </Form>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

// Define prop types
EmailSubmit.propTypes = {
    sendResetRequest: PropTypes.func,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired
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
})(connect(mapStateToProps, {sendResetRequest})(EmailSubmit));
