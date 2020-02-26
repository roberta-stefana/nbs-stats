import React, { Component } from 'react';
import PlayersForm from './PlayersForm'
import TeamsForm from './TeamsForm'

class PreGame extends Component {

    state = {
        team1: 'CS Universitatea NBS Cluj',
        team2: null,
        category: null,
        fullTeam1: '',
        fullTeam2: '',
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
        const { step, team1, team2, category } = this.state;
        const { teamList} = this.props; 

        const fullTeam1 = teamList.filter(x =>x.name === team1 &&  x.category == category.category)
        const fullTeam2 = teamList.filter(x => x.name === team2.name && x.category == category.category )

        this.setState({
            step: step + 1,
            fullTeam1: fullTeam1[0],
            fullTeam2: fullTeam2[0],
        });
    };

    render() { 
        const {classes, teamList, getPlayersTeam1, playersTeam1, getPlayersTeam2, playersTeam2} = this.props;
        const {team1, team2, category, step, fullTeam1, fullTeam2} = this.state;
        const teamsValues = {team1,team2, category};


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
                        team1={fullTeam1}
                        team2={fullTeam2}
                        getPlayersTeam1={getPlayersTeam1}
                        getPlayersTeam2={getPlayersTeam2}
                        playersTeam2={playersTeam2}
                        playersTeam1={playersTeam1}
                    />
                );
        }
    }
}
 
export default PreGame;
