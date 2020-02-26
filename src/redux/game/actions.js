import {types} from './types';

export const actions = {
    getPlayersTeam1: payload => ({
        type: types.GET_PLAYERS_TEAM1,
        payload,
      }),
    requestGetPlayersTeam1: () => ({
        type: types.REQUEST_GET_PLAYERS_TEAM1,
    }),
    receiveGetPlayersTeam1: players => ({
        type: types.RECEIVE_GET_PLAYERS_TEAM1,
        players,
    }),
    receiveGetPlayersTeam1Fail: () => ({
        type: types.RECEIVE_GET_PLAYERS_TEAM1_FAIL,
    }),

    getPlayersTeam2: payload => ({
        type: types.GET_PLAYERS_TEAM2,
        payload,
      }),
    requestGetPlayersTeam2: () => ({
        type: types.REQUEST_GET_PLAYERS_TEAM2,
    }),
    receiveGetPlayersTeam2: players => ({
        type: types.RECEIVE_GET_PLAYERS_TEAM2,
        players,
    }),
    receiveGetPlayersTeam2Fail: () => ({
        type: types.RECEIVE_GET_PLAYERS_TEAM1_FAIL,
    }),
}