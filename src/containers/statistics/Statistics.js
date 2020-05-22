import React, { Component } from 'react';
import {
    Grid,
    TextField
} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import {BarChart} from '../../components';


class Statistics extends Component {
    state = { 
        team1: 'CS Universitatea NBS Cluj',
        team2: null,
        player1: null,
        player2: null,
    }

    componentDidMount(){
        this.props.getTeamList();
    }

    handleAutocompleteChange(){

    }


    render() { 
        const {team1, team2, player1, player2} = this.state;
        const{ teamList, playerList1, playerList2, classes} = this.props;
        console.log(teamList)

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
            options: playerList1,
            getOptionLabel: option => option.name,
        };

        const propsPlayerList2 = {
            options: playerList2,
            getOptionLabel: option => option.name,
        };

        return (
            <Grid container>
            <Grid item className={classes.autocomplete}>
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
                <Autocomplete
                        {...propsTeam}
                        autoSelect
                        onChange={()=>this.handleAutocompleteChange('team2')}
                        getOptionDisabled={option => option.name === 'CS Universitatea NBS Cluj'}
                        renderInput={params => (
                        <TextField {...params} label="Team 2" margin="normal" fullWidth variant="standard"/>
                        )}
                        value={team1}
                />
            </Grid>
            <Grid item className={classes.autocomplete}>
                <Autocomplete
                        {...propsPlayerList1}
                        autoSelect
                        onChange={()=>this.handleAutocompleteChange('player1')}
                        renderInput={params => (
                        <TextField {...params} label="Player 1" margin="normal" fullWidth variant="standard"/>
                        )}
                        value={player1}
                />
                <Autocomplete
                    {...propsPlayerList2}
                    autoSelect
                    onChange={()=>this.handleAutocompleteChange('player2')}
                    renderInput={params => (
                    <TextField {...params} label="Player 2" margin="normal" fullWidth variant="standard"/>
                    )}
                    value={player2}
                />
            </Grid>
            <BarChart/>
        </Grid>
        );
    }
}
 
export default Statistics;


