import React, { Component } from 'react';
import {Typography, Grid } from '@material-ui/core';
import {GameCard} from '../../components';

class LivePage extends Component {
    state = {  }
    render() { 
        const {classes} = this.props;
        return (  
            <Grid className ={classes.mainContainer}>
                <GameCard></GameCard>
            </Grid>
        );
    }
}
 
export default LivePage;