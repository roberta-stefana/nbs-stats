import React from 'react';
import { Grid, Toolbar, Typography } from '@material-ui/core';
import {LeadersList} from '../../components';

const Leaders = props => {
    const {classes, statsTeam1, statsTeam2, team1, team2} = props;

    let orderedPointsTeam1 =statsTeam1.slice().sort(function(a, b){
        let pointsA = a.madeFt + a.made2p*2 + a.made3p * 3
        let pointsB = b.madeFt + b.made2p*2 + b.made3p * 3
        return pointsA<pointsB
    }).slice(0,3)

    let orderedPointsTeam2 =statsTeam2.slice().sort(function(a, b){
        let pointsA = a.madeFt + a.made2p*2 + a.made3p * 3
        let pointsB = b.madeFt + b.made2p*2 + b.made3p * 3
        return pointsA<pointsB
    }).slice(0,3)

    let orderedAssistsTeam1 =statsTeam1.slice().sort(function(a, b){
        return a.assists<b.assists
    }).slice(0,3)

    let orderedAssistsTeam2 =statsTeam2.slice().sort(function(a, b){
        return a.assists<b.assists
    }).slice(0,3)

    let orderedReboundsTeam1 =statsTeam1.slice().sort(function(a, b){
        let rebA = a.offRebounds + a.defRebounds
        let rebB = b.offRebounds + b.defRebounds
        return rebA < rebB
    }).slice(0,3)

    let orderedReboundsTeam2 =statsTeam2.slice().sort(function(a, b){
        let rebA = a.offRebounds + a.defRebounds
        let rebB = b.offRebounds + b.defRebounds
        return rebA < rebB
    }).slice(0,3)

    return ( 
        <Grid container direction="column" justify="space-around" alignItems="center">
            <Toolbar 
                classes={{
                    root: classes.toolbar,
                }}
            >
                <Typography className={classes.title}>STATISTIC LEADERS - POINTS</Typography>
            </Toolbar>
            <div className={classes.div}>
                <LeadersList stats={orderedPointsTeam1} flag="POINTS" team={team1}/>
                <LeadersList stats={orderedPointsTeam2} flag="POINTS" team={team2}/>
            </div>
            <Toolbar 
                classes={{
                    root: `${classes.toolbar} ${classes.margin}`,
                }}
            >
                <Typography className={classes.title}>STATISTIC LEADERS - ASSISTS</Typography>
            </Toolbar>
            <div className={classes.div}>
                <LeadersList stats={orderedAssistsTeam1} flag="ASSISTS" team={team1}/>
                <LeadersList stats={orderedAssistsTeam2} flag="ASSISTS" team={team2}/>
            </div>
            <Toolbar 
                classes={{
                    root: `${classes.toolbar} ${classes.margin}`,
                }}
            >
                <Typography className={classes.title}>STATISTIC LEADERS - REBOUNDS</Typography>
            </Toolbar>
            <div className={classes.div}>
                <LeadersList stats={orderedReboundsTeam1} flag="REBOUNDS" team={team1}/>
                <LeadersList stats={orderedReboundsTeam2} flag="REBOUNDS" team={team2}/>
            </div>
        </Grid>
    );
}
 
export default Leaders;