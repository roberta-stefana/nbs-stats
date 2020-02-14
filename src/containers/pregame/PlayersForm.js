import React from 'react';
import {
    Grid, 
    Paper,
    Button,
    List,
    ListItemText,
    Checkbox,
    ListItemAvatar,
    ListItem,
    Avatar,
    ListItemSecondaryAction,
    Typography,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const PlayersForm = props => {

    const { classes, values} = props;
    const {playersTeam1, playersTeam2} = values;

    return (
        <Grid container>
            <Grid item xs={12} className={`${classes.flex} ${classes.container}`}>
                <Paper className={`${classes.paperPlayers}`}>
                    <div className={classes.greenLine}>weiflw</div>
                    <div></div>
                    <Grid item className={`${classes.flex} ${classes.listContainer}`}>
                        
                            <List dense className={classes.list}>
                                {[0, 1, 2, 3,4,5,6,7,8,9,10,11].map(value => (
                                <ListItem key={value}>
                                    <ListItemAvatar>
                                        <AccountCircleIcon/>
                                        {/*<Avatar
                                            alt={`Avatar n°${value + 1}`}
                                            src={`/static/images/avatar/${value + 1}.jpg`}
                                        />*/}
                                    </ListItemAvatar>
                                    <ListItemText primary={`Line item ${value + 1}`} />
                                    <ListItemSecondaryAction>
                                        <Checkbox/>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                ))}
                            </List>
                        
                        
                            <List dense className={classes.list}>
                                {[0, 1, 2, 3,4,5,6,7,8,9,10,11].map(value => (
                                <ListItem key={value}>
                                    <ListItemAvatar>
                                        <AccountCircleIcon/>
                                        {/*<Avatar
                                            alt={`Avatar n°${value + 1}`}
                                            src={`/static/images/avatar/${value + 1}.jpg`}
                                        />*/}
                                    </ListItemAvatar>
                                    <ListItemText primary={`Line item ${value + 1}`} />
                                    <ListItemSecondaryAction>
                                        <Checkbox/>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                ))}
                            </List>
                        
                    </Grid>
                    <Button
                        size="large"
                        className={classes.button}
                        fullWidth
                    >
                        CONTINUE
                    </Button>
                    
				</Paper>
            </Grid>
        </Grid>
    );
}
 
export default PlayersForm;