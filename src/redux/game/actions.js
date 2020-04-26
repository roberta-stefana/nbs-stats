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

    updatePlayer: payload => ({
        type: types.UPDATE_PLAYER,
        payload
    }),
    requestUpdatePlayer: () => ({
        type: types.REQUEST_UPDATE_PLAYER,
    }),
    receiveUpdatePlayer: player => ({
        type: types.RECEIVE_UPDATE_PLAYER,
        player
    }),
    receiveUpdatePlayerFail: () => ({
        type: types.RECEIVE_UPDATE_PLAYER_FAIL,
    }),

    addStatsTeam1: payload => ({
        type: types.ADD_STATS_TEAM1,
        payload
    }),
    requestAddStatsTeam1: () => ({
        type: types.REQUEST_ADD_STATS_TEAM1,
    }),
    receiveAddStatsTeam1: stats => ({
        type: types.RECEIVE_ADD_STATS_TEAM1,
        stats
    }),
    receiveAddStatsTeam1Fail: () => ({
        type: types.RECEIVE_ADD_STATS_TEAM1_FAIL,
    }),

    addStatsTeam2: payload => ({
        type: types.ADD_STATS_TEAM2,
        payload
    }),
    requestAddStatsTeam2: () => ({
        type: types.REQUEST_ADD_STATS_TEAM2,
    }),
    receiveAddStatsTeam2: stats => ({
        type: types.RECEIVE_ADD_STATS_TEAM2,
        stats
    }),
    receiveAddStatsTeam2Fail: () => ({
        type: types.RECEIVE_ADD_STATS_TEAM2_FAIL,
    }),

    addGame: payload => ({
        type: types.ADD_GAME,
        payload
    }),
    requestAddGame: () => ({
        type: types.REQUEST_ADD_GAME,
    }),
    receiveAddGame: game => ({
        type: types.RECEIVE_ADD_GAME,
        game
    }),
    receiveAddGameFail: () => ({
        type: types.RECEIVE_ADD_GAME_FAIL,
    }),

    hostGame: payload => ({
        type: types.HOST_GAME,
        payload
    }),
    requestHostGame: () => ({
        type: types.REQUEST_HOST_GAME,
    }),
    receiveHostGame: game => ({
        type: types.RECEIVE_HOST_GAME,
        game
    }),
    receiveHostGameFail: status => ({
        type: types.RECEIVE_HOST_GAME_FAIL,
        status
    }),

    requestStopChannel: () => ({
        type: types.REQUEST_STOP_CHANNEL,
    }),
    receiveStopChannel: () => ({
        type: types.RECEIVE_STOP_CHANNEL,
    }),

    setBigLoader: bigLoader => ({
        type: types.SET_BIG_LOADER,
        bigLoader
    }),


    getStatsListTeam1: payload => ({
        type: types.GET_STATS_LIST_TEAM1,
        payload
    }),
    requestGetStatsListTeam1: () => ({
        type: types.REQUEST_GET_STATS_LIST_TEAM1,
    }),
    receiveGetStatsListTeam1: stats => ({
        type: types.RECEIVE_GET_STATS_LIST_TEAM1,
        stats
    }),
    receiveGetStatsListTeam1Fail: () => ({
        type: types.RECEIVE_GET_STATS_LIST_TEAM1_FAIL,
    }),


    getStatsListTeam2: payload => ({
        type: types.GET_STATS_LIST_TEAM2,
        payload
    }),
    requestGetStatsListTeam2: () => ({
        type: types.REQUEST_GET_STATS_LIST_TEAM2,
    }),
    receiveGetStatsListTeam2: stats => ({
        type: types.RECEIVE_GET_STATS_LIST_TEAM2,
        stats
    }),
    receiveGetStatsListTeam2Fail: () => ({
        type: types.RECEIVE_GET_STATS_LIST_TEAM2_FAIL,
    }),

    successfullRefresh: payload => ({
        type: types.SUCCESSFULL_REFRESH,
        payload
    }),

    sendStartGame: payload => ({
        type: types.SEND_START_GAME,
        payload
    }),
    sendEndGame: payload => ({
        type: types.SEND_END_GAME,
        payload
    }),
    
}