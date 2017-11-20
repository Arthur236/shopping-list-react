import React, { Component } from 'react';
import loadjs from 'loadjs';
import BackgroundSlider from '../common/BackgroundSlider';
import LoginForm from "./LoginForm";
import Banner from "../common/Banner";

class Login extends Component {
    componentDidMount() {
        loadjs(process.env.PUBLIC_URL + '/js/custom.js');
    }

    render() {
        return(
            <div>
                <BackgroundSlider />
                <div className="landingContent" id="pageContent">
                    <div className="container">
                        <Banner />
                    </div>
                </div>
                <LoginForm />
            </div>
        );
    }
}

export default Login;