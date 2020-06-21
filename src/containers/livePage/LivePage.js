import React, { Component } from 'react';
import {Typography, Grid } from '@material-ui/core';
import {GameCard} from '../../components';
import {LogoNbs} from '../../static/logo';

class LivePage extends Component {
    state = {  }

    componentDidMount(){
        this.props.getLiveGameList();
    }
    render() { 
        const {classes, liveGameList} = this.props;
        return ( 
            
            <Grid className ={classes.mainContainer}>
                {liveGameList.length === 0 ? 
                    <div className={classes.messageBox}>
                        <Typography variant="h4" className={classes.text}> There are no live games at the moment.</Typography>
                        <Typography variant="h5" className={classes.text}>Please come back later.</Typography>
                        <img src={LogoNbs} alt='website logo' className={classes.logo} />
                    </div>
                :
                liveGameList.map(g => 
                    <GameCard key={g.idGame} game={g} ></GameCard>
                )} 

            </Grid>
        );
    }
}
 
export default LivePage;