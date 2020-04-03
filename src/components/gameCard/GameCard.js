import React from 'react';
import { Card,
     Avatar, 
     CardHeader,
     IconButton,
     Typography,
     CardContent,
     CardActions,
     Button
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {logoList} from '../../static/logo';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const GameCard = props => {
    const {classes} = props;

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                avatar={
                <Avatar className={classes.avatar}>
                        18
                </Avatar>
                }
                action={
                <IconButton>
                        <MoreVertIcon />
                </IconButton>
                }
                title="CS universt=itatea vs kjakdcnlsncl"
                subheader="kasdlcbdc"
            >
            </CardHeader> 
            <CardContent className={classes.imageContainer}>
                    <img src={logoList[0].img} className={classes.image} alt="LOGO"></img>
                    <Typography className={classes.score}>65 - 27</Typography>
                    
                    <img src={logoList[6].img} className={classes.image} alt="LOGO"></img>
            </CardContent>
            <CardActions disableSpacing>
                <div className={classes.shareButtons}>
                    <IconButton aria-label="add to favorites">
                        <InstagramIcon/>
                    </IconButton>
                    <IconButton >
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton>
                        <TwitterIcon/>
                    </IconButton>
                </div>
                <FiberManualRecordIcon color="error"/>
                <Button className={classes.liveButton} variant="outlined" >LIVE</Button>
            </CardActions>
        </Card>
    );
}
 
export default GameCard;