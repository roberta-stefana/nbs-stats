import {types} from './types';

export const actions = {
    getTeamList: payload => ({
        type: types.GET_TEAM_LIST,
        payload,
      }),
    requestGetTeamList: () => ({
        type: types.REQUEST_GET_TEAM_LIST,
    }),
    receiveGetTeamList: teams => ({
        type: types.RECEIVE_GET_TEAM_LIST,
        teams,
    }),
    receiveGetTeamListFail: () => ({
        type: types.RECEIVE_GET_TEAM_LIST_FAIL,
    }),
}