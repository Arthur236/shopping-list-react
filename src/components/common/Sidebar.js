import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return(
        <div id="slide-out" className="side-nav">
            <div className="container">
                <div className="brand">
                    <img src={process.env.PUBLIC_URL + '/img/logo_white.png'} width="210px" alt="Logo" />
                </div>

                <ul className="user-options">
                    <li>
                        <a href="#" className="userLink">
                            <h5>USERNAME</h5>
                        </a>
                    </li>
                    <hr/>
                    <li className="active"><Link to="/dashboard" className="">My Shopping Lists</Link></li>
                    <li><Link to="/logout" className="">Sign Out</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
