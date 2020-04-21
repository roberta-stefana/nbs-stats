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
    receiveJoinGame: game => ({
        type: types.RECEIVE_JOIN_GAME,
        game,
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

    setCurrentGame: currentGame => ({
        type: types.SET_CURRENT_GAME,
        currentGame,
    }),

    getCommentList: payload => ({
        type: types.GET_COMMENTS_LIST,
        payload,
      }),
    requestGetCommentList: () => ({
        type: types.REQUEST_GET_COMMENTS_LIST,
    }),
    receiveGetCommentList: comments => ({
        type: types.RECEIVE_GET_COMMENTS_LIST,
        comments,
    }),
    receiveGetCommentListFail: () => ({
        type: types.RECEIVE_GET_COMMENTS_LIST_FAIL,
    }),

}