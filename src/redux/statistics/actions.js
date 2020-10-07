import {types} from './types';

export const actions = {
    getPlayerList1: payload => ({
        type: types.GET_PLAYER_LIST_1,
        payload,
      }),
    requestGetPlayerList1: () => ({
        type: types.REQUEST_GET_PLAYER_LIST_1,
    }),
    receiveGetPlayerList1: players => ({
        type: types.RECEIVE_GET_PLAYER_LIST_1,
        players,
    }),
    receiveGetPlayerList1Fail: () => ({
        type: types.RECEIVE_GET_PLAYER_LIST_1_FAIL,
    }),

    getPlayerList2: payload => ({
        type: types.GET_PLAYER_LIST_2,
        payload,
      }),
    requestGetPlayerList2: () => ({
        type: types.REQUEST_GET_PLAYER_LIST_2,
    }),
    receiveGetPlayerList2: players => ({
        type: types.RECEIVE_GET_PLAYER_LIST_2,
        players,
    }),
    receiveGetPlayerList2Fail: () => ({
        type: types.RECEIVE_GET_PLAYER_LIST_2_FAIL,
    }),

    getStatsPlayer1: payload => ({
        type: types.GET_STATS_PLAYER_1,
        payload,
      }),
    requestGetStatsPlayer1: () => ({
        type: types.REQUEST_GET_STATS_PLAYER_1,
    }),
    receiveGetStatsPlayer1: stats => ({
        type: types.RECEIVE_GET_STATS_PLAYER_1,
        stats,
    }),
    receiveGetStatsPlayer1Fail: () => ({
        type: types.RECEIVE_GET_STATS_PLAYER_1_FAIL,
    }),

    getStatsPlayer2: payload => ({
        type: types.GET_STATS_PLAYER_2,
        payload,
      }),
    requestGetStatsPlayer2: () => ({
        type: types.REQUEST_GET_STATS_PLAYER_2,
    }),
    receiveGetStatsPlayer2: stats => ({
        type: types.RECEIVE_GET_STATS_PLAYER_2,
        stats,
    }),
    receiveGetStatsPlayer2Fail: () => ({
        type: types.RECEIVE_GET_STATS_PLAYER_2_FAIL,
    }),

    setTeam1: payload => ({
        type: types.SET_TEAM1,
        payload
    }),
    setTeam2: payload => ({
        type: types.SET_TEAM2,
        payload
    }),

    getStatsList: payload => ({
        type: types.GET_STATS_LIST,
        payload,
      }),
    requestGetStatsList: () => ({
        type: types.REQUEST_GET_STATS_LIST,
    }),
    receiveGetStatsList: stats => ({
        type: types.RECEIVE_GET_STATS_LIST,
        stats,
    }),
    receiveGetStatsListFail: () => ({
        type: types.RECEIVE_GET_STATS_LIST_FAIL,
    }),

}