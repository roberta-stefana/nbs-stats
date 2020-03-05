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

export default function*() {
	yield all([
        takeLatest(gameTypes.GET_PLAYERS_TEAM1, getPlayersTeam1),
		takeLatest(gameTypes.GET_PLAYERS_TEAM2, getPlayersTeam2),
		takeLatest(gameTypes.UPDATE_PLAYER, updatePlayer),
		takeLatest(gameTypes.ADD_STATS_TEAM1, addStatsTeam1),
		takeLatest(gameTypes.ADD_STATS_TEAM2, addStatsTeam2),
	]);
}