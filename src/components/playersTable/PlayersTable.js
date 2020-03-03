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
    const { classes, numSelected } = props;

    return (
        <Toolbar className={classes.toolbar}>
            {numSelected > 0 ? (
                    <Typography className={classes.selectedPlayer} variant="subtitle1">
                        {numSelected} selected
                    </Typography>
            ) : (
                <Typography className={classes.toolbarTitle} variant="h6" >
                    No player selected
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
        state = {  }
        render() { 
            const {classes} = this.props;

            return ( 
				<React.Fragment>
					<PlayersTableToolbar classes={classes}/>
					<Table>
						<PlayersTableHead classes={classes}/>
						<TableBody>
							{players.map(player=>
								<StyledTableRow key={player.number}>
									<TableCell padding="checkbox">
										<Checkbox
										//checked={isItemSelected}
										/>
									</TableCell>
									<TableCell className={classes.cell} align="right">{player.number}</TableCell>
									<TableCell className={classes.cell} align="left">{player.name}</TableCell>
									<TableCell className={classes.cell} align="right">{player.points}</TableCell>
									<TableCell className={classes.cell} align="right">{player.assists}</TableCell>
									<TableCell className={classes.cell} align="right">{player.turnovers}</TableCell>
									<TableCell className={classes.cell} align="right">{player.rebounds}</TableCell>
									<TableCell className={classes.cell} align="right">{player.fauls}</TableCell>
                                    <TableCell className={classes.cell} align="right">{player.bs}</TableCell>
								</StyledTableRow>
							)}
						
						</TableBody>
					</Table>
				</React.Fragment>
            );
        }
}
    
export default PlayersTable;

const players = [
	{number: 6, name: 'Mercedes Horvath', points: 10, assists: 5, turnovers: 2, rebounds: 4, fauls: 1, bs:1},
	{number: 7, name: 'Mercedes Horvath', points: 10, assists: 5, turnovers: 2, rebounds: 4, fauls: 1, bs:1},
	{number: 8, name: 'Mercedes Horvath', points: 10, assists: 5, turnovers: 2, rebounds: 4, fauls: 1, bs:1},
	{number: 9, name: 'Mercedes Horvath', points: 10, assists: 5, turnovers: 2, rebounds: 4, fauls: 1, bs:1},
	{number: 10, name: 'Mercedes Horvath', points: 10, assists: 5, turnovers: 2, rebounds: 4, fauls: 1, bs:1},
]