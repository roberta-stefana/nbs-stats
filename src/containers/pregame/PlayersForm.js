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
    Paper,
} from '@material-ui/core';
import {DialogBox} from '../../components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Gif from '../../static/gif.gif';


class PlayersForm extends Component {

    componentDidMount(){
        const {team1, team2} = this.props
        this.props.getPlayersTeam1(team1.idTeam)
        this.props.getPlayersTeam2(team2.idTeam)
    }


    render() { 
        const { classes, team1, team2, playersTeam1, playersTeam2, handleCheckboxChange, openDialog, handleDialogClose, continueToGame} = this.props;

        return ( 
            <Grid container className={classes.playersForm}>           
                <Grid item className={classes.listContainer} xs={12}>
                    <div className={classes.divList}>
                        <Typography className={classes.marginBotoom30} variant="h5">{team1.name}</Typography>
                        <List dense className={`${classes.list} ${classes.leftShadow}`} >
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
                    <div className={classes.centerContainer}>
                        <img src={Gif} className={classes.gif} alt="Gif"/>
                        <div className={classes.titlePaper}>
                            <Typography variant="h4" className={classes.title}>Pick</Typography>
                            <Typography variant="h4" className={classes.title}>first</Typography>
                            <Typography variant="h4" className={classes.title}>players</Typography>
                            <Button
                                size="medium"
                                className={classes.button}
                                fullWidth
                                onClick={continueToGame}
                            >
                                READY
                            </Button>  
                        </div>
                    </div> 
                    <div className={classes.divList}>
                            <Typography className={classes.marginBotoom30} variant="h5">{team2.name}</Typography>
                        <List dense className={`${classes.list} ${classes.rightShadow}`}>
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