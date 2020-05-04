import { gameApi } from "../api";
import { call, put } from 'redux-saga/effects';
import {
    gameActions,
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

export { 
    getPlayersTeam1, 
    getPlayersTeam2, 
    updatePlayer, 
    addStatsTeam2, 
    addStatsTeam1, 
    getStatsListTeam1, 
    getStatsListTeam2, 
    addGame
}
