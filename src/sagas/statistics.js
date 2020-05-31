import { call, put, takeLatest, all } from 'redux-saga/effects';
import { gameApi, statsApi } from "../api";

import {
  	statisticsActions,
	statisticsTypes,
} from "../redux";

const getPlayerList1 = function*(action) {
	yield put(statisticsActions.requestGetPlayerList1());

	try {
		const response = yield call(gameApi.getPlayersTeam, action.payload);
		yield put(statisticsActions.receiveGetPlayerList1(response.data));
	} catch (e) {
		yield put(statisticsActions.receiveGetPlayerList1Fail());
	}
};

const getPlayerList2 = function*(action) {
	yield put(statisticsActions.requestGetPlayerList2());

	try {
        const response = yield call(gameApi.getPlayersTeam, action.payload); 
		yield put(statisticsActions.receiveGetPlayerList2(response.data));
	} catch (e) {
		yield put(statisticsActions.receiveGetPlayerList2Fail());
	}
};

const getStatsPlayer1 = function*(action) {
	yield put(statisticsActions.requestGetStatsPlayer1());

	try {
		const response = yield call(statsApi.getStatsPlayer, action.payload);
		yield put(statisticsActions.receiveGetStatsPlayer1(response.data));
	} catch (e) {
		yield put(statisticsActions.receiveGetStatsPlayer1Fail());
	}
};

const getStatsPlayer2 = function*(action) {
	yield put(statisticsActions.requestGetStatsPlayer2());

	try {
		const response = yield call(statsApi.getStatsPlayer, action.payload); 
		yield put(statisticsActions.receiveGetStatsPlayer2(response.data));
	} catch (e) {
		yield put(statisticsActions.receiveGetStatsPlayer2Fail());
	}
};

export default function*() {
	yield all([
        takeLatest(statisticsTypes.GET_PLAYER_LIST_1, getPlayerList1 ),
		takeLatest(statisticsTypes.GET_PLAYER_LIST_2, getPlayerList2 ),
		takeLatest(statisticsTypes.GET_STATS_PLAYER_1, getStatsPlayer1 ),
        takeLatest(statisticsTypes.GET_STATS_PLAYER_2, getStatsPlayer2 )
	]);
}