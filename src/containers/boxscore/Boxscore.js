import React from 'react';
import {BoxscoreTable} from '../../components';
import { Typography, Divider } from '@material-ui/core';

const Boxscore = (props) => {
    const {statsTeam1, statsTeam2, team1, team2, classes} = props;

    return (
        <div className={classes.tableContainer}>
            <BoxscoreTable stats={statsTeam1} team={team1.name}/>
            <div className={classes.coachContainer}>
                <span className={classes.coachSquare}/>
                <Typography className={classes.textCoach}>Coach: {team1.coach}</Typography>             
            </div>


            <BoxscoreTable stats={statsTeam2} team={team2.name}/>
            <div className={`${classes.coachContainer} ${classes.bottom}`}>
                <span className={classes.coachSquare}/>
                <Typography className={classes.textCoach}>Coach: {team2.coach}</Typography>
            </div>
        </div>
    );
}
 
export default Boxscore;