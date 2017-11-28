import React from 'react';
import Footer from "../common/Footer";
import { Link } from 'react-router-dom';
import Banner from "../common/Banner";

const LandingContent = () => {
        return (
            <div className="ui inverted vertical center aligned segment landingContent">
                <div className="ui container">
                    <div className="ui massive borderless inverted menu">
                        <h1 className="header item">Shopping List App</h1>
                    </div>
                </div>

                <div className="ui text container">
                    <h1 className="ui inverted header">Welcome To The Ultimate Shopping List Helper</h1>
                    <h3>Get organized and never forget items of interest</h3>
                    <Link to='/register' className='ui purple huge icon left labeled button'>
                        <i aria-hidden="true" className="user circle icon" />
                        Sign Up
                    </Link>
                    <Link to='/login' className='ui purple huge icon left labeled button'>
                        <i aria-hidden="true" className="sign in icon" />
                        Sign In
                    </Link>
                </div>

                <div className="ui inverted vertical footer segment">
                    <p>©2017 Shopping List Application. A project by Arthur Thungu</p>
                </div>
            </div>
        );
};

export default LandingContent;
