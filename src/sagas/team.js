import { call, put, takeLatest, all } from 'redux-saga/effects';
import { teamApi } from "../api";

import {
  	teamActions,
	teamTypes,
} from "../redux";

const getTeamList = function*(action) {
	yield put(teamActions.requestGetTeamList());

	try {
        const response = yield call(teamApi.getTeamList); 
		yield put(teamActions.receiveGetTeamList(response.data));
	} catch (e) {
		yield put(teamActions.receiveGetTeamListFail());
	}
};

export default function*() {
	yield all([
		takeLatest(teamTypes.GET_TEAM_LIST, getTeamList)
	]);
}