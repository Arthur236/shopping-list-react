import React from 'react';
import {  Dimmer, Loader, Segment } from 'semantic-ui-react';

const PreLoader = ({size}) => {
    return (
        <Segment className="loader">
            <Dimmer active>
                <Loader size='massive'>Loading</Loader>
            </Dimmer>
        </Segment>
    );
};

export default PreLoader;
