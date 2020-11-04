import React, { Component } from 'react';
import {
    Container
} from '@material-ui/core';
import SockJsClient from 'react-stomp';
import {GuestGame} from '../../containers';
import { socketActions } from '../socketActions';

class GuestSocket extends Component {
    state={
        idGame: 0
    }

    componentDidMount(){
        const idGame = localStorage.getItem("currentGameId");
        this.setState({
            idGame: idGame
        })
    }

    joinGame = () =>{
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.USER_JOINED, idGame: this.state.idGame}))
    }

    leaveGame = () =>{
        this.clientRef.sendMessage(`/app/send/${this.state.idGame}`, JSON.stringify({type: socketActions.USER_LEFT, idGame: this.state.idGame}))   
    }

    receiveMessages = (obj) =>{
        console.log("New message for guest");
        console.log(obj);

        switch(obj.type){
            case socketActions.GUEST_SUCCESSFULLY_JOINED:
                this.props.receiveJoinGame(obj.object);
                break;
            case socketActions.ACTIVE_USERS:
                this.props.setActiveUsers(obj.object);
                break;
            case socketActions.RECEIVE_START_GAME:
                this.props.receiveStartGame(obj.comment);
                break;
            case socketActions.RECEIVE_END_GAME:
                this.props.receiveEndGame(obj.object);
                break;
            case socketActions.RECEIVE_SCORE_1:
                this.props.receiveScore1(obj);
                break;
            case socketActions.RECEIVE_SCORE_2:
                this.props.receiveScore2(obj);
                break;
            case socketActions.RECEIVE_SCORE_3:
                this.props.receiveScore3(obj);
                break;
            case socketActions.RECEIVE_MISS_1:
                this.props.receiveMiss1(obj);
                break;
            case socketActions.RECEIVE_MISS_2:
                this.props.receiveMiss2(obj);
                break;
            case socketActions.RECEIVE_MISS_3:
                this.props.receiveMiss3(obj);
                break;
            case socketActions.RECEIVE_STATS_UPDATE:
                this.props.receiveStatsUpdate(obj);
                break;
            case socketActions.RECEIVE_PLAYERS_TIME:
                this.props.receivePlayersTime(obj);
                break;
            case socketActions.RECEIVE_CHANGE_QUATER:
                this.props.receiveChangeQuater(obj);
                break;
            case socketActions.RECEIVE_SUBSTITUTION:
                this.props.receiveSubstitution(obj);
                break;       
        }
    }

    render() { 
        const {idGame} = this.state;
        return (
            <Container>
                {idGame !== 0 &&   
                <SockJsClient url='https://warm-wave-45384.herokuapp.com/websocket/'
                    topics={[`/topic/receive/${idGame}`, `/user/topic/receive/${idGame}`]}
                    onConnect={() => {
                        console.log("Guest connected");
                        this.joinGame();
                    }}
                    onDisconnect={() => {
                        console.log("Guest disconnected");
                    }}
                    onMessage={(msg) => {
                        this.receiveMessages(msg);
                    }}
                    ref={(client) => {
                        this.clientRef = client
                    }}/>
                }
                <GuestGame leaveGame={this.leaveGame}/>
		    </Container>
        );
    }
}
 
export default GuestSocket;