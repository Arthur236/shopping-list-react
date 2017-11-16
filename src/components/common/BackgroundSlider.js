import React, { Component } from 'react';

class BackgroundSlider extends Component {
    render() {
        return(
            <div>
                <div className="slider fullscreen">
                    <ul className="slides">
                        <li><img src={require('../../styles/img/img1.jpg')} alt="Slider 1" /></li>
                        <li><img src={require('../../styles/img/img2.jpg')} alt="Slider 2" /></li>
                        <li><img src={require('../../styles/img/img3.jpg')} alt="Slider 3" /></li>
                        <li><img src={require('../../styles/img/img4.jpg')} alt="Slider 4" /></li>
                        <li><img src={require('../../styles/img/img5.jpeg')} alt="Slider 5" /></li>
                        <li><img src={require('../../styles/img/img6.jpeg')} alt="Slider 6" /></li>
                    </ul>
                </div>

                <div className="overlay"></div>
            </div>
        );
    }
}

export default BackgroundSlider;