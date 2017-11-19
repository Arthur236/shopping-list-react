import React, { Component } from 'react';
import loadjs from 'loadjs';
import BackgroundSlider from '../common/BackgroundSlider';
import PreLoader from "../common/PreLoader";
import LandingContent from "./LandingContent";

class Home extends Component {
    componentDidMount() {
        loadjs(process.env.PUBLIC_URL + '/js/custom.js');
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