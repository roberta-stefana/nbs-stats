import { call, put, takeLatest, all, fork, cancelled, cancel, take } from 'redux-saga/effects';
import { gameApi } from "../api";
import { eventChannel, END } from 'redux-saga';
import {
    guestGameActions,
	guestGameTypes,
} from "../redux";


const socketServerURL = "ws://192.168.100.89:8081";

function createWebSocketConnection() {
	return new Promise((resolve, reject) => {
		const socket = new WebSocket(socketServerURL);

		socket.onopen = function () {
			console.log("Client connected to the websocket")
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
		yield put(guestGameActions.receiveJoinGame());

		while (true) {
			// wait for a message from the channel
			const payload = yield take(socketChannel);

			// a message has been received, dispatch an action with the message payload
			//yield dispatch(LiveDataActions.incomingEvent(payload));
			const obj = JSON.parse(payload)
			console.log(obj)
		}
	} catch (error) {
		yield put(guestGameActions.receiveJoinGameFail());
	} finally {
		if (yield cancelled()) {
			socketChannel.close();
			socket.close();
		} else {
			yield put(guestGameActions.stopChannel());
		}
	}
}

export function* joinGame() {
	console.log("Client trying to connect to websocket ...")
	const socketTask = yield fork(listenForSocketMessages);

	// when DISCONNECT action is dispatched, we cancel the socket task
	yield take(guestGameTypes.REQUEST_LEAVE_GAME);
	yield cancel(socketTask);
	yield put(guestGameActions.receiveLeaveGame());
}

const getLiveGameList = function*(action) {
	yield put(guestGameActions.requestGetLiveGameList());

	try {
        const response = yield call(gameApi.getLiveGameList);
		yield put(guestGameActions.receiveGetLiveGameList(response.data));
	} catch (e) {
		yield put(guestGameActions.receiveGetLiveGameListFail());
	}
};

export default function*() {
	yield all([
        takeLatest(guestGameTypes.GET_LIVE_GAME_LIST, getLiveGameList),
		takeLatest(guestGameTypes.JOIN_GAME, joinGame),
	]);
}