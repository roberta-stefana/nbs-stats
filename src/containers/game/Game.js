import React, { Component } from 'react';
import {logoList} from '../../static/logo'
import{ 
    Grid, 
    Typography, 
    Button,
    Stepper,
    Step,
    StepLabel
} from '@material-ui/core'
import {PlayersTable, Timer} from '../../components';

class Game extends Component {
    state = { 
        imageTeam1 :null,
        imageTeam2: null,
        minutes: 10,
        seconds: 0,
        timerId: null,
        quaters: ['Quater 1', 'Quater 2', 'Quater 3', 'Quater 4'],
        activeQuater: 0,
        stats:[],
        selectedPlayerStats: null,
        idGame: 0,
    }

    startTime = () =>{
        const timerId = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
        this.setState({
            timerId
        })
    }

    stopTime = () => {
        clearInterval(this.state.timerId)
    }

    startGame = () =>{
        const idGame = localStorage.getItem("currentGameId");
        this.props.sendStartGame(idGame);
        this.startTime();
    }

    endGame = () =>{
        const idGame = localStorage.getItem("currentGameId");
        this.props.sendEndGame(idGame);
    }

    handleSelectPlayer = selectedPlayerStats =>{
        this.setState({
            selectedPlayerStats: selectedPlayerStats
        })
    }

    sendScore1 = () =>{
        const {selectedPlayerStats, idGame, minutes, seconds} = this.state;
        const time = `${minutes}:${seconds}` 
        if(selectedPlayerStats !== null){
            this.props.sendScore1({stats: selectedPlayerStats, idGame:idGame, time:time})
        }
    }

    componentDidMount(){
        const idGame = localStorage.getItem("currentGameId");
        const team1 = localStorage.getItem("team1");
        const team2 = localStorage.getItem("team2");
        this.props.hostGame(idGame);  

        logoList.map(l=>{
            if(l.team == team1){
                this.setState({
                    imageTeam1: l.img,
                    idGame: idGame
                });
            }else if(l.team == team2){
                this.setState({
                    imageTeam2: l.img,
                    idGame: idGame
                });
            }
        });
    }

    componentWillUnmount() {
        // disconnecting from the saga channel and the socket
        this.props.requestStopChannel();
    }

    render() { 
        const {classes, statsTeam1, statsTeam2, game, liveGame, activeQuater} = this.props;
        const {imageTeam1, imageTeam2, seconds, minutes, quaters, selectedPlayerStats} = this.state;
    
        return (
            <Grid container>
                {game === null 
                ? <Typography>LOADING</Typography>
                :
                <React.Fragment>
                <Grid item xs={12} className={classes.teams}>
                    <div className={classes.teamNameLeft}>
                        <img src={imageTeam1} alt="logo" className={classes.logo}/>
                        <Typography variant="h5">{game.team1.name}</Typography>
                    </div>
                    <div className={classes.score}>
                        <Typography variant ="h4">{liveGame.points1} : {liveGame.points2}</Typography>
                    </div>
                    <div className={classes.teamNameRight}>
                        <img src={imageTeam2} alt="logo" className={classes.logo}></img>
                        <Typography variant="h5">{game.team2.name}</Typography>
                    </div>
                </Grid>
                <Grid item xs={5} className={`${classes.tableContainerLeft} ${classes.flexColumn}`}>
                    <PlayersTable stats={statsTeam1} selectedPlayerStats={selectedPlayerStats} handleSelectPlayer={this.handleSelectPlayer}></PlayersTable>
                </Grid>
                <Grid item xs={2} >
                    <Stepper activeStep={activeQuater} alternativeLabel>
                        {quaters.map(quater => (
                        <Step key={quater}>
                            <StepLabel>{quater}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    <Timer minutes={minutes} seconds={seconds}/>
                </Grid>
                <Grid item xs={5} className={`${classes.tableContainerRight} ${classes.flexColumn}`}>
                    <PlayersTable stats={statsTeam2} selectedPlayerStats={selectedPlayerStats} handleSelectPlayer={this.handleSelectPlayer}></PlayersTable>
                </Grid>
                <Grid item xs={12} className={classes.buttonContainer}>
                    <div className={classes.buttonSection}>
                        <Button className={classes.button} onClick={this.sendScore1}>+1</Button>
                        <Button className={classes.button}>+2</Button>
                        <Button className={classes.button}>+3</Button>
                        <Button className={classes.button}>Miss 1</Button>
                        <Button className={classes.button}>Miss 2</Button>
                        <Button className={classes.button}>Miss 3</Button>

                        <Button className={classes.button}>Off Reb</Button>
                        <Button className={classes.button}>Def Reb</Button>
                        <Button className={classes.button}>Bs</Button>
                        <Button className={classes.button}>As</Button>
                        <Button className={classes.button}>To</Button>
                        <Button className={classes.button}>St</Button>
                        <Button className={classes.button}>PF</Button>
                        <Button className={classes.button}>FD</Button>
                    </div>
                    <div className={classes.wrapper}>
                        <div className={classes.timeButtons}>
                            <Button className={classes.buttonSquare} onClick={this.startTime}>Start Time</Button>
                            <Button className={classes.buttonSquare} onClick={this.stopTime}>Stop Time</Button>
                            <Button className={classes.buttonSquare}>Timeout</Button>
                            <Button className={classes.buttonSquare} onClick={this.startGame}>Start Game</Button>
                            <Button className={classes.buttonSquare} onClick={this.endGame}>End Game</Button>
                        </div>
                    </div>  
                </Grid>
                </React.Fragment> }  
            </Grid> 
                            
        );
    }
}
 
export default Game;