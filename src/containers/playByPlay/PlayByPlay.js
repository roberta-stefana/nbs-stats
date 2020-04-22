import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import {NotificationContainer, GuestPlayersTable} from '../../components';
import {logoList} from '../../static/logo'

class PlayByPlay extends Component {
    state = {
        imageTeam1: null,
        imageTeam2: null,
      }

    componentDidMount(){
        const team1 = localStorage.getItem('team1');
        const team2 = localStorage.getItem('team2');
        logoList.map(l=>{
            if(l.team === team1){
                this.setState({
                    imageTeam1: l.img
                });
            }else if(l.team == team2){
                this.setState({
                    imageTeam2: l.img
                });
            }
        });
    }

    render() { 
        const { classes, game, liveGame } = this.props;
        const { imageTeam1, imageTeam2 } = this.state;

        return (
            <Grid container className={classes.mainContainer}> 
                {game === null && liveGame === null
                ? <Typography>LOADING</Typography>
                :
                <React.Fragment>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <div className={classes.imageContainer}>
                            <img src={imageTeam1} className={classes.image} alt="LOGO"></img>
                            <Typography className={classes.score}>{liveGame.points1}-{liveGame.points2}</Typography> 
                            <img src={imageTeam2} className={classes.image} alt="LOGO"></img>
                        </div>
                        <Typography>Watching: {liveGame.activeUsers}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <GuestPlayersTable/>
                        <GuestPlayersTable/>
                    </Grid>
                </Grid>
    
                <Grid item xs={6} className={classes.liveNotificationsContainer}>
                    <NotificationContainer/>
                </Grid>
                </React.Fragment>
                }
                
            </Grid>
        );
    }
}
 
export default PlayByPlay;