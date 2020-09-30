import {getPlayersTeam1, getPlayersTeam2, updatePlayer, addStatsTeam2, addStatsTeam1, getStatsListTeam1, getStatsListTeam2, addGame } from './helperGame';
import { call, put, takeLatest, all, fork, cancelled, cancel, take, delay } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import {socketActions } from '../static/socketActions';
import { push } from 'connected-react-router';
import {
    gameActions,
	gameTypes,
} from "../redux";


//const socketServerURL = "ws://192.168.1.106:8081"; //local server
const socketServerURL ="ws://warm-wave-45384.herokuapp.com"
//const socketServerURL = "ws://192.168.100.127:8081";
let socket;

function createWebSocketConnection(idGame) {
	return new Promise((resolve, reject) => {
		socket = new WebSocket(socketServerURL);

		socket.onopen = function () {
			console.log("Connected to the websocket")
			resolve(socket);
			socket.send(JSON.stringify({type: socketActions.ADMIN_JOINED, idGame: idGame}))
		};

		socket.onerror = function (evt) {
			reject(evt);
		}
	});
}

function createSocketChannel(socket) {
	return eventChannel(emit => {
		socket.onmessage = (event) => {
			emit(event.data)
		};

		socket.onclose = () => {
			emit(END);
		};

		const unsubscribe = () => {
			socket.onmessage = null;
		};

		return unsubscribe;
	});
}

function* listenForSocketMessages(idGame) {
	let socketChannel;

	try {
		socket        = yield call(createWebSocketConnection, idGame);
		socketChannel = yield call(createSocketChannel, socket);

		while (true) {
			// wait for a message from the channel
			const payload = yield take(socketChannel);

			// a message has been received, dispatch an action with the message payload
			const obj = JSON.parse(payload)
			console.log('Obiectul primit prin websocket este: ',obj)
			switch(obj.type){
				case socketActions.ADMIN_SUCCESSFULLY_JOINED:
					yield put(gameActions.receiveHostGame(obj.object));
					break;
				case socketActions.ADMIN_SUCCESSFULL_REFRESH:
					yield put(gameActions.successfullRefresh(obj.object));
					break;
				case socketActions.RECEIVE_SCORE_1:
					yield put(gameActions.receiveAdminScore1(obj));
					break;
				case socketActions.RECEIVE_SCORE_2:
					yield put(gameActions.receiveAdminScore2(obj));
					break;
				case socketActions.RECEIVE_SCORE_3:
					yield put(gameActions.receiveAdminScore3(obj));
					break;
				case socketActions.RECEIVE_MISS_1:
					yield put(gameActions.receiveAdminMiss1(obj));
				break;
				case socketActions.RECEIVE_MISS_2:
					yield put(gameActions.receiveAdminMiss2(obj));
					break;
				case socketActions.RECEIVE_MISS_3:
					yield put(gameActions.receiveAdminMiss3(obj));
					break;
				case socketActions.RECEIVE_STATS_UPDATE:
					yield put(gameActions.receiveAdminStatsUpdate(obj));
					break;
				case socketActions.RECEIVE_PLAYERS_TIME:
					yield put(gameActions.receiveAdminPlayersTime(obj));
					break;
				case socketActions.RECEIVE_CHANGE_QUATER:
					yield put(gameActions.receiveAdminChangeQuater(obj));
					break;
				case socketActions.RECEIVE_SUBSTITUTION:
					yield put(gameActions.receiveAdminSubstitution(obj));
					break;
			}
		}
	} catch (error) {
		console.log(error)
		yield put(gameActions.receiveHostGameFail());
	} finally {
		if (yield cancelled()) {
			socketChannel.close();
			socket.close();
		} else {
			yield put(gameActions.receiveStopChannel());
		}
	}
}

export function* hostGame(action) {
	yield put(gameActions.requestHostGame());
	console.log("Trying to connect to websocket ...")
	const socketTask = yield fork(listenForSocketMessages, action.payload);

	// when DISCONNECT action is dispatched, we cancel the socket task
	yield take(gameTypes.REQUEST_STOP_CHANNEL);
	yield cancel(socketTask);
	yield put(gameActions.receiveStopChannel());
}


const startGame = function(action) {
    socket.send(JSON.stringify({type: socketActions.SEND_START_GAME, idGame: action.payload}))
};

const endGame = function* (action) {
	socket.send(JSON.stringify({type: socketActions.SEND_END_GAME, idGame: action.payload}))
	localStorage.removeItem('currentGameId');
	localStorage.removeItem('time');
	localStorage.removeItem('team1');
	localStorage.removeItem('team2');
    yield put(push('/pregame'));
};

const sendScore1 = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_SCORE_1, object: stats, time: time, idGame: idGame}))
};

const sendScore2 = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_SCORE_2, object: stats, time: time, idGame: idGame}))
};

const sendScore3 = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_SCORE_3, object: stats, time: time, idGame: idGame}))
};

const sendMiss1 = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_MISS_1, object: stats, time: time, idGame: idGame}))
};

const sendMiss2 = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_MISS_2, object: stats, time: time, idGame: idGame}))
};

const sendMiss3 = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_MISS_3, object: stats, time: time, idGame: idGame}))
};

const sendOffRebound = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_OFF_REBOUND, object: stats, time: time, idGame: idGame}))
};

const sendDefRebound = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_DEF_REBOUND, object: stats, time: time, idGame: idGame}))
};

const sendBlockedShot = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_BLOCKED_SHOT, object: stats, time: time, idGame: idGame}))
};

const sendAssist = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_ASSIST, object: stats, time: time, idGame: idGame}))
};

const sendSteal = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_STEAL, object: stats, time: time, idGame: idGame}))
};

const sendTurnover = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_TURNOVER, object: stats, time: time, idGame: idGame}))
};

const sendFoul = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_FOUL, object: stats, time: time, idGame: idGame}))
};

const sendFoulDrawn = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_FOUL_DRAWN, object: stats, time: time, idGame: idGame}))
};

const sendTimeout = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_FOUL_DRAWN, object: stats, time: time, idGame: idGame}))
};

const sendSubstitution = function(action) {
	const {object, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_SUBSTITUTION, object: object, time: time, idGame: idGame}))
};

const sendPlayersTime = function(action) {
	const {stats, time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_PLAYERS_TIME, object: stats, time: time, idGame: idGame}))
};

const sendChangeQuater = function(action) {
	const {time, idGame} = action.payload;
    socket.send(JSON.stringify({type: socketActions.SEND_CHANGE_QUATER, object: null, time: time, idGame: idGame}))
};





export default function*() {
	yield all([
        takeLatest(gameTypes.GET_PLAYERS_TEAM1, getPlayersTeam1),
		takeLatest(gameTypes.GET_PLAYERS_TEAM2, getPlayersTeam2),
		takeLatest(gameTypes.UPDATE_PLAYER, updatePlayer),
		takeLatest(gameTypes.ADD_STATS_TEAM1, addStatsTeam1),
		takeLatest(gameTypes.ADD_STATS_TEAM2, addStatsTeam2),
		takeLatest(gameTypes.ADD_GAME, addGame),
		takeLatest(gameTypes.GET_STATS_LIST_TEAM1, getStatsListTeam1),
		takeLatest(gameTypes.GET_STATS_LIST_TEAM2, getStatsListTeam2),
		takeLatest(gameTypes.HOST_GAME, hostGame),
		takeLatest(gameTypes.SEND_START_GAME, startGame),
		takeLatest(gameTypes.SEND_END_GAME, endGame),

		takeLatest(gameTypes.SEND_SCORE_1, sendScore1),
		takeLatest(gameTypes.SEND_SCORE_2, sendScore2),
		takeLatest(gameTypes.SEND_SCORE_3, sendScore3),

		takeLatest(gameTypes.SEND_MISS_1, sendMiss1),
		takeLatest(gameTypes.SEND_MISS_2, sendMiss2),
		takeLatest(gameTypes.SEND_MISS_3, sendMiss3),

		takeLatest(gameTypes.SEND_OFF_REBOUND, sendOffRebound),
		takeLatest(gameTypes.SEND_DEF_REBOUND, sendDefRebound),

		takeLatest(gameTypes.SEND_BLOCKED_SHOT, sendBlockedShot),
		takeLatest(gameTypes.SEND_ASSIST, sendAssist),
		takeLatest(gameTypes.SEND_STEAL, sendSteal),
		takeLatest(gameTypes.SEND_TURNOVER, sendTurnover),
		takeLatest(gameTypes.SEND_FOUL, sendFoul),
		takeLatest(gameTypes.SEND_FOUL_DRAWN, sendFoulDrawn),
		takeLatest(gameTypes.SEND_PLAYERS_TIME, sendPlayersTime),

		takeLatest(gameTypes.SEND_TIMEOUT, sendTimeout),
		takeLatest(gameTypes.SEND_SUBSTITUTION, sendSubstitution),
		takeLatest(gameTypes.SEND_CHANGE_QUATER, sendChangeQuater),

	]);
}