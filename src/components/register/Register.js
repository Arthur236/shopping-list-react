import React, { Component } from 'react';
import { customJs } from "../../styles/js/custom";
import BackgroundSlider from '../common/BackgroundSlider';
import PreLoader from "../common/PreLoader";
import RegistrationForm from "./RegistrationForm";

class Register extends Component {
    componentDidMount() {
        customJs();
    }

    render() {
        return(
            <div>
                <PreLoader />
                <BackgroundSlider />
                <RegistrationForm />
            </div>
        );
    }
}

export default Register;