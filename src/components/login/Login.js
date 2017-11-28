import React, { Component } from 'react';
import customJs from '../../static/js/custom';
import BackgroundSlider from '../common/BackgroundSlider';
import LoginForm from "./LoginForm";
import Banner from "../common/Banner";

class Login extends Component {
    componentDidMount() {
        customJs();
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