import {getPlayersTeam1, getPlayersTeam2, updatePlayer, addStatsTeam2, addStatsTeam1, getStatsListTeam1, getStatsListTeam2, addGame } from './helperGame';
import { call, put, takeLatest, all, fork, cancelled, cancel, take, delay } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import {socketActions } from '../static/socketActions';
import { push } from 'connected-react-router';
import {
    gameActions,
	gameTypes,
} from "../redux";


const socketServerURL = "ws://192.168.100.89:8081";
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

		// tell the application that we have a connection
		//yield dispatch(LiveDataActions.connectionSuccess());
		//yield put(gameActions.receiveHostGame());

		while (true) {
			// wait for a message from the channel
			const payload = yield take(socketChannel);

			// a message has been received, dispatch an action with the message payload
			//yield dispatch(LiveDataActions.incomingEvent(payload));
			const obj = JSON.parse(payload)
			console.log('Obiectul primit prin websocket este: ',obj)
			switch(obj.type){
				case socketActions.ADMIN_SUCCESSFULLY_JOINED:
					yield put(gameActions.receiveHostGame(obj.object));
					break;
				case socketActions.ADMIN_SUCCESSFULL_REFRESH:
					yield put(gameActions.successfullRefresh(obj.object));
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
	localStorage.removeItem('team1');
	localStorage.removeItem('team2');
    yield delay(2000);
    yield put(push('/pregame'));
};

const sendScore1 = function(action) {
	const {stats, time, idGame} = action.payload;
	console.log(stats)
    socket.send(JSON.stringify({type: socketActions.SEND_SCORE_1, object: stats, time: time, idGame: idGame}))
};

const sendScore2 = function(action) {
    socket.send(JSON.stringify({type: socketActions.SEND_SCORE_2, object: action.payload}))
};

const sendScore3 = function(action) {
    socket.send(JSON.stringify({type: socketActions.SEND_SCORE_3, object: action.payload}))
};

const sendMiss1 = function(action) {
    socket.send(JSON.stringify({type: socketActions.SEND_MISS_1, object: action.payload}))
};

const sendMiss2 = function(action) {
    socket.send(JSON.stringify({type: socketActions.SEND_MISS_2, object: action.payload}))
};

const sendMiss3 = function(action) {
    socket.send(JSON.stringify({type: socketActions.SEND_MISS_3, object: action.payload}))
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
	]);
}