import React, { Component } from 'react';
import { Card,
    Avatar, 
    CardHeader,
    Typography,
    CardContent,
    CardActions,
    Button
} from '@material-ui/core';
import {logoList} from '../../static/logo';

class ResultCard extends Component {
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


    render() { 
        const {game, classes, next} = this.props;
        const{team1, team2, liveGame} = game;
        const{imageTeam1, imageTeam2} = this.state;

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
                        <Typography>{new Date(game.date).toLocaleString()}</Typography>
                    </div>
                    <Button
                                size="medium"
                                className={classes.statsButton}
                                onClick={() => next(game)}
                                variant="outlined"
                    >STATISTICS</Button>
                </CardActions>
            </Card>
        );
    }
}
    
export default ResultCard;

    