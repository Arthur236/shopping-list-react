import React, {Component} from 'react';

class BackgroundSlider extends Component {
    render() {
        return(
            <div>
                <div className="slider fullscreen">
                    <ul className="slides">
                        <li><img src={require('../../styles/img/img1.jpg')} alt="Image 1" /></li>
                        <li><img src={require('../../styles/img/img2.jpg')} alt="Image 2" /></li>
                        <li><img src={require('../../styles/img/img3.jpg')} alt="Image 3" /></li>
                        <li><img src={require('../../styles/img/img4.jpg')} alt="Image 4" /></li>
                        <li><img src={require('../../styles/img/img5.jpeg')} alt="Image 5" /></li>
                        <li><img src={require('../../styles/img/img6.jpeg')} alt="Image 6" /></li>
                    </ul>
                </div>

                <div className="overlay"></div>
            </div>
        );
    }
}

export default BackgroundSlider;