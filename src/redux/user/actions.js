import { types } from "./types";

export const actions = {
    login: payload => ({
        type: types.LOGIN,
        payload,
    }),
    requestLogin: () => ({
        type: types.REQUEST_LOGIN,
    }),
    receiveLogin: () => ({
        type: types.RECEIVE_LOGIN,
    }),
    receiveLoginFail: status => ({
        type: types.RECEIVE_LOGIN_FAIL,
        status
    }),

    addUser: payload => ({
        type: types.ADD_USER,
        payload
    }),
    requestAddUser: () => ({
        type: types.REQUEST_ADD_USER,
    }),
    receiveAddUser: user => ({
        type: types.RECEIVE_ADD_USER,
        user
    }),
    receiveAddUserFail: () => ({
        type: types.RECEIVE_ADD_USER_FAIL,
    }),

    checkToken: () => ({
        type: types.CHECK_TOKEN,
    }),
    requestCheckToken: () => ({
        type: types.REQUEST_CHECK_TOKEN,
    }),
    receiveCheckToken: user => ({
        type: types.RECEIVE_CHECK_TOKEN,
        user
    }),
    receiveCheckTokenFail: () => ({
        type: types.RECEIVE_CHECK_TOKEN_FAIL,
    }),

    updateUser: payload => ({
        type: types.UPDATE_USER,
        payload
    }),
    requestUpdateUser: () => ({
        type: types.REQUEST_UPDATE_USER,
    }),
    receiveUpdateUser: user => ({
        type: types.RECEIVE_UPDATE_USER,
        user
    }),
    receiveUpdateUserFail: () => ({
        type: types.RECEIVE_UPDATE_USER_FAIL,
    }),

    deleteUser: id => ({
        type: types.DELETE_USER,
        id,
    }),
    requestDeleteUser: () => ({
        type: types.REQUEST_DELETE_USER,
    }),
    receiveDeleteUser: id => ({
        type: types.RECEIVE_DELETE_USER,
        id
    }),
    receiveDeleteUserFail: () => ({
        type: types.RECEIVE_DELETE_USER_FAIL,
    }),

    getCurrentUser: payload => ({
        type: types.GET_CURRENT_USER,
        payload,
    }),
    requestGetCurrentUser: () => ({
        type: types.REQUEST_GET_CURRENT_USER,
    }),
    receiveGetCurrentUser: user => ({
        type: types.RECEIVE_GET_CURRENT_USER,
        user
    }),
    receiveGetCurrentUserFail: () => ({
        type: types.RECEIVE_GET_CURRENT_USER_FAIL,
    }),

    getUser: payload => ({
        type: types.GET_USER,
        payload,
    }),
    requestGetUser: () => ({
        type: types.REQUEST_GET_USER,
    }),
    receiveGetUser: user => ({
        type: types.RECEIVE_GET_USER,
        user
    }),

    getUserList: payload => ({
        type: types.GET_USER_LIST,
        payload,
    }),
    requestGetUserList: () => ({
        type: types.REQUEST_GET_USER_LIST,
    }),
    receiveGetUserList: users => ({
        type: types.RECEIVE_GET_USER_LIST,
        users,
    }),
    receiveGetUserListFail: () => ({
        type: types.RECEIVE_GET_USER_LIST_FAIL,
    }),

    logout: payload => ({
        type: types.LOGOUT,
        payload
    }),
    requestLogout: () => ({
        type: types.REQUEST_LOGOUT,
    }),
    receiveLogout: () => ({
        type: types.RECEIVE_LOGOUT,
    }),
    receiveLogoutFail: () => ({
        type: types.RECEIVE_LOGOUT_FAIL,
    }),
};