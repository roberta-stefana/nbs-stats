import React, { Component } from 'react';
import {logoList} from '../../static/logo'
import{ Grid,Typography,Button,Stepper,Step,StepLabel} from '@material-ui/core'
import {PlayersTable, Timer} from '../../components';
import {Loading} from '../../components';

class Game extends Component {
    state = { 
        imageTeam1 :null,
        imageTeam2: null,
        minutes: 10,
        seconds: 0,
        startMin:0,
        startSec:0,
        timerId: null,
        quaters: ['Quater 1', 'Quater 2', 'Quater 3', 'Quater 4'],
        stats:[],
        selectedPlayerStats: null,
        idGame: 0,
    }

    startTime = () =>{

        this.setState({
            startMin: this.state.minutes,
            startSec: this.state.seconds,
        })
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
            timerId,
        })
    }

    stopTime = () => {
        const { startMin, startSec, minutes, seconds, idGame} = this.state;
        clearInterval(this.state.timerId);

        var d1 = new Date(1776, 6, 4, 12, startMin, startSec, 0);
        var d2 = new Date(1776, 6, 4, 12, minutes, seconds,0);
        var diff = new Date(d1 - d2);
        console.log(diff.getMinutes(), " ", diff.getSeconds())
        var filteredStats1 = this.props.statsTeam1.filter(s => s.player.onCourt == true)
        var filteredStats2 = this.props.statsTeam2.filter(s => s.player.onCourt == true)
        this.props.sendPlayersTime({stats: filteredStats1.concat(filteredStats2), idGame:idGame, time:`${diff.getMinutes()}:${diff.getSeconds()}/${minutes}:${seconds}`})
        
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

    sendAction = (action) =>{
        const {selectedPlayerStats, idGame, minutes, seconds} = this.state;
        const time = `${minutes}:${seconds}` 
        if(minutes)
        if(selectedPlayerStats !== null){
            switch(action){
                case 'OFF REB':
                    this.props.sendOffRebound({stats: selectedPlayerStats, idGame:idGame, time:time})
                    break;
                case 'DEF REB':
                    this.props.sendDefRebound({stats: selectedPlayerStats, idGame:idGame, time:time})
                    break;
                case 'BS':
                    this.props.sendBlockedShot({stats: selectedPlayerStats, idGame:idGame, time:time})
                    break;
                case 'AS':
                    this.props.sendAssist({stats: selectedPlayerStats, idGame:idGame, time:time})
                    break;
                case 'ST':
                    this.props.sendSteal({stats: selectedPlayerStats, idGame:idGame, time:time})
                    break;
                case 'TO':
                    this.props.sendTurnover({stats: selectedPlayerStats, idGame:idGame, time:time})
                    break;
                case 'PF':
                    this.props.sendFoul({stats: selectedPlayerStats, idGame:idGame, time:time})
                    break;
                case 'FD':
                    this.props.sendFoulDrawn({stats: selectedPlayerStats, idGame:idGame, time:time})
                    break;
                default:
                    console.log('Default case send action')
            }
            this.setState({
                selectedPlayerStats: null
            })
        }
    }


    sendScore = (points, action) =>{
        const {selectedPlayerStats, idGame, minutes, seconds} = this.state;
        const time = `${minutes}:${seconds}` 
        if(selectedPlayerStats !== null){
            switch(points){
                case 1:
                    if(action === 'SCORE')
                        this.props.sendScore1({stats: selectedPlayerStats, idGame:idGame, time:time})
                    else
                        this.props.sendMiss1({stats: selectedPlayerStats, idGame:idGame, time:time})
                    break;
                case 2:
                    if(action === 'SCORE')
                        this.props.sendScore2({stats: selectedPlayerStats, idGame:idGame, time:time})
                    else
                        this.props.sendMiss2({stats: selectedPlayerStats, idGame:idGame, time:time})
                    break;
                case 3:
                    if(action === 'SCORE')
                        this.props.sendScore3({stats: selectedPlayerStats, idGame:idGame, time:time})
                    else
                        this.props.sendMiss3({stats: selectedPlayerStats, idGame:idGame, time:time})
                    break;
            }
            this.setState({
                selectedPlayerStats: null
            })
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
        this.props.requestStopChannel();
    }

    render() { 
        const {classes, statsTeam1, statsTeam2, game, liveGame,} = this.props;
        const {imageTeam1, imageTeam2, seconds, minutes, quaters, selectedPlayerStats} = this.state;
    
        return (
            <Grid container>
                {game === null 
                ? <Loading/>
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
                    <Stepper activeStep={liveGame.quater-1} alternativeLabel>
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
                        <Button className={classes.button} onClick={()=>this.sendScore(1, 'SCORE')}>+1</Button>
                        <Button className={classes.button} onClick={()=>this.sendScore(2, 'SCORE')}>+2</Button>
                        <Button className={classes.button} onClick={()=>this.sendScore(3, 'SCORE')}>+3</Button>
                        <Button className={classes.button} onClick={()=>this.sendScore(1, 'MISS')}>Miss 1</Button>
                        <Button className={classes.button} onClick={()=>this.sendScore(2, 'MISS')}>Miss 2</Button>
                        <Button className={classes.button} onClick={()=>this.sendScore(3, 'MISS')}>Miss 3</Button>

                        <Button className={classes.button} onClick={()=>this.sendAction('OFF REB')}>Off Reb</Button>
                        <Button className={classes.button} onClick={()=>this.sendAction('DEF REB')}>Def Reb</Button>
                        <Button className={classes.button} onClick={()=>this.sendAction('BS')}>Bs</Button>
                        <Button className={classes.button} onClick={()=>this.sendAction('AS')}>As</Button>
                        <Button className={classes.button} onClick={()=>this.sendAction('TO')}>To</Button>
                        <Button className={classes.button} onClick={()=>this.sendAction('ST')}>St</Button>
                        <Button className={classes.button} onClick={()=>this.sendAction('PF')}>PF</Button>
                        <Button className={classes.button} onClick={()=>this.sendAction('FD')}>FD</Button>
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