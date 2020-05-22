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
}