import { call, put, takeLatest, all, fork, cancelled, cancel, take } from 'redux-saga/effects';
import { gameApi } from "../api";
import { eventChannel, END } from 'redux-saga';
import {
        gameActions,
	gameTypes,
} from "../redux";


const socketServerURL = "ws://192.168.100.89:8081";

function createWebSocketConnection() {
	return new Promise((resolve, reject) => {
		const socket = new WebSocket(socketServerURL);

		socket.onopen = function () {
			console.log("Connected to the websocket")
			socket.send(JSON.stringify({user: {}, data: 'Mesaj nouuu', type: 'USER_JOINED'}))
			resolve(socket);
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

function* listenForSocketMessages() {
	let socket;
	let socketChannel;

	try {
		socket        = yield call(createWebSocketConnection);
		socketChannel = yield call(createSocketChannel, socket);

		// tell the application that we have a connection
		//yield dispatch(LiveDataActions.connectionSuccess());
		yield put(gameActions.receiveHostGame());

		while (true) {
			// wait for a message from the channel
			const payload = yield take(socketChannel);

			// a message has been received, dispatch an action with the message payload
			//yield dispatch(LiveDataActions.incomingEvent(payload));
			console.log(payload);
			//console.log(payload.messageType);
			const obj = JSON.parse(payload)
			console.log(obj)
		}
	} catch (error) {
		//yield dispatch(LiveDataActions.connectionError('Error while connecting to the WebSocket'));
		yield put(gameActions.receiveHostGameFail());
	} finally {
		if (yield cancelled()) {
			socketChannel.close();
			socket.close();
		} else {
			//yield dispatch(LiveDataActions.connectionError('WebSocket disconnected'));
			yield put(gameActions.receiveStopChannel());
		}
	}
}

export function* hostGame() {
	// starts the task in the background
	console.log("Trying to connect to websocket ...")
	const socketTask = yield fork(listenForSocketMessages);

	// when DISCONNECT action is dispatched, we cancel the socket task
	yield take(gameTypes.REQUEST_STOP_CHANNEL);
	yield cancel(socketTask);
	//yield dispatch(LiveDataActions.disconnectSuccess());
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

export default function*() {
	yield all([
                takeLatest(gameTypes.GET_PLAYERS_TEAM1, getPlayersTeam1),
    takeLatest(gameTypes.GET_PLAYERS_TEAM2, getPlayersTeam2),
    takeLatest(gameTypes.UPDATE_PLAYER, updatePlayer),
    takeLatest(gameTypes.ADD_STATS_TEAM1, addStatsTeam1),
                takeLatest(gameTypes.ADD_STATS_TEAM2, addStatsTeam2),
                takeLatest(gameTypes.ADD_GAME, addGame),
                takeLatest(gameTypes.HOST_GAME, hostGame),
	]);
}