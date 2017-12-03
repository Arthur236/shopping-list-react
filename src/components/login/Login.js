import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import Notifications from 'react-notify-toast';

class Login extends Component {
    render() {
        return(
            <div>
                <Notifications />
                <LoginForm />
            </div>
        );
    }
}

export default Login;