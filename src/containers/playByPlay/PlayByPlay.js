import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {NotificationContainer, GuestPlayersTable} from '../../components';
import {logoList} from '../../static/logo'


const PlayByPlay = props => {

    const { classes, currentGame } = props;
    console.log(currentGame)

    return (
        <Grid container className={classes.mainContainer}> 
            <Grid item xs={6}>
                <Grid item xs={12}>
                    <div className={classes.imageContainer}>
                        <img src={logoList[0].img} className={classes.image} alt="LOGO"></img>
                        <Typography className={classes.score}>65 - 27</Typography> 
                        <img src={logoList[6].img} className={classes.image} alt="LOGO"></img>
                    </div>
                    <Typography>Watching: {/*currentGame.liveGame.activeUsers*/}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <GuestPlayersTable/>
                    <GuestPlayersTable/>
                </Grid>
            </Grid>

            <Grid item xs={6} className={classes.liveNotificationsContainer}>
                <NotificationContainer/>
            </Grid>

            
        </Grid>
    );
}
 
export default PlayByPlay;