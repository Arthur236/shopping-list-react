import React, { Component } from 'react';
import { customJs } from "../../styles/js/custom";
import BackgroundSlider from '../common/BackgroundSlider';
import RegistrationForm from "./RegistrationForm";

class Register extends Component {
    componentDidMount() {
        customJs();
    }

    render() {
        return(
            <div>
                <BackgroundSlider />
                <RegistrationForm />
            </div>
        );
    }
}

export default Register;