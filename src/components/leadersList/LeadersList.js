import React from 'react';
import { List, ListItemText, Paper, Divider, Typography, ListItem } from '@material-ui/core';

const LeadersList = props => {
    const { classes, team, stats, flag } = props;

    return (
        <Paper className={classes.paper} elevation={3}>
            <List>
                {stats.map(s=>
                    <React.Fragment key={s.idStats}>
                        <ListItem className={classes.item}>
                            { (flag === 'POINTS' && s.madeFt + s.made2p + s.made3p === 0) || (flag === 'ASSISTS' && s.assists === 0) || (flag === 'REBOUNDS' && s.offRebounds + s.defRebounds) ?
                                <React.Fragment>
                                    <Typography className={classes.name}>Waiting for players</Typography>
                                    <Typography></Typography>
                                </React.Fragment>
                            :
                            <React.Fragment>
                                <Typography className={classes.name}>{s.player.name}</Typography>
                                <Typography className={classes.value}>{flag === 'POINTS' ? s.madeFt + s.made2p*2 + s.made3p * 3 : flag === 'ASSISTS' ? s.assists : s.offRebounds + s.defRebounds} </Typography>
                            </React.Fragment>
                            }
                        </ListItem>
                        <Divider/>
                    </React.Fragment>
                )}

                <span className={classes.lastItem}>
                    <span className={classes.greenLine}/>
                    <Typography className={classes.team}>{team.name}</Typography>
                </span>
            </List>
        </Paper>
    );
}
 
export default LeadersList;