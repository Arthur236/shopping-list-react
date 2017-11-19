import React, { Component } from 'react';
import { customJs } from "../../styles/js/custom";
import BackgroundSlider from '../common/BackgroundSlider';
import PreLoader from "../common/PreLoader";
import LandingContent from "./LandingContent";

class Home extends Component {
    componentDidMount() {
        customJs();
    }

    render() {
        console.log(this.state);
        return(
            <div>
                <PreLoader />
                <BackgroundSlider />
                <LandingContent />
            </div>
        );
    }
}

export default Home;