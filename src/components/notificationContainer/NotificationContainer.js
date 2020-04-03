import React from 'react';
import {
    Table,
    TableRow,
    TableCell,
    Toolbar,
    TableBody,
    TableHead
}from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import {logoList} from '../../static/logo'

function TableHeadNotifications(props) {
    const {classes} = props;

    const headCells = [
        { id: 'logo', numeric: false, label: '' },
        { id: 'time', numeric: true, label: 'Time' },
        { id: 'action', numeric: true, label: 'Action Log' },
        { id: 'score', numeric: true, label: 'Score' },
    ];

    return (
        <TableHead>
            <TableRow >
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

const NotificationContainer = props => {
    const {classes} = props;

    return (
        <div>
            <Toolbar className={classes.toolbar}></Toolbar>
            <Table className={classes.table}>
                <TableHeadNotifications classes={classes}/>
                <TableBody>
                    {[1,2].map(s =>
                        <StyledTableRow key={s}>
                            <TableCell className={classes.cell} align="left">
                                <img src={logoList[3].img} alt="LOGO" className={classes.logo}/>
                            </TableCell>
                            <TableCell className={classes.cell} align="right">{s} </TableCell>
                            <TableCell className={classes.cell} align="left">{s}</TableCell>
                            <TableCell className={classes.cell} align="right">{s}</TableCell>
                        </StyledTableRow>
                    )}
                </TableBody>
            </Table>
        </div>
      
    );
}
 
export default NotificationContainer;