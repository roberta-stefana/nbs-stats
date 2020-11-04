import React, { Component } from 'react';
import {
    Container, Button
} from '@material-ui/core';
import SockJsClient from 'react-stomp';
import {Game} from '../../containers';
import { socketActions } from '../socketActions';

class AdminSocket extends Component {

    state={
        idGame: 0
    }

    componentDidMount(){
        const idGame = localStorage.getItem("currentGameId");
        this.setState({
            idGame: idGame
        })
    }

    hostGame = () =>{
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.HOST_GAME, idGame: this.state.idGame}))
    }

    sendStartGame = () => {
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_START_GAME, idGame: this.state.idGame}))
    };
    
    sendEndGame = () => {
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_END_GAME, idGame: this.state.idGame}))
        localStorage.removeItem('currentGameId');
        localStorage.removeItem('time');
        localStorage.removeItem('team1');
        localStorage.removeItem('team2');
        //TODO: redirect to /pregame
    };

    sendScore1 = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_SCORE_1, object: stats, time: time, idGame: idGame}))
    };
    
    sendScore2 = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_SCORE_2, object: stats, time: time, idGame: idGame}))
    };
    
    sendScore3 = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_SCORE_3, object: stats, time: time, idGame: idGame}))
    };
    
    sendMiss1 = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_MISS_1, object: stats, time: time, idGame: idGame}))
    };
    
    sendMiss2 = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_MISS_2, object: stats, time: time, idGame: idGame}))
    };
    
    sendMiss3 = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_MISS_3, object: stats, time: time, idGame: idGame}))
    };
    
    sendOffRebound = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_OFF_REBOUND, object: stats, time: time, idGame: idGame}))
    };
    
    sendDefRebound = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_DEF_REBOUND, object: stats, time: time, idGame: idGame}))
    };
    
    sendBlockedShot = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_BLOCKED_SHOT, object: stats, time: time, idGame: idGame}))
    };
    
    sendAssist = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_ASSIST, object: stats, time: time, idGame: idGame}))
    };
    
    sendSteal = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_STEAL, object: stats, time: time, idGame: idGame}))
    };
    
    sendTurnover = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_TURNOVER, object: stats, time: time, idGame: idGame}))
    };
    
    sendFoul = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_FOUL, object: stats, time: time, idGame: idGame}))
    };
    
    sendFoulDrawn = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_FOUL_DRAWN, object: stats, time: time, idGame: idGame}))
    };
    
    sendTimeout = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_FOUL_DRAWN, object: stats, time: time, idGame: idGame}))
    };
    
    sendSubstitution = (payload)=>{
        const {object, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_SUBSTITUTION, object: object, time: time, idGame: idGame}))
    };
    
    sendPlayersTime = (payload)=>{
        const {stats, time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_PLAYERS_TIME, object: stats, time: time, idGame: idGame}))
    };
    
    sendChangeQuater = (payload)=>{
        const {time, idGame} = payload;
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.SEND_CHANGE_QUATER, object: null, time: time, idGame: idGame}))
    };

    receiveMessages = (obj) => {
        console.log("New message for admin")
        console.log(obj);

        switch(obj.type){
            case socketActions.RECEIVE_HOST_GAME:
                this.props.receiveHostGame(obj.object);
                break;
            case socketActions.RECEIVE_SCORE_1:
                this.props.receiveAdminScore1(obj);
                break;
            case socketActions.RECEIVE_SCORE_2:
                this.props.receiveAdminScore2(obj);
                break;
            case socketActions.RECEIVE_SCORE_3:
                this.props.receiveAdminScore3(obj);
                break;
            case socketActions.RECEIVE_MISS_1:
                this.props.receiveAdminMiss1(obj);
            break;
            case socketActions.RECEIVE_MISS_2:
                this.props.receiveAdminMiss2(obj);
                break;
            case socketActions.RECEIVE_MISS_3:
                this.props.receiveAdminMiss3(obj);
                break;
            case socketActions.RECEIVE_STATS_UPDATE:
                this.props.receiveAdminStatsUpdate(obj);
                break;
            case socketActions.RECEIVE_PLAYERS_TIME:
                this.props.receiveAdminPlayersTime(obj);
                break;
            case socketActions.RECEIVE_CHANGE_QUATER:
                this.props.receiveAdminChangeQuater(obj);
                break;
            case socketActions.RECEIVE_SUBSTITUTION:
                this.props.receiveAdminSubstitution(obj);
                break;
            default:
                break;
        }
    }
    
    render() { 
        const {idGame} = this.state;
        return (
            <Container>
                {idGame !== 0 &&
                <SockJsClient url='http://localhost:8080/websocket/'
                    topics={[`/topic/receive/${idGame}`, `/user/topic/receive/${idGame}`]}
                    onConnect={() => {
                        console.log("Admin connected");
                        this.hostGame();
                    }}
                    onDisconnect={() => {
                        console.log("Admin disconnected");
                    }}
                    onMessage={(msg) => {
                        this.receiveMessages(msg);
                    }}
                    ref={(client) => {
                        this.clientRef = client
                    }}/>
                }
                <Game
                    sendStartGame={this.sendStartGame}
                    sendEndGame={this.sendEndGame}
                    sendScore1={this.sendScore1}
                    sendScore2={this.sendScore2}
                    sendScore3={this.sendScore3}
                    sendMiss1={this.sendMiss1}
                    sendMiss2={this.sendMiss2}
                    sendMiss3={this.sendMiss3}
                    sendOffRebound={this.sendOffRebound}
                    sendDefRebound={this.sendDefRebound}
                    sendBlockedShot={this.sendBlockedShot}
                    sendAssist={this.sendAssist}
                    sendSteal={this.sendSteal}
                    sendTurnover={this.sendTurnover}
                    sendFoul={this.sendFoul}
                    sendFoulDrawn={this.sendFoulDrawn}
                    sendTimeout={this.sendTimeout}
                    sendSubstitution={this.sendSubstitution}
                    sendPlayersTime={this.sendPlayersTime}
                    sendChangeQuater={this.sendChangeQuater}
                />
		</Container>
        );
    }
}

export default AdminSocket;
