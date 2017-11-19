import React, { Component } from 'react';
import loadjs from 'loadjs';
import BackgroundSlider from '../common/BackgroundSlider';
import RegistrationForm from "./RegistrationForm";
import Banner from "../common/Banner";

class Register extends Component {
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
                <RegistrationForm />
            </div>
        );
    }
}

export default Register;