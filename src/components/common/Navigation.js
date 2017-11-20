import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return(
            <nav className="deep-purple">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">TITLE</a>
                    <a href="#" data-activates="slide-out" className="button-collapse show-on-large">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </nav>
        );
    }
}

export default Navigation;