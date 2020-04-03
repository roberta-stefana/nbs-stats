import { types } from "./types";


const initialState = {
    channelStatus: 'off',
    currentGame: null,
    liveGames: [],
    listLoader: false,
    buttonLoader: false,
};

const guestGame = (state = initialState, action) => {
    switch(action.type) {
        case types.REQUEST_GET_LIVE_GAME_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_LIVE_GAME_LIST:
            return { ...state, teams: action.games, listLoader: false };
        case types.RECEIVE_GET_LIVE_GAME_LIST_FAIL:
            return { ...state, listLoader: false };

        case types.REQUEST_JOIN_GAME:
            return { ...state, buttonLoader: true };
        case types.RECEIVE_JOIN_GAME:
            return { ...state, currentGame: action.game, buttonLoader: false, channelStatus: 'on' };
        case types.RECEIVE_JOIN_GAME_FAIL:
            return { ...state, buttonLoader: false };

        case types.REQUEST_LEAVE_GAME:
            return { ...state, buttonLoader: true };
        case types.RECEIVE_LEAVE_GAME:
            return { ...state, buttonLoader: false };
        case types.RECEIVE_LEAVE_GAME_FAIL:
            return { ...state, buttonLoader: false };
        
        case types.RECEIVE_STOP_CHANNEL:
            return { ...state, channelStatus: 'off' };
            

        default:
            return state;
    }
}

export default guestGame;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';