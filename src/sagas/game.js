import { call, put, takeLatest, all, fork, cancelled, cancel, take, delay } from 'redux-saga/effects';
import { gameApi } from "../api";
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
			socket.send(JSON.stringify({type: socketActions.ADMIN_JOINED, object: idGame}))
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

const getPlayersTeam1 = function*(action) {
	yield put(gameActions.requestGetPlayersTeam1());

	try {
	const response = yield call(gameApi.getPlayersTeam, action.payload);
    yield put(gameActions.receiveGetPlayersTeam1(response.data));
	} catch (e) {
    yield put(gameActions.receiveGetPlayersTeam1Fail());
	}
};

const getPlayersTeam2 = function*(action) {
	yield put(gameActions.requestGetPlayersTeam2());

	try {
    const response = yield call(gameApi.getPlayersTeam, action.payload);
    yield put(gameActions.receiveGetPlayersTeam2(response.data));
	} catch (e) {
    yield put(gameActions.receiveGetPlayersTeam2Fail());
	}
};

const updatePlayer = function* (action) {
        yield put(gameActions.requestUpdatePlayer());

        try {
                const response = yield call(gameApi.updatePlayer, action.payload);
                yield put(gameActions.receiveUpdatePlayer(response.data));
        } catch (e) {
                yield put(gameActions.receiveUpdatePlayerFail());
        }
};

const addStatsTeam1 = function* (action) {
        yield put(gameActions.requestAddStatsTeam1());
        try {
                const response = yield call(gameApi.addStatsTeam1, action.payload);
                yield put(gameActions.receiveAddStatsTeam1(response.data));
        } catch (e) {
                yield put(gameActions.receiveAddStatsTeam1Fail());
        }
};

const addStatsTeam2 = function* (action) {
        yield put(gameActions.requestAddStatsTeam2());
        try {
                const response = yield call(gameApi.addStatsTeam2, action.payload);
                yield put(gameActions.receiveAddStatsTeam2(response.data));
        } catch (e) {
                yield put(gameActions.receiveAddStatsTeam2Fail());
        }
};

const addGame = function* (action) {
        yield put(gameActions.requestAddGame());
        try {
                const response = yield call(gameApi.addGame, action.payload);
                yield put(gameActions.receiveAddGame(response.data));
        } catch (e) {
                yield put(gameActions.receiveAddGameFail());
        }
};

const getStatsListTeam1 = function*(action) {
	yield put(gameActions.requestGetStatsListTeam1());

	try {
    const response = yield call(gameApi.getStatsListTeam, action.payload);
    yield put(gameActions.receiveGetStatsListTeam1(response.data));
	} catch (e) {
    yield put(gameActions.receiveGetStatsListTeam1Fail());
	}
};

const getStatsListTeam2 = function*(action) {
	yield put(gameActions.requestGetStatsListTeam2());

	try {
    const response = yield call(gameApi.getStatsListTeam, action.payload);
    yield put(gameActions.receiveGetStatsListTeam2(response.data));
	} catch (e) {
    yield put(gameActions.receiveGetStatsListTeam2Fail());
	}
};

const startGame = function* (action) {
    socket.send(JSON.stringify({type: socketActions.SEND_START_GAME, object: action.payload}))
};

const endGame = function* (action) {
	socket.send(JSON.stringify({type: socketActions.SEND_END_GAME, object: action.payload}))
	localStorage.removeItem('currentGameId');
	localStorage.removeItem('team1');
	localStorage.removeItem('team2');
    yield delay(5000);
    yield put(push('/pregame'));
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
	]);
}