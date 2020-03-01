import React, { Component } from 'react';
import {
        TableBody,
        Table,
        TableRow,
        TableHead,
        TableCell,
        Checkbox,
        Typography,
        Toolbar
} from '@material-ui/core';

const PlayersTableToolbar = props => {
    const { classes, numSelected } = props;

    return (
        <Toolbar>
            {numSelected > 0 ? (
                <Typography color="inherit" variant="subtitle1">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography variant="h6" id="tableTitle">
                    Statistics
                </Typography>
            )}


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
    ];

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                </TableCell>
					{headCells.map(headCell => (
						<TableCell
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

class PlayersTable extends Component {
        state = {  }
        render() { 
            return ( 
				<React.Fragment>
					<PlayersTableToolbar/>
					<Table size={'medium'}>
						<PlayersTableHead/>
						<TableBody>
							{players.map(player=>
								<TableRow>
									<TableCell padding="checkbox">
										<Checkbox
										//checked={isItemSelected}
										/>
									</TableCell>
									<TableCell align="right">{player.number}</TableCell>
									<TableCell align="left">{player.name}</TableCell>
									<TableCell align="right">{player.points}</TableCell>
									<TableCell align="right">{player.assists}</TableCell>
									<TableCell align="right">{player.turnovers}</TableCell>
									<TableCell align="right">{player.rebounds}</TableCell>
									<TableCell align="right">{player.fauls}</TableCell>
								</TableRow>
							)}
						
						</TableBody>
					</Table>
				</React.Fragment>
            );
        }
}
    
export default PlayersTable;

const players = [
	{number: 6, name: 'Roberta', points: 10, assists: 5, turnovers: 2, rebounds: 4, fauls: 1},
	{number: 7, name: 'Roberta', points: 10, assists: 5, turnovers: 2, rebounds: 4, fauls: 1},
	{number: 8, name: 'Roberta', points: 10, assists: 5, turnovers: 2, rebounds: 4, fauls: 1},
	{number: 9, name: 'Roberta', points: 10, assists: 5, turnovers: 2, rebounds: 4, fauls: 1},
	{number: 10, name: 'Roberta', points: 10, assists: 5, turnovers: 2, rebounds: 4, fauls: 1},
]