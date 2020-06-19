import { call, put, takeLatest, all, fork, cancelled, cancel, take } from 'redux-saga/effects';
import { gameApi } from "../api";
import { eventChannel, END } from 'redux-saga';
import {socketActions } from '../static/socketActions';
import {
    guestGameActions,
	guestGameTypes,
} from "../redux";


const socketServerURL = "ws://192.168.99.100:8081";

function createWebSocketConnection(idGame) {
	return new Promise((resolve, reject) => {
		const socket = new WebSocket(socketServerURL);

		socket.onopen = function () {
			console.log("Client connected to the websocket")
			resolve(socket);
			socket.send(JSON.stringify({type: socketActions.USER_JOINED, idGame: idGame}))
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

		while (true) {
			// wait for a message from the channel
			const payload = yield take(socketChannel);
			
			const obj = JSON.parse(payload)
			console.log('Obiectul primit prin websocket este: ',obj)
			switch(obj.type){
				case socketActions.GUEST_SUCCESSFULLY_JOINED:
					yield put(guestGameActions.receiveJoinGame(obj.object));
					break;
				case socketActions.ACTIVE_USERS:
					yield put(guestGameActions.setActiveUsers(obj.object));
					break;
				case socketActions.RECEIVE_START_GAME:
					yield put(guestGameActions.receiveStartGame(obj.comment));
					break;
				case socketActions.RECEIVE_END_GAME:
					yield put(guestGameActions.receiveEndGame(obj.object));
					break;
				case socketActions.RECEIVE_SCORE_1:
					yield put(guestGameActions.receiveScore1(obj));
					break;
				case socketActions.RECEIVE_SCORE_2:
					yield put(guestGameActions.receiveScore2(obj));
					break;
				case socketActions.RECEIVE_SCORE_3:
					yield put(guestGameActions.receiveScore3(obj));
					break;
				case socketActions.RECEIVE_MISS_1:
					yield put(guestGameActions.receiveMiss1(obj));
					break;
				case socketActions.RECEIVE_MISS_2:
					yield put(guestGameActions.receiveMiss2(obj));
					break;
				case socketActions.RECEIVE_MISS_3:
					yield put(guestGameActions.receiveMiss3(obj));
					break;
				case socketActions.RECEIVE_STATS_UPDATE:
					yield put(guestGameActions.receiveStatsUpdate(obj));
					break;
				case socketActions.RECEIVE_PLAYERS_TIME:
					yield put(guestGameActions.receivePlayersTime(obj));
					break;
				case socketActions.RECEIVE_CHANGE_QUATER:
					yield put(guestGameActions.receiveChangeQuater(obj));
					break;
				case socketActions.RECEIVE_SUBSTITUTION:
					yield put(guestGameActions.receiveSubstitution(obj));
					break;
					
			}
		}
	} catch (error) {
		console.log(error)
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

const getResultList = function*(action) {
	yield put(guestGameActions.requestGetResultList());

	try {
		const response = yield call(gameApi.getResultList);
		yield put(guestGameActions.receiveGetResultList(response.data));
	} catch (e) {
		yield put(guestGameActions.receiveGetResultListFail());
	}
};

const getCommentList = function*(action) {
	yield put(guestGameActions.requestGetCommentList());

	try {
        const response = yield call(gameApi.getCommentList, action.payload);
		yield put(guestGameActions.receiveGetCommentList(response.data));
	} catch (e) {
		yield put(guestGameActions.receiveGetCommentListFail());
	}
};

export default function*() {
	yield all([
		takeLatest(guestGameTypes.GET_LIVE_GAME_LIST, getLiveGameList),
		takeLatest(guestGameTypes.GET_RESULT_LIST, getResultList),
		takeLatest(guestGameTypes.GET_COMMENT_LIST, getCommentList),
		takeLatest(guestGameTypes.JOIN_GAME, joinGame),
	]);
}