import { types } from "./types";

// ---- Helpers ----
// just in case we need some more complex state processing functions, add them here

// ---- REDUCER ----
const initialState = {
    currentUser: {},
    users: [],
    loginFail: false,
    registerSuccessMessage: false,
    listLoader: false,
    buttonLoader: false,
    dialogLoader: false,
    bigLoader: false
};

const user = (state = initialState, action) => {
    switch(action.type) {
        case types.REQUEST_LOGIN:
            return { ...state, buttonLoader: true, loginFail: false };
        case types.RECEIVE_LOGIN:
            return { ...state, buttonLoader: false, loginFail: false, registerSuccessMessage: false };
        case types.RECEIVE_LOGIN_FAIL:
            return { ...state, buttonLoader: false, loginFail: true };

        case types.SET_LOGIN_FAIL:
            return { ...state, buttonLoader: false, loginFail: false };

        case types.REQUEST_GET_USER:
            return state;
        case types.RECEIVE_GET_USER:
            return state;
        case types.RECEIVE_GET_USER_FAIL:
            return state;

        case types.REQUEST_GET_CURRENT_USER:
            return state;
        case types.RECEIVE_GET_CURRENT_USER:
            return { ...state, currentUser: action.user };
        case types.RECEIVE_GET_CURRENT_USER_FAIL:
            return state;

        // TODO: use some kind of loader here, see REQUEST_LOGIN
        case types.REQUEST_LOGOUT:
            return state;
        case types.RECEIVE_LOGOUT:
            return state;
        case types.RECEIVE_LOGOUT_FAIL:
            return state;

        case types.REQUEST_ADD_USER:
            return { ...state, buttonLoader: true };
        case types.RECEIVE_ADD_USER:
            return { ...state, buttonLoader: false, registerSuccessMessage: true };
        case types.RECEIVE_ADD_USER_FAIL:
            return { ...state, buttonLoader: false };

        case types.REQUEST_CHECK_TOKEN:
            return { ...state, bigLoader: true };
        case types.RECEIVE_CHECK_TOKEN:
            return { ...state, bigLoader: false };
        case types.RECEIVE_CHECK_TOKEN_FAIL:
            return { ...state, bigLoader: false };

        case types.REQUEST_UPDATE_USER:
            return { ...state, dialogLoader: true };
        case types.RECEIVE_UPDATE_USER:
            return { ...state, dialogLoader: false };
        case types.RECEIVE_UPDATE_USER_FAIL:
            return { ...state, dialogLoader: false };

        case types.REQUEST_DELETE_USER:
            return { ...state, dialogLoader: true };
        case types.RECEIVE_DELETE_USER:
            return { ...state, dialogLoader: false };
        case types.RECEIVE_DELETE_USER_FAIL:
            return { ...state, dialogLoader: false };

        case types.REQUEST_GET_USER_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_USER_LIST:
            return { ...state, users: action.users, listLoader: false };
        case types.RECEIVE_GET_USER_LIST_FAIL:
            return { ...state, listLoader: false };

        default:
            return state;
    }
};

export default user;

// forward exports
export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';
