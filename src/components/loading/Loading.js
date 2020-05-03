import React from 'react';
import {LogoNbs} from '../../static/logo'
import {CircularProgress, Typography } from '@material-ui/core';


const Loading = props => {
    const {classes} = props;

    return (
        <div className={classes.loadingContainer}>
            <img src={LogoNbs} alt="LOGO" className={classes.logo}/>
            <div className={classes.loading}>
                <Typography className={classes.text} variant="h6">LOADING</Typography>
                <CircularProgress color="secondary"/>
            </div>
        </div>
    );
}
 
export default Loading;