import { call, put, takeLatest, all } from 'redux-saga/effects';
import { gameApi } from "../api";

import {
    gameActions,
	gameTypes,
} from "../redux";

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

export default function*() {
	yield all([
        takeLatest(gameTypes.GET_PLAYERS_TEAM1, getPlayersTeam1),
        takeLatest(gameTypes.GET_PLAYERS_TEAM2, getPlayersTeam2),
	]);
}