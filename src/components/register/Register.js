import React, { Component } from 'react';
import RegistrationForm from "./RegistrationForm";
import Notifications from 'react-notify-toast';

class Register extends Component {
    render() {
        return(
            <div>
                <Notifications />
                <RegistrationForm />
            </div>
        );
    }
}

export default Register;