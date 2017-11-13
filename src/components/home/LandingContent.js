import React, {Component} from 'react';
import Footer from "../common/Footer";
import {Link} from 'react-router-dom';

class LandingContent extends Component {
    render() {
        return (
            <div className="landingContent" id="pageContent">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <div className="brand">
                                <img src={require('../../styles/img/logo_white.png')} height="90px"/>
                            </div>
                        </div>
                    </div>

                    <div className="row landingContent">
                        <div className="col s12 m12">
                            <div className="quote">
                                <ul id="quoteItems">
                                    <li>
                                        <h1 className="line1 wow fadeInLeft">Welcome To The Ultimate Shopping List
                                            Helper</h1>
                                    </li>
                                    <li>
                                        <h3 className="line2 wow fadeInLeft">Get organized and never forget items of
                                            interest</h3>
                                    </li>
                                </ul>
                            </div>

                            <div className="col s12 m12 btnsContainer center-align">
                                {/*<Link to="/login" className="btn btn-large waves-effect waves-dark deep-purple">Sign In</Link>*/}
                                {/*<Link to="/register" className="btn btn-large waves-effect waves-dark deep-purple">Sign Up</Link>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default LandingContent;