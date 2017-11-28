import React, { Component } from 'react';
import customJs from '../../static/js/custom';
import BackgroundSlider from '../common/BackgroundSlider';
import RegistrationForm from "./RegistrationForm";
import Banner from "../common/Banner";

class Register extends Component {
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
                <RegistrationForm />
            </div>
        );
    }
}

export default Register;