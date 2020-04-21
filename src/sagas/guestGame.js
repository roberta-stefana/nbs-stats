import { call, put, takeLatest, all, fork, cancelled, cancel, take } from 'redux-saga/effects';
import { gameApi } from "../api";
import { eventChannel, END } from 'redux-saga';
import {socketActions } from '../static/socketActions';
import {
    guestGameActions,
	guestGameTypes,
} from "../redux";


const socketServerURL = "ws://192.168.100.89:8081";

function createWebSocketConnection(idGame) {
	return new Promise((resolve, reject) => {
		const socket = new WebSocket(socketServerURL);

		socket.onopen = function () {
			console.log("Client connected to the websocket")
			resolve(socket);
			socket.send(JSON.stringify({type: socketActions.USER_JOINED, object: idGame}))
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
	let socket;
	let socketChannel;

	try {
		socket        = yield call(createWebSocketConnection, idGame);
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
			console.log('Obiectul primit prin websocket este: ',obj)
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

export function* joinGame(action) {
	console.log("Client trying to connect to websocket ...")
	yield put(guestGameActions.requestJoinGame());
	const socketTask = yield fork(listenForSocketMessages, action.payload);

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

const getCommentList = function*(action) {
	yield put(guestGameActions.requestCommentList());

	try {
        const response = yield call(gameApi.getCommentList, action.payload);
		yield put(guestGameActions.receiveCommentList(response.data));
	} catch (e) {
		yield put(guestGameActions.receiveCommentListFail());
	}
};

export default function*() {
	yield all([
        takeLatest(guestGameTypes.GET_LIVE_GAME_LIST, getLiveGameList),
		takeLatest(guestGameTypes.JOIN_GAME, joinGame),
	]);
}