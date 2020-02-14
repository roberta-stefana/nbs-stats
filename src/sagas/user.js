import { call, put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { userApi } from '../api';

import {
    userActions,
    userTypes,
} from '../redux';

const login = function* (action) {
    yield put(userActions.requestLogin());
    try {
        const response = yield call(userApi.login, action.payload);
        console.log(response);
        localStorage.setItem('access_token', response.data);
        //yield put(userActions.getCurrentUser()); // pending server implementations
        yield put(userActions.receiveLogin());
        yield put(push('/pregame'));
    } catch(e) {
        yield put(userActions.receiveLoginFail(e.response));
    }
};

const addUser = function* (action) {
    yield put(userActions.requestAddUser());
    try {
        const response = yield call(userApi.addUser, action.payload);
        yield put(userActions.receiveAddUser(response.data.data));
        //redirected to Login Page
        yield put(push('/login'));
    } catch (e) {
        yield put(userActions.receiveAddUserFail());
    }
};

const updateUser = function* (action) {
    yield put(userActions.requestUpdateUser());

    try {
        const response = yield call(userApi.updateUser, action.payload);
        yield put(userActions.receiveUpdateUser(response.data.data));
    } catch (e) {
        yield put(userActions.receiveUpdateUserFail());
    }
};

const deleteUser = function* (action) {
    yield put(userActions.requestDeleteUser());

    try {
        const response = yield call(userApi.deleteUser, action.id);
        yield put(userActions.receiveDeleteUser(action.id));
    } catch (e) {
        yield put(userActions.receiveDeleteUserFail());
    }
};

const getUser = function* (action) {
    yield put(userActions.requestGetUser());

    try {
        const response = yield call(userApi.getUser, action.payload);
        yield put(userActions.receiveGetUser(response.data.data));
    } catch (e) {
        yield put(userActions.receiveGetUserListFail());
    }
};

const getCurrentUser = function* (action) {
    yield put(userActions.requestGetCurrentUser());

    try {
        const response = yield call(userApi.getCurrentUser, action.payload);
        yield put(userActions.receiveGetCurrentUser(response.data.data));
    } catch (e) {
        yield put(userActions.receiveGetCurrentUserListFail());
    }
};

const getUserList = function* (action) {
    yield put(userActions.requestGetUserList());

    try {
        const response = yield call(userApi.getUserList, action.payload);
        yield put(userActions.receiveGetUserList(response.data.data));
    } catch (e) {
        yield put(userActions.receiveGetUserListFail());
    }
};

const logout = function* (action) {
    // TODO: implement logout call to server
    yield put(userActions.requestLogout());
    localStorage.removeItem('access_token');
    yield put(userActions.receiveLogout());
    yield put(push('/login'));
};

export default function* () {
    yield all([
        takeLatest(userTypes.LOGIN, login),
        takeLatest(userTypes.ADD_USER, addUser),
        takeLatest(userTypes.UPDATE_USER, updateUser),
        takeLatest(userTypes.DELETE_USER, deleteUser),
        takeLatest(userTypes.GET_USER, getUser),
        takeLatest(userTypes.GET_CURRENT_USER, getCurrentUser),
        takeLatest(userTypes.GET_USER_LIST, getUserList),
        takeLatest(userTypes.LOGOUT, logout),
    ]);
}