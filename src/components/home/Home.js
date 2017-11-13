import React from 'react';
import {Link} from 'react-router';
import BackgroundSlider from '../common/BackgroundSlider';
import PreLoader from "../common/PreLoader";
import LandingContent from "./LandingContent";

class Home extends React.Component {
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