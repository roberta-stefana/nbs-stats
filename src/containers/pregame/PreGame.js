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
        checkedPlayersTeam1: 0, 
        checkedPlayersTeam2: 0,
        openDialog: false,
    }

    componentDidMount(){
        this.props.getTeamList();
    }

    handleDialogClose = () => {
        this.setState({
            openDialog: false,
        })
    }

    handleAutocompleteChange = input =>(event, value) => {
        this.setState({
            [input] : value,
        })
    }

    handleCheckboxChange = e => {
        const {playersTeam1, playersTeam2} = this.props;
        let checkedPlayers = 0
        let player;
        if(e.target.id == "1"){
            checkedPlayers = this.state.checkedPlayersTeam1;
            const playerList = playersTeam1.filter(p => p.idPlayer == e.target.value)
            player = playerList[0]
        }else{
            checkedPlayers = this.state.checkedPlayersTeam2;
            const playerList = playersTeam2.filter(p => p.idPlayer == e.target.value)
            player = playerList[0]
        }

        if(checkedPlayers == 5 && player.onCourt==false){
            this.setState({
                openDialog: true,
            });
        }else{
            this.checkboxChangeLogic(e, player);
        }
    }

    checkboxChangeLogic = (e, player) => {
        const {updatePlayer} = this.props;
        if(e.target.id === "1"){
            if(player.onCourt == true){
                this.setState({
                    checkedPlayersTeam1: this.state.checkedPlayersTeam1-1
                })
            }else{
                this.setState({
                    checkedPlayersTeam1: this.state.checkedPlayersTeam1+1
                })
            }
        }else{
            if(player.onCourt == true){
                this.setState({
                    checkedPlayersTeam2: this.state.checkedPlayersTeam2-1
                },console.log(this.state.checkedPlayersTeam2))
            }else{
                this.setState({
                    checkedPlayersTeam2: this.state.checkedPlayersTeam2+1
                },console.log(this.state.checkedPlayersTeam2))
            }
        }
        const newPlayer = {...player, onCourt: !player.onCourt}
        updatePlayer(newPlayer)
    }

    nextStep = () => {
        const { step, team1, team2, category } = this.state;
        const { teamList, addGame } = this.props; 

        const fullTeam1 = teamList.filter(x =>x.name === team1 &&  x.category == category.category)
        const fullTeam2 = teamList.filter(x => x.name === team2.name && x.category == category.category )
        localStorage.setItem("team1", fullTeam1[0].idTeam);
        localStorage.setItem("team2", fullTeam2[0].idTeam);

        this.setState({
            step: step + 1,
            fullTeam1: fullTeam1[0],
            fullTeam2: fullTeam2[0],
        });

        addGame({team1: fullTeam1[0], team2: fullTeam2[0]});
    };

    continueToGame = () =>{
        const {playersTeam1, playersTeam2, addStatsTeam1, addStatsTeam2, goToGame, game} = this.props;
        addStatsTeam1({playerList: playersTeam1, game: game})
        addStatsTeam2({playerList: playersTeam2, game: game})
        localStorage.setItem('currentGameId', game.idGame);
        goToGame();
    }

    render() { 
        const {classes, teamList, getPlayersTeam1, playersTeam1, getPlayersTeam2, playersTeam2} = this.props;
        const {team1, team2, category, step, fullTeam1, fullTeam2, openDialog} = this.state;
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
                        handleCheckboxChange={this.handleCheckboxChange}
                        openDialog={openDialog}
                        handleDialogClose={this.handleDialogClose}
                        continueToGame={this.continueToGame}
                    />
                );
        }
    }
}
 
export default PreGame;
