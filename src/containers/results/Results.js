import React, { Component } from 'react';
import {ResultCard} from '../../components'
import {Grid} from '@material-ui/core';
import StatsResults from './StatsResults';
import {logoList} from '../../static/logo';

class Results extends Component {
    state = { 
        step: 1,
        game: null,
        imageTeam1: null,
        imageTeam2: null,
    }

    next = (game) => {
        const {setTeam1, setTeam2, getStatsList} = this.props;
        setTeam1(game.team1);
        setTeam2(game.team2);
        getStatsList(game.idGame);
        logoList.map(l=>{
            if(l.team === game.team1.name){
                this.setState({
                    imageTeam1: l.img,
                    step: 2,
                    game: game,
                });
            }else if(l.team === game.team2.name){
                this.setState({
                    imageTeam2: l.img,
                    step: 2,
                    game: game,
                });
            }
        })

    }

    back = () => {
        this.setState({
            step: 1,
            game: null,
            imageTeam2:null,
            imageTeam1:null,
        })
    }

    componentDidMount(){
        this.props.getResultList();
    }

    render() { 
        const { classes, resultList, statsTeam1, statsTeam2} = this.props;
        const {step, game, imageTeam1, imageTeam2} = this.state;

        return (
            <React.Fragment>
                {step === 1 ?
                <Grid className ={classes.mainContainer}>
                    {resultList.map(g => 
                        <ResultCard key={g.idGame} 
                            game={g} 
                            next={this.next}>
                        </ResultCard>
                    )} 

                </Grid>
                :
                <StatsResults 
                    game={game} 
                    imageTeam1={imageTeam1} 
                    imageTeam2={imageTeam2}
                    classes={classes}
                    back={this.back}
                    statsTeam1={statsTeam1}
                    statsTeam2={statsTeam2}
                    />
                }
            </React.Fragment>
        );
    }
}
 
export default Results;