import React, { Component } from 'react';
import{ 
    Grid, Typography
} from '@material-ui/core'
import {PlayersTable} from '../../components';

class Game extends Component {
    state = {  }
    render() { 
        return ( 
            <Grid container>
                <Grid item>
                    <Typography>llalala</Typography>
                    <PlayersTable></PlayersTable>
                </Grid>
            </Grid>     
        );
    }
}
 
export default Game;