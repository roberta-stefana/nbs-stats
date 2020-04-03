import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {NotificationContainer, GuestPlayersTable} from '../../components';


const PlayByPlay = () => {
    return (
        <Grid container> 
            <Grid item xs={8}>
                <Typography>jakcs</Typography>
            </Grid>
            <Grid item xs={4}>
                <NotificationContainer/>
            </Grid>
            {
            <Grid item xs={8}>
                <GuestPlayersTable/>
                <GuestPlayersTable/>
            </Grid>
            }
        </Grid>
    );
}
 
export default PlayByPlay;