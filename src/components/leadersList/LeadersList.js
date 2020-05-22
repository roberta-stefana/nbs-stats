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
                            <Typography className={classes.name}>{s.player.name}</Typography>
                            <Typography className={classes.value}>{flag === 'POINTS' ? s.madeFt + s.made2p*2 + s.made3p * 3 : flag === 'ASSISTS' ? s.assists : s.offRebounds + s.defRebounds} </Typography>
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