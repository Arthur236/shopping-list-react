import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = ({ header }) => {
    return(
        <div>
            <div className="ui inverted huge borderless fixed fluid menu">
                <a className="header item">Shopping List App</a>
                <div className="center aligned menu">
                    <div className="item">
                        <p>{ header }</p>
                    </div>
                </div>

                <div className="right menu">
                    <div className="item">
                        <div className="ui mini input">
                            <input placeholder="Search..." />
                        </div>
                    </div>
                    <Link to="/dashboard" className="item">Dashboard</Link>
                    <div className="ui simple dropdown item">
                        <img className="ui avatar image" src={process.env.PUBLIC_URL + '/img/avatar.png'} />
                        <i className="dropdown icon" />
                        <div className="menu">
                            <a className="item">Profile</a>
                            <div className="divider" />
                            <a className="item">Sign Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
