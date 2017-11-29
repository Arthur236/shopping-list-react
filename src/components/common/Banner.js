import React from 'react';

const Banner = () => {
    return(
        <div className="row">
            <div className="col s12 m12 l12">
                <div className="brand">
                    <img src={process.env.PUBLIC_URL + '/img/logo_white.png'} alt="Logo" height="90px"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;
