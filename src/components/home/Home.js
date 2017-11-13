import React, {Component} from 'react';
import BackgroundSlider from '../common/BackgroundSlider';
import PreLoader from "../common/PreLoader";
import LandingContent from "./LandingContent";
import '../../styles/js/custom';

class Home extends Component {
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