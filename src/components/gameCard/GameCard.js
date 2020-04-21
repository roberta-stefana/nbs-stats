import React, { Component } from 'react';
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

class GameCard extends Component {
    state = {
        imageTeam1: null,
        imageTeam2: null,
    }

    componentDidMount(){
        const { game } = this.props;
        logoList.map(l=>{
            if(l.team === game.team1.name){
                this.setState({
                    imageTeam1: l.img
                });
            }else if(l.team === game.team2.name){
                this.setState({
                    imageTeam2: l.img
                });
            }
        })
    }

    handleClick = () => {
        const { game, goTo, setCurrentGame } = this.props;
        setCurrentGame(game);
        localStorage.setItem('currentGameId', this.props.game.idGame)
        goTo('/guest-game');
    }

    render() { 
        const {classes, game} = this.props;
        const { team1, team2, liveGame} = game;
        const { imageTeam1, imageTeam2 } = this.state;


        return ( 
            <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                avatar={<Avatar className={classes.avatar}>18</Avatar>}
                title={team1.name}
                subheader={team2.name}
            >
            </CardHeader> 
            <CardContent className={classes.imageContainer}>
                    <img src={imageTeam1} className={classes.image} alt="LOGO"></img>
                    <Typography variant="h4" className={classes.score}>{liveGame.points1}-{liveGame.points2}</Typography>
                    <img src={imageTeam2} className={classes.image} alt="LOGO"></img>
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
                    <Typography>Watching: {liveGame.activeUsers}</Typography>
                </div>
                <FiberManualRecordIcon color="error"/>
                <Button className={classes.liveButton} variant="outlined" onClick={this.handleClick}>LIVE</Button>
            </CardActions>
        </Card>
        );
    }
}
 
export default GameCard;

