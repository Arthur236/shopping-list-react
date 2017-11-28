import React, { Component } from 'react';
import customJs from '../../static/js/custom';
import BackgroundSlider from '../common/BackgroundSlider';
import PreLoader from "../common/PreLoader";
import LandingContent from "./LandingContent";

class Home extends Component {
    componentDidMount() {
        customJs();
    }

    render() {
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