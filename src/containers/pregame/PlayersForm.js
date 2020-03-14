import React, { Component } from 'react';
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
import {DialogBox} from '../../components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class PlayersForm extends Component {

    componentDidMount(){
        const {team1, team2} = this.props
        this.props.getPlayersTeam1(team1.idTeam)
        this.props.getPlayersTeam2(team2.idTeam)
    }

    render() { 
        const { classes, team1, team2, playersTeam1, playersTeam2, handleCheckboxChange, openDialog, handleDialogClose, continueToGame} = this.props;

        return ( 
            <Grid container>
                <Grid item xs={12} className={classes.center}>
                    <Typography variant="h3" className={classes.title}>Pick first players</Typography>
                </Grid>            
                <Grid item className={classes.listContainer} xs={12}>
                    <div className={classes.divList}>
                        <Typography variant="h5">{team1.name}</Typography>
                        <List dense className={classes.list}>
                            {playersTeam1.map(value => (
                            <ListItem key={value.idPlayer}>
                                <ListItemAvatar>
                                    <AccountCircleIcon/>
                                </ListItemAvatar>
                                <ListItemText primary={value.name} />
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        id="1"
                                        value={value.idPlayer}
                                        onChange={handleCheckboxChange}
                                        checked={value.onCourt}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                            ))}
                        </List>
                    </div>
                    <div className={classes.divList}>
                            <Typography variant="h5">{team2.name}</Typography>
                        <List dense className={classes.list}>
                            {playersTeam2.map(value => (
                            <ListItem key={value.idPlayer}>
                                <ListItemAvatar>
                                    <AccountCircleIcon/>
                                </ListItemAvatar>
                                <ListItemText primary={value.name} />
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        id="2"
                                        value={value.idPlayer}
                                        onChange={handleCheckboxChange}
                                        checked={value.onCourt}
                                    />
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
                        onClick={continueToGame}
                    >
                        CONTINUE
                    </Button>
                </Grid>
                <DialogBox
                    title="Warning" 
                    content="You can only pick 5 players for each team!" 
                    open={openDialog} 
                    handleDialogClose={handleDialogClose}
                />
            </Grid>
        );
    }
}
 
export default PlayersForm;