import React, { Component } from 'react';

const Navigation = ({ header }) => {
    return(
        <nav className="deep-purple">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{ header }</a>
                <a href="#" data-activates="slide-out" className="button-collapse show-on-large">
                    <i className="material-icons">menu</i>
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
