import React from 'react';
import {  Dimmer, Loader, Grid } from 'semantic-ui-react';

const PreLoader = () => {
    return (
        <Dimmer active>
            <Grid centered columns={2}>
                <Grid.Row centered columns={4}>
                    <Loader content='Loading' size='massive' />
                </Grid.Row>
            </Grid>
        </Dimmer>
    );
};

export default PreLoader;
