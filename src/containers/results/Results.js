import React, { Component } from 'react';
import {ResultCard} from '../../components'
import {Grid} from '@material-ui/core';

class Results extends Component {
    state = {  }

    componentDidMount(){
        console.log('comDId')
        this.props.getResultList();
    }

    render() { 
        const { classes, resultList} = this.props;
        console.log(resultList)

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