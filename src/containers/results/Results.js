import React, { Component } from 'react';
import {ResultCard} from '../../components'
import {Grid} from '@material-ui/core';

class Results extends Component {
    state = {  }

    componentDidMount(){
        this.props.getResultList();
    }

    render() { 
        const { classes, resultList} = this.props;

        return (
            <Grid className ={classes.mainContainer}>
                {resultList.map(g => 
                    <ResultCard key={g.idGame} game={g} ></ResultCard>
                )} 

            </Grid>
        );
    }
}
 
export default Results;