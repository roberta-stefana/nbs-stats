import { types } from "./types";


const initialState = {
    channelStatus: 'off',
    currentGame: null,
    liveGames: [],
    listLoader: false,
    buttonLoader: false,
    comments: [],
    bigLoader: false,
};

const guestGame = (state = initialState, action) => {
    switch(action.type) {
        case types.REQUEST_GET_LIVE_GAME_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_LIVE_GAME_LIST:
            return { ...state, liveGames: action.games, listLoader: false };
        case types.RECEIVE_GET_LIVE_GAME_LIST_FAIL:
            return { ...state, listLoader: false };

        case types.REQUEST_JOIN_GAME:
            return { ...state, buttonLoader: true, bigLoader: true };
        case types.RECEIVE_JOIN_GAME:
            return { ...state, buttonLoader: false, channelStatus: 'on', bigLoader: false };
        case types.RECEIVE_JOIN_GAME_FAIL:
            return { ...state, buttonLoader: false, bigLoader: false };

        case types.REQUEST_LEAVE_GAME:
            return { ...state, buttonLoader: true };
        case types.RECEIVE_LEAVE_GAME:
            return { ...state, buttonLoader: false, channelStatus: 'off'};
        case types.RECEIVE_LEAVE_GAME_FAIL:
            return { ...state, buttonLoader: false };
        
        case types.RECEIVE_STOP_CHANNEL:
            return { ...state, channelStatus: 'off' };
        
        case types.SET_CURRENT_GAME:
            return { ...state, currentGame: action.currentGame  };
        
        case types.REQUEST_GET_COMMENT_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_COMMENT_LIST:
            return { ...state, listLoader: false, comments: action.comments };
        case types.RECEIVE_GET_COMMENT_LIST_FAIL:
            return { ...state, listLoader: false };
        

        default:
            return state;
    }
}

export default guestGame;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';