import {types} from './types';

export const actions = {
    getLiveGameList: payload => ({
        type: types.GET_LIVE_GAME_LIST,
        payload,
      }),
    requestGetLiveGameList: () => ({
        type: types.REQUEST_GET_LIVE_GAME_LIST,
    }),
    receiveGetLiveGameList: games => ({
        type: types.RECEIVE_GET_LIVE_GAME_LIST,
        games,
    }),
    receiveGetLiveGameListFail: () => ({
        type: types.RECEIVE_GET_LIVE_GAME_LIST_FAIL,
    }),

    joinGame: payload => ({
        type: types.JOIN_GAME,
        payload,
      }),
    requestJoinGame: () => ({
        type: types.REQUEST_JOIN_GAME,
    }),
    receiveJoinGame: payload => ({
        type: types.RECEIVE_JOIN_GAME,
        payload,
    }),
    receiveJoinGameFail: () => ({
        type: types.RECEIVE_JOIN_GAME_FAIL,
    }),

    leaveGame: payload => ({
        type: types.LEAVE_GAME,
        payload,
      }),
    requestLeaveGame: () => ({
        type: types.REQUEST_LEAVE_GAME,
    }),
    receiveLeaveGame: () => ({
        type: types.RECEIVE_LEAVE_GAME,
    }),
    receiveLeaveGameFail: () => ({
        type: types.RECEIVE_LEAVE_GAME_FAIL,
    }),

    stopChannel: () => ({
        type: types.STOP_CHANNEL,
    }),

    setGame: game => ({
        type: types.SET_GAME,
        game,
    }),

    setActiveUsers: users => ({
        type: types.SET_ACTIVE_USERS,
        users,
    }),

    getCommentList: payload => ({
        type: types.GET_COMMENT_LIST,
        payload,
      }),
    requestGetCommentList: () => ({
        type: types.REQUEST_GET_COMMENT_LIST,
    }),
    receiveGetCommentList: comments => ({
        type: types.RECEIVE_GET_COMMENT_LIST,
        comments,
    }),
    receiveGetCommentListFail: () => ({
        type: types.RECEIVE_GET_COMMENT_LIST_FAIL,
    }),

}