import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    ListItem,
    List,
    Button,
    ListItemAvatar,
    ListItemText
}from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const SubstitutionBox = props => {

    const {open, handleChange, playersStats, classes, selectSubstitutionPlayer, handleSendSubstitution} = props;  

    return ( 
        <Dialog
            open={open}
            onClose={()=>handleChange(false)}
        >
            <DialogTitle >Substitution</DialogTitle>
            <DialogContent>
                <div className={classes.divList}>
                    <List dense className={classes.list}>
                        {playersStats.map(value => (
                        <ListItem key={value.idPlayer} button onClick={()=>selectSubstitutionPlayer(value.player)} value="jaj">
                            <ListItemAvatar>
                                <AccountCircleIcon/>
                            </ListItemAvatar>
                            <ListItemText primary={`#${value.player.number} ${value.player.name}`} />
                        </ListItem>
                        ))}
                    </List>
                </div>
            </DialogContent>
            <DialogActions>
            <Button onClick={() =>handleChange(false)} >
                    Cancel
                </Button>
                <Button onClick={handleSendSubstitution} >
                    Substitution
                </Button>
            </DialogActions>
        </Dialog>
    );
}
 
export default SubstitutionBox;