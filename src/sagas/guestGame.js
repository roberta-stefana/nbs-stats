import { call, put, takeLatest, all} from 'redux-saga/effects';
import { gameApi } from "../api";
import {
    guestGameActions,
	guestGameTypes,
} from "../redux";


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
	]);
}