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
    const {classes} = props;

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
                    <img src={logoList[5].img} alt="LOGO" className={classes.logo}/>
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
    const {classes} = props;

    return (  
        <Table size="small">
            <GuestTableHead classes={classes}/>
                <TableBody>
                    {[1,2,3,4,5].map(s =>
                        <StyledTableRow key={s}>
                            <TableCell className={classes.cell} align="left">{s}</TableCell>
                            <TableCell className={classes.cell} align="right">{s} </TableCell>
                            <TableCell className={classes.cell} align="left">{s}</TableCell>
                            <TableCell className={classes.cell} align="right">{s}</TableCell>
                            <TableCell className={classes.cell} align="right">{s}</TableCell>
                            <TableCell className={classes.cell} align="right">{s}</TableCell>
                        </StyledTableRow>
                    )}
                </TableBody>
        </Table>
    );
}
 
export default GuestPlayersTable;