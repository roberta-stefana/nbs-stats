import React from 'react';
import { Table,
    TableRow,
    TableHead,
    TableCell,
    TableBody,
    Toolbar,
    Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'


function BoxscoreTableHead(props) {
    const {classes} = props;

    const headCells = [
        { id: 'no', borderLeft: false, borderRight: false, label: '#' },
        { id: 'name', borderLeft: false,  borderRight: false, label: 'NAME' },
        { id: 'min', borderLeft: false,  borderRight: false, label: 'MIN' },
        { id: '2p_m/a', borderLeft: true,  borderRight: true, label: 'M/A' },
        { id: '2p%', borderLeft: false, borderRight: true, label: '%' },
        { id: '3p_m/a', borderLeft: false,  borderRight: true, label: 'M/A' },
        { id: '3p%', borderLeft: false,  borderRight: true, label: '%' },
        { id: '1p_m/a', borderLeft: false,  borderRight: true, label: 'M/A' },
        { id: '1p%', borderLeft: false,  borderRight: true, label: '%' },
        { id: 'off', borderLeft: false,  borderRight: true, label: 'OFF' },
        { id: 'def', borderLeft: false,  borderRight: true, label: 'DEF' },
        { id: 'total', borderLeft: false,  borderRight: true, label: 'TOT' },
        { id: 'as', borderLeft: false,  borderRight: false, label: 'AS' },
        { id: 'to', borderLeft: false,  borderRight: false, label: 'TO' },
        { id: 'st', borderLeft: false,  borderRight: false, label: 'ST' },
        { id: 'bs', borderLeft: false,  borderRight: false, label: 'BS' },
        { id: 'pf', borderLeft: false,  borderRight: false, label: 'PF' },
        { id: 'eff', borderLeft: false,  borderRight: false, label: 'EFF' },
        { id: 'points', borderLeft: false,  borderRight: false, label: 'PTS' },
    ];

    const firstCells=[
        { id: '1', text: false, col: '1', label: '' },
        { id: '2', text: false,col: '3', label: '' },
        { id: '3', text: false,col: '1', label: '' },
        { id: '4', text: true,col: '2', label: '2P FG' },
        { id: '5', text: true,col: '2', label: '3P FG' },
        { id: '6', text: true,col: '2', label: 'FT' },
        { id: '7', text: true,col: '3', label: 'REBOUNDS' },
        { id: '8', text: false,col: '1', label: '' },
        { id: '9', text: false,col: '1', label: '' },
        { id: '10', text: false,col: '1', label: '' },
        { id: '11', text: false,col: '1', label: '' },
        { id: '12', text: false,col: '1', label: '' },
        { id: '13', text: false,col: '1', label: '' },
        { id: '14', text: false,col: '1', label: '' },
    ]

    return (
        <TableHead>
            <TableRow >
                {firstCells.map(currentCell => (
                    <TableCell
                        colSpan={currentCell.col === '1' ? 1 : currentCell.col === '2' ? 2 : 3}
                        className={currentCell.text  ? classes.firstCellText : classes.firstCell }
                        key={currentCell.id}
                        align='center'    
                    >
                        {currentCell.label}
                    </TableCell>
                ))}
            </TableRow>
            <TableRow >
                {headCells.map(headCell => (
                    <TableCell
                        colSpan={headCell.id === 'name' ? 3 : 1}
                        className={headCell.borderLeft && headCell.borderRight ? `${classes.borderRightCell} ${classes.borderLeftCell} ${classes.cell}` : headCell.borderLeft ? `${classes.borderLeftCell} ${classes.cell}` : headCell.borderRight ? `${classes.borderRightCell} ${classes.cell}` : classes.cell}
                        key={headCell.id} 
                        align='center'    
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

const BoxscoreTable = props => {
    const {classes, stats, imageTeam, team} = props;

    return (  
        <React.Fragment>
        <Toolbar 
            classes={{
                root: classes.toolbar,
            }}
        >
            <Typography className={classes.teamName}>{team}</Typography>
        </Toolbar>
        <Table 
            classes={{
                root: classes.table,
            }}
        >
            <BoxscoreTableHead classes={classes} imageTeam={imageTeam}/>
                <TableBody>
                    {stats.map(s =>
        
                        <StyledTableRow key={s.idStats}>
                            <TableCell className={classes.cell} align="center">{s.player.number}</TableCell>
                            <TableCell className={classes.cell} colSpan={3} align="center">{s.player.name} </TableCell>
                            <TableCell className={classes.cell} align="center">{s.time}</TableCell> 
                            <TableCell className={classes.cell} align="center">{`${s.made2p}/${s.made2p + s.miss2p}`}</TableCell>
                            <TableCell className={classes.cell} align="center">{s.made2p > 0 ? (s.made2p / (s.miss2p+s.made2p)*100).toFixed(1) : '0.0'}</TableCell>
                            <TableCell className={classes.cell} align="center">{`${s.made3p}/${s.made3p + s.miss3p}`}</TableCell>
                            <TableCell className={classes.cell} align="center">{s.made3p > 0 ? (s.made3p / (s.miss3p+s.made3p)*100).toFixed(1) : '0.0'}</TableCell>
                            <TableCell className={classes.cell} align="center">{`${s.madeFt}/${s.madeFt + s.missFt}`}</TableCell>
                            <TableCell className={classes.cell} align="center">{s.madeFt > 0 ? (s.madeFt / (s.missFt+s.madeFt)*100).toFixed(1) : '0.0'}</TableCell>
                            <TableCell className={classes.cell} align="center">{s.offRebounds}</TableCell> 
                            <TableCell className={classes.cell} align="center">{s.defRebounds}</TableCell> 
                            <TableCell className={classes.cell} align="center">{s.offRebounds + s.defRebounds}</TableCell> 
                            <TableCell className={classes.cell} align="center">{s.assists}</TableCell> 
                            <TableCell className={classes.cell} align="center">{s.turnovers}</TableCell> 
                            <TableCell className={classes.cell} align="center">{s.steals}</TableCell> 
                            <TableCell className={classes.cell} align="center">{s.blockedShots}</TableCell> 
                            <TableCell className={classes.cell} align="center">{s.fouls}</TableCell>
                            <TableCell className={classes.cell} align="center">{s.efficiency}</TableCell>
                            <TableCell className={classes.cell} align="center">{s.madeFt + s.made2p*2 + s.made3p * 3}</TableCell>
                        </StyledTableRow>
                    )}
                </TableBody>
        </Table>
        </React.Fragment>
    );
}
 
export default BoxscoreTable;