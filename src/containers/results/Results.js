import React, { Component } from 'react';
import {ResultCard} from '../../components'
import {Grid} from '@material-ui/core';
import StatsResults from './StatsResults';

class Results extends Component {
    state = { 
        step: 1,
        game: null,
    }

    next = (game) => {
        this.setState({
            step: 2,
            game: game,
        })
    }

    back = () => {
        this.setState({
            step: 1,
            game: null
        })
    }

    componentDidMount(){
        this.props.getResultList();
    }

    render() { 
        const { classes, resultList} = this.props;
        const {step, game} = this.state;

        return (
            <React.Fragment>
                {step === 1 ?
                <Grid className ={classes.mainContainer}>
                    {resultList.map(g => 
                        <ResultCard key={g.idGame} game={g} next={this.next}></ResultCard>
                    )} 

                </Grid>
                :
                <StatsResults game={game}/>
                }
            </React.Fragment>
        );
    }
}
 
export default Results;