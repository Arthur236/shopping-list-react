import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "./common/Footer";

const App = () => {
    return (
        <div className="ui center aligned landingContent">
            <img src={process.env.PUBLIC_URL + '/img/img2.jpg'} alt="background"/>
            <div className="overlay"/>

            <div className="ui container logo">
                <h1 className="ui inverted header">Shopping List App</h1>
            </div>

            <div className="ui text center aligned container landingInfo">
                <h1 className="ui inverted header">Welcome To The Ultimate Shopping List Helper</h1>
                <h3>Get organized and never forget items of interest</h3>
                <Link to="/register" className="ui purple large icon left labeled inverted button landingBtn">
                    <i aria-hidden="true" className="user circle icon"/>
                    Sign Up
                </Link>
                <Link to="/login" className="ui purple large icon left labeled inverted button landingBtn">
                    <i aria-hidden="true" className="sign in icon"/>
                    Sign In
                </Link>
            </div>

            <Footer/>
        </div>
    );
};

export default App;
