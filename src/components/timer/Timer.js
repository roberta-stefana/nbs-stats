import React from 'react';
import { Typography, Paper } from '@material-ui/core';


const Timer = props => {

    const {minutes, seconds, classes} = props;

    return ( 
        <div className={classes.timerContainer}>
            <Paper className={classes.timerTile}>
                <Typography variant="h4" className={classes.time}>{minutes === 10 ? minutes : `0${minutes}` }</Typography>
            </Paper>
            <Paper className={classes.timerTile}>
                <Typography variant="h4" className={classes.time}>{seconds > 9 ? seconds : `0${seconds}`}</Typography>
            </Paper>
            
        </div>
    );
}
 
export default Timer;
