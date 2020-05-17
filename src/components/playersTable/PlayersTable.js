import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import SubstitutionBox from '../substitutionBox';
import {
        TableBody,
        Table,
        TableRow,
        TableHead,
        TableCell,
        Checkbox,
        Typography,
        Toolbar,
        Fab
} from '@material-ui/core';

const PlayersTableToolbar = props => {
    const { classes, selectedPlayerStats, idTeam, handleSubstitutionChange } = props;

    return (
        <Toolbar className={classes.toolbar}>
            {selectedPlayerStats === null || idTeam !== selectedPlayerStats.player.idTeam ?  (
                    <Typography className={classes.selectedPlayer} variant="subtitle1">
                        No player selected
                    </Typography>
            ) : (
                <Typography className={classes.toolbarTitle} variant="h6" >
                    Number #{selectedPlayerStats.player.number} was selected
                </Typography>
            )}
            
            <Fab size="small" className={classes.fab} onClick={()=>handleSubstitutionChange(true)}>
                <SwapHorizIcon/>
            </Fab>
        </Toolbar>
    );
};

function PlayersTableHead(props) {
    const {classes} = props;


    const headCells = [
        { id: 'number', numeric: true, label: '#' },
        { id: 'name', numeric: false, label: 'Name' },
        { id: 'points', numeric: true, label: 'Pts' },
        { id: 'assists', numeric: true, label: 'AS' },
        { id: 'turnovers', numeric: true, label: 'TO' },
        { id: 'rebounds', numeric: true, label: 'REB' },
        { id: 'personal fauls', numeric: true, label: 'PF' },
        { id: 'blocked-shots', numeric: true, label: 'BS' },
    ];

    return (
        <TableHead>
            <TableRow className={classes.headCells}>
                <TableCell padding="checkbox">
                </TableCell >
					{headCells.map(headCell => (
						<TableCell
                            className={classes.cell}
							key={headCell.id}
                            align={headCell.numeric ? 'right' : 'left'}
                            
						>
							{headCell.label}
						</TableCell>
					))}
            </TableRow>
        </TableHead>
    );
}

const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: '#e4eaf5',
      },
    },
  }))(TableRow);

class PlayersTable extends Component {

    state={
        substitutionOpen: false,
        substitutionPlayer1: null,
        substitutionPlayer2: null,
    }

    handleSendSubstitution = () =>{ 
        //player 1 out, player 2 in
        this.props.setSelectedPlayerStatsNull();
        const{substitutionPlayer1,substitutionPlayer2} = this.state;
        let text = `${substitutionPlayer1.idPlayer},${substitutionPlayer2.idPlayer}`
        this.props.sendSubstitution(text)
        
        this.setState({
            substitutionOpen: false,
            substitutionPlayer1: null,
            substitutionPlayer2: null,
        })
    }

    handleSubstitutionChange = value =>{
        this.setState({
            substitutionOpen: value
        })
    }

    selectSubstitutionPlayer = player =>{
        this.setState({
            substitutionPlayer2: player
        })
    }

    handleCheckboxChange= e =>{
        const playerStatsList = this.props.stats.filter(s=> s.player.number == e.target.value)
        const newPlayerStats = {...playerStatsList[0], selected: true}
        this.setState({
           substitutionPlayer1: newPlayerStats.player,
        })
        this.props.handleSelectPlayer(newPlayerStats)
    }
    
    render() { 
        const {classes, selectedPlayerStats, stats} = this.props;
        const {substitutionOpen} = this.state;
        let filteredStats = stats.filter(s => s.player.onCourt == true)
        let substitutionStats = stats.filter(s => s.player.onCourt == false)
        let newFilteredStats;
        if(selectedPlayerStats !== null)
            newFilteredStats = filteredStats.map(s => s.player.idPlayer == selectedPlayerStats.player.idPlayer ? {...s, selected: true} : {...s, selected: false})
        else
            newFilteredStats = filteredStats.map(s=>({...s, selected:false}))

        return ( 
            <React.Fragment>
                {
                filteredStats.length &&
                <React.Fragment>
                    <PlayersTableToolbar 
                        idTeam={filteredStats[0].player.idTeam} 
                        classes={classes} 
                        selectedPlayerStats={selectedPlayerStats}
                        handleSubstitutionChange={this.handleSubstitutionChange}
                    />
                    <Table>
                        <PlayersTableHead classes={classes}/>
                        <TableBody>
                            {newFilteredStats.map(s =>
                                <StyledTableRow key={s.player.number}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={s.selected}
                                            onChange={this.handleCheckboxChange}
                                            value={s.player.number}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.cell} align="right">{s.player.number}</TableCell>
                                    <TableCell className={classes.cell} align="left">{s.player.name}</TableCell>
                                    <TableCell className={classes.cell} align="right">{s.madeFt + s.made2p*2 + s.made3p * 3}</TableCell>
                                    <TableCell className={classes.cell} align="right">{s.assists}</TableCell>
                                    <TableCell className={classes.cell} align="right">{s.turnovers}</TableCell>
                                    <TableCell className={classes.cell} align="right">{s.defRebounds+ s.offRebounds}</TableCell>
                                    <TableCell className={classes.cell} align="right">{s.fauls}</TableCell>
                                    <TableCell className={classes.cell} align="right">{s.blockedShots}</TableCell>
                                </StyledTableRow>
                            )}
                        
                        </TableBody>
                    </Table>
                    <SubstitutionBox 
                        open={substitutionOpen} 
                        playersStats={substitutionStats} 
                        handleChange={this.handleSubstitutionChange}
                        selectSubstitutionPlayer={this.selectSubstitutionPlayer}
                        handleSendSubstitution={this.handleSendSubstitution}
                        />
                </React.Fragment>
                }
            </React.Fragment>
        );
    }
}
    
export default PlayersTable;