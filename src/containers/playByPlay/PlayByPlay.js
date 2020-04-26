import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import {NotificationContainer, GuestPlayersTable, Loading} from '../../components';
import {logoList} from '../../static/logo'

class PlayByPlay extends Component {
    state = {
        imageTeam1: null,
        imageTeam2: null,
        table: 1,
      }

    componentDidMount(){
        const currentGameId= localStorage.getItem('currentGameId');
        this.props.getCommentList(currentGameId);
        const team1 = localStorage.getItem('team1');
        const team2 = localStorage.getItem('team2');
        logoList.map(l=>{
            if(l.team === team1){
                this.setState({
                    imageTeam1: l.img
                });
            }else if(l.team == team2){
                this.setState({
                    imageTeam2: l.img
                });
            }
        });
    }

    handleTableChange = (value) =>{
        this.setState({
            table:value
        })
    }

    render() { 
        const { classes, game, liveGame, statsTeam1, statsTeam2, commentList } = this.props;
        const { imageTeam1, imageTeam2, table } = this.state;

        return (
            <Grid container className={classes.mainContainer}> 
                <Grid item xs={6}>
                    <Grid item xs={12} className={classes.infoContainer}>
                        <div className={classes.imageContainer}>
                            <img src={imageTeam1} className={classes.image} alt="LOGO"></img>
                            <div>
                                <Typography className={classes.score}>{liveGame.points1}-{liveGame.points2}</Typography> 
                                <Typography>Quater: {liveGame.quater}</Typography>
                                <Typography>Time: {liveGame.time}</Typography>
                                </div>
                            <img src={imageTeam2} className={classes.image} alt="LOGO"></img>
                            
                        </div>
                        <Typography>Watching: {liveGame.activeUsers}</Typography>
                        
                    </Grid>
                    <Grid item xs={12} className={classes.tableContainer}>
                        <div className={classes.buttonsContainer}>
                            <Button 
                                className={classes.switchButton} 
                                variant="contained"
                                onClick={()=>this.handleTableChange(1)}
                            >
                                {game.team1.name}
                            </Button>
                            <Button
                                className={classes.switchButton} 
                                variant="contained"
                                onClick={()=>this.handleTableChange(2)}
                            >
                                {game.team2.name}
                            </Button>
                        </div>
                        {table === 1 
                        ? <GuestPlayersTable imageTeam={imageTeam1} stats={statsTeam1}/>
                        : <GuestPlayersTable imageTeam={imageTeam2} stats={statsTeam2}/>
                        }
                    </Grid>
                </Grid>
    
                <Grid item xs={6} className={classes.liveNotificationsContainer}>
                    <NotificationContainer 
                        commentList={commentList}
                        idTeam1={game.team1.idTeam} 
                        idTeam2={game.team2.idTeam}
                        imageTeam1={imageTeam1}
                        imageTeam2={imageTeam2}
                    />
                </Grid>
            </Grid>
        );
    }
}
 
export default PlayByPlay;