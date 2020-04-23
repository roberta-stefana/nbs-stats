import React from 'react';
import { Table,
    TableRow,
    TableHead,
    TableCell,
    TableBody
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import {logoList} from '../../static/logo'


function GuestTableHead(props) {
    const {classes, imageTeam} = props;

    const headCells = [
        { id: 'name', numeric: false, label: 'NAME' },
        { id: 'minutes', numeric: true, label: 'MIN' },
        { id: 'points', numeric: true, label: 'PTS' },
        { id: 'assists', numeric: true, label: 'AS' },
        { id: 'rebounds', numeric: true, label: 'RB' },
    ];

    return (
        <TableHead>
            <TableRow >
                <TableCell>
                    <img src={imageTeam} alt="LOGO" className={classes.logo}/>
                </TableCell>
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
        backgroundColor: '#ebedf0',
      },
    },
  }))(TableRow);

const GuestPlayersTable = props => {
    const {classes, stats, imageTeam} = props;
    let filteredStats = stats.filter(s => s.player.onCourt == true)

    return (  
        <Table size="small">
            <GuestTableHead classes={classes} imageTeam={imageTeam}/>
                <TableBody>
                    {filteredStats.map(s =>
                        <StyledTableRow key={s.idStats}>
                            <TableCell className={classes.cell} align="left">{s.player.number}</TableCell>
                            <TableCell className={classes.cell} align="right">{s.player.name} </TableCell>
                            <TableCell className={classes.cell} align="left">{s.minutes}</TableCell> 
                            <TableCell className={classes.cell} align="right">{s.madeFt + s.made2p*2 + s.made3p * 3}</TableCell>
                            <TableCell className={classes.cell} align="right">{s.assists}</TableCell>
                            <TableCell className={classes.cell} align="right">{s.defRebounds+ s.offRebounds}</TableCell>
                        </StyledTableRow>
                    )}
                </TableBody>
        </Table>
    );
}
 
export default GuestPlayersTable;