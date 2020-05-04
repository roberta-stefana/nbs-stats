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
    const {classes, commentList, idTeam1, idTeam2, imageTeam1, imageTeam2} = props;
    console.log(commentList)

    return (
        <div>
            <Toolbar className={classes.toolbar}></Toolbar>
            <Table className={classes.table}>
                <TableHeadNotifications classes={classes}/>
                <TableBody>
                    {commentList.map(com =>
                        <StyledTableRow key={com.idComment}>
                            <TableCell className={classes.cell} align="left">
                                {idTeam1 === com.idTeam
                                ?   <img src={imageTeam1} alt="LOGO" className={classes.logo}/>
                                :   <img src={imageTeam2} alt="LOGO" className={classes.logo}/>
                                }
                            </TableCell>
                            <TableCell className={classes.cell} align="right">{com.time} </TableCell>
                            <TableCell className={classes.cell} align="left">{com.comment}</TableCell>
                            <TableCell className={classes.cell} align="right">{com.score}</TableCell>
                        </StyledTableRow>
                    )}
                </TableBody>
            </Table>
        </div>
      
    );
}
 
export default NotificationContainer;