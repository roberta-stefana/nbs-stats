import React, { Component } from 'react';
import {Typography, Grid } from '@material-ui/core';
import {GameCard} from '../../components';

class LivePage extends Component {
    state = {  }

    componentDidMount(){
        this.props.getLiveGameList();
    }
    render() { 
        const {classes, liveGameList} = this.props;
        return ( 
            
            <Grid className ={classes.mainContainer}>
                {liveGameList.map(g => 
                    <GameCard key={g.idGame} game={g} ></GameCard>
                )} 

            </Grid>
        );
    }
}
 
export default LivePage;