import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import {BoxscoreTable} from '../../components';


const StatsResults = props => {
    const { game } = props;
    console.log(props)

    return ( 
        <Grid>
            <BoxscoreTable  team={game.team1.name}/>
            <BoxscoreTable  team={game.team2.name}/>
        </Grid>
    );
}
 
export default StatsResults;

