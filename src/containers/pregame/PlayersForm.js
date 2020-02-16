import React, { useEffect }from 'react';
import {
    Grid, 
    Button,
    List,
    ListItemText,
    Checkbox,
    ListItemAvatar,
    ListItem,
    ListItemSecondaryAction,
    Typography,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const PlayersForm = props => {

    useEffect(() => {
        // TODO: redux call for players   
    });

    const { classes, team1, team2} = props;

    return (
        <Grid container>
            <Grid item xs={12} className={classes.center}>
                <Typography variant="h3" className={classes.title}>Pick first players</Typography>
            </Grid>            
            <Grid item className={classes.listContainer} xs={12}>
                <div className={classes.divList}>
                    <Typography variant="h5">{team1.name}</Typography>
                    <List dense className={classes.list}>
                        {[0, 1, 2, 3,4,5,6,7,8,9,10,11].map(value => (
                        <ListItem key={value}>
                            <ListItemAvatar>
                                <AccountCircleIcon/>
                            </ListItemAvatar>
                            <ListItemText primary={`Line item ${value + 1}`} />
                            <ListItemSecondaryAction>
                                <Checkbox/>
                            </ListItemSecondaryAction>
                        </ListItem>
                        ))}
                    </List>
                </div>
                <div className={classes.divList}>
                        <Typography variant="h5">{team2.name}</Typography>
                    <List dense className={classes.list}>
                        {[0, 1, 2, 3,4,5,6,7,8,9,10,11].map(value => (
                        <ListItem key={value}>
                            <ListItemAvatar>
                                <AccountCircleIcon/>
                            </ListItemAvatar>
                            <ListItemText primary={`Line item ${value + 1}`} />
                            <ListItemSecondaryAction>
                                <Checkbox/>
                            </ListItemSecondaryAction>
                        </ListItem>
                        ))}
                    </List>
                </div>
            </Grid>
            <Grid item xs={12} className={classes.center}>
                <Button
                    size="medium"
                    className={classes.button}
                    fullWidth
                >
                    CONTINUE
                </Button>
            </Grid>
        </Grid>
    );
}
 
export default PlayersForm;