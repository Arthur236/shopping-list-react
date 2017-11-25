import React from 'react';
import Loader from './Loader';

const PreLoader = () => {
    return (
        <div className="preloaderBackground">
            <Loader size="large" />
        </div>
    );
};

export default PreLoader;