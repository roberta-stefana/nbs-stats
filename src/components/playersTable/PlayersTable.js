import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
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
    const { classes, selectedPlayerStats, idTeam } = props;

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
            <SwapHorizIcon/>
            {/*<Fab size="small" className={classes.fab}>
                <SwapHorizIcon/>
            </Fab>*/}
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

    handleCheckboxChange= e =>{
        const playerStatsList = this.props.stats.filter(s=> s.player.number == e.target.value)
        const newPlayerStats = {...playerStatsList[0], selected: true}
        this.props.handleSelectPlayer(newPlayerStats)
    }
    
    render() { 
        const {classes, selectedPlayerStats, stats} = this.props;
        let filteredStats = stats.filter(s => s.player.onCourt == true)
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
                </React.Fragment>
                }
            </React.Fragment>
        );
    }
}
    
export default PlayersTable;