import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import {BoxscoreTable} from '../../components';


const StatsResults = props => {
    const { game, imageTeam1, imageTeam2, classes, back, statsTeam1, statsTeam2 } = props;
    console.log(props)

    return ( 
        <Grid container>
            <Grid item xs={12}>
                <Button
                    size="medium"
                    className={classes.backButton}
                    onClick={() => back()}
                    variant="outlined"
                >
                    BACK
                </Button>
                <div className={classes.imageContainer}>
                    <div className={classes.logoContainer}>
                        <img src={imageTeam1} alt='logo' className={classes.logo} />
                        <Typography>{game.team1.name}</Typography>
                    </div>
                    <Typography variant="h3">{game.liveGame.points1}</Typography>
                    <Typography>VS</Typography>
                    <Typography variant="h3">{game.liveGame.points2}</Typography>
                    <div className={classes.logoContainer}>
                        <img src={imageTeam2} alt='logo' className={classes.logo} />
                        <Typography>{game.team2.name}</Typography>
                    </div>
                </div>
            </Grid>
            <Grid className={classes.tables}>
                
                <BoxscoreTable  stats={statsTeam1} team={game.team1.name}/>
                <div className={classes.coachContainer}>
                <span className={classes.coachSquare}/>
                    <Typography className={classes.textCoach}>Coach: {game.team1.coach}</Typography>             
                </div>
                <BoxscoreTable  stats={statsTeam2} team={game.team2.name}/>
                <div className={classes.coachContainer}>
                    <span className={classes.coachSquare}/>
                <Typography className={classes.textCoach}>Coach: {game.team1.coach}</Typography>             
            </div>
            </Grid>
        </Grid>
    );
}
 
export default StatsResults;

