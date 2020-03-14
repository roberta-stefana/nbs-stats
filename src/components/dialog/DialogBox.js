import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core'

const DialogBox = props => {
    
    const {title, content, open, handleDialogClose} = props;
    return (  
        <Dialog
        open={open}
        onClose={handleDialogClose}
        >
            <DialogTitle >{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClose} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
}
    
export default DialogBox;