import React, { Component } from 'react';
import {
    Grid,
    Paper,
} from '@material-ui/core';
import PlayersForm from './PlayersForm'
import TeamsForm from './TeamsForm'

class PreGame extends Component {

    state = {
        team1: 'CS Universitatea NBS Cluj',
        team2: null,
        category: null,
        playersTeam1:[],
        playersTeam2:[],
        step: 1,
    }

    componentDidMount(){
        this.props.getTeamList();
    }

    handleAutocompleteChange = input =>(event, value) => {
        this.setState({
            [input] : value,
        })
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };

    render() { 
        const {classes, teamList} = this.props;
        const {team1, team2, category, step, playersTeam1, playersTeam2} = this.state;
        const teamsValues = {team1,team2, category};
        const playersValues = {playersTeam1, playersTeam2};

        switch (step) {
            case 1:
                return (
                    <TeamsForm
                        classes={classes}
                        teamList={teamList}
                        values={teamsValues}
                        handleAutocompleteChange={this.handleAutocompleteChange}
                        nextStep={this.nextStep}
                    />
                );
            case 2:
                return (
                    <PlayersForm
                        classes={classes}
                        values={playersValues}
                    />
                );
        }
    }
}
 
export default PreGame;
