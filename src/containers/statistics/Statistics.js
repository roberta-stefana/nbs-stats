import React, { Component } from 'react';
import {
    Grid,
    TextField,
    Typography
} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import Diagrams from './Diagrams'


class Statistics extends Component {
    state = { 
        team1: 'CS Universitatea NBS Cluj',
        team2: null,
        player1: null,
        player2: null,
        showPlayers: false,
        showChart: false,
    }

    componentDidMount(){
        this.props.getTeamList();
        console.log("GET TEAMS");
    }

    handleAutocompleteChange = input =>(event, value) => {
        const {team1, player1, player2} = this.state;
        const {teamList, getPlayerList1, getPlayerList2 } = this.props;
        if(value === null){
            this.setState({
                [input] : value,
                showPlayers: false,
                showChart: false,
            })
        }else if(input === 'team2'){
            const fullTeam1 = teamList.find(current => current.name == team1 && current.category == 18)
            const fullTeam2 = teamList.find(current => current.name == value.name)
            getPlayerList1(fullTeam1.idTeam);
            getPlayerList2(fullTeam2.idTeam);
            this.setState({
                [input] : value,
                showPlayers: true
            })
        }else{
            if(input === 'player1'){
                this.props.getStatsPlayer1(value.idPlayer)
            }else{
                this.props.getStatsPlayer2(value.idPlayer)
            }
            if(player1 === null && player2 === null)
                this.setState({
                    [input] : value,
                })
            else
                this.setState({
                    [input] : value,
                    showChart: true,
                })
        }
    }


    render() { 
        const {team1, team2, player1, player2, showPlayers, showChart} = this.state;
        const{ teamList, playersTeam1, playersTeam2, classes, statsPlayer1, statsPlayer2} = this.props;


        const uniqueTeams = Array.from(new Set(teamList.map(x=>x.name)))
        .map(name=>{
            return {
                name: name,
            }
        });

        const propsTeam = {
            options: uniqueTeams,
            getOptionLabel: option => option.name,
        };

        const propsPlayerList1 = {
            options: playersTeam1,
            getOptionLabel: option => `#${option.number} ${option.name}`,
        };

        const propsPlayerList2 = {
            options: playersTeam2,
            getOptionLabel: option => `#${option.number} ${option.name}`,
        };

        return (
            <Grid container className={classes.mainContainer}>
                <div className={classes.autocomplete}>
                    <Typography variant="h5" className={classes.pick}>Pick teams</Typography>
                    <div className={classes.textField}>
                        <TextField
                            label="Team 1"
                            defaultValue={team1}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                            fullWidth
                        />
                    </div>
                    <div className={classes.textField}>
                    <Autocomplete
                            {...propsTeam}
                            autoSelect
                            onChange={this.handleAutocompleteChange('team2')}
                            getOptionDisabled={option => option.name === 'CS Universitatea NBS Cluj'}
                            renderInput={params => (
                            <TextField {...params} label="Team 2" margin="normal" fullWidth variant="standard"/>
                            )}
                            value={team2}
                    />
                    </div>
                </div>
                {showPlayers &&
                <div className={classes.autocomplete}>
                    <Typography variant="h5" className={classes.pick}>Pick players</Typography>
                    <div className={classes.textField}>
                        <Autocomplete
                                {...propsPlayerList1}
                                autoSelect
                                onChange={this.handleAutocompleteChange('player1')}
                                renderInput={params => (
                                <TextField {...params} label="Player 1" margin="normal" fullWidth variant="standard"/>
                                )}
                                value={player1}
                        />
                    </div>
                    <div className={classes.textField}>
                        <Autocomplete
                            {...propsPlayerList2}
                            autoSelect
                            onChange={this.handleAutocompleteChange('player2')}
                            renderInput={params => (
                            <TextField {...params} label="Player 2" margin="normal" fullWidth variant="standard"/>
                            )}
                            value={player2}
                        />
                    </div>
                </div>
                }
                {showChart && 
                <Diagrams 
                    classes={classes}
                    statsPlayer1={statsPlayer1} 
                    statsPlayer2={statsPlayer2} 
                    namePlayer1={player1.name} 
                    namePlayer2={player2.name}/>
                }
            </Grid>
        );
    }
}
 
export default Statistics;


