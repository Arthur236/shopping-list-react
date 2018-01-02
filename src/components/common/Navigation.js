import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const Navigation = ({logout}) => {
    return (
        <div className="ui inverted huge borderless fluid menu">
            <Link to="/dashboard" className="header item">Shopping List App</Link>
            <div className="right menu">
                <div className="ui simple dropdown item">
                    <a className="item">Friends</a>
                    <i className="dropdown icon"/>
                    <div className="menu">
                        <Link to="/friends" className="item">Friends</Link>
                        <div className="divider"/>
                        <Link to="/friends/requests" className="item">Friend Requests</Link>
                        <div className="divider"/>
                        <Link to="/shopping_lists/share" className="item">Shared Lists</Link>
                    </div>
                </div>
                <div className="ui simple dropdown item">
                    <img className="ui avatar image" src={process.env.PUBLIC_URL + '/img/avatar.png'} alt="avatar"/>
                    <i className="dropdown icon"/>
                    <div className="menu">
                        <Link id="profile" to="/dashboard" className="item">Profile</Link>
                        <div className="divider"/>
                        <a id="logout" onClick={logout} className="item">Sign Out</a>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Validate propTypes
Navigation.propTypes = {
    logout: PropTypes.func.isRequired
};

export default Navigation;
