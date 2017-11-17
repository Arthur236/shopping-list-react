import React, { Component } from 'react';
import Footer from "../common/Footer";
import { Link } from 'react-router-dom';
import Banner from "../common/Banner";

class LandingContent extends Component {
    render() {
        return (
            <div className="landingContent" id="pageContent">
                <div className="container">
                    <Banner />

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

                            <div className="col s12 m12 btnsContainer center-align wow fadeInLeft">
                                <Link to="/auth/login" className="btn btn-large waves-effect waves-dark deep-purple">Sign In</Link>
                                <Link to="/auth/register" className="btn btn-large waves-effect waves-dark deep-purple">Sign Up</Link>
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