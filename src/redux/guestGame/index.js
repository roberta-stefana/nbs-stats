import { types } from "./types";
import {receiveJoinGame, receiveScore, receiveStatsUpdate, receivePlayersTime} from './helperFunctions';

const initialState = {
    channelStatus: 'off',
    game: null,
    liveGame: null,
    statsTeam1:[],
    statsTeam2:[],
    liveGames: [],
    listLoader: false,
    buttonLoader: false,
    comments: [],
    bigLoader: false,
    endGameFlag: false,
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
            return receiveJoinGame(state, action);
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
        
        case types.SET_GAME:
            return { ...state, game: action.game  };
        case types.SET_ACTIVE_USERS:
            return { ...state, liveGame:{...state.liveGame, activeUsers: action.users} };
        
        case types.REQUEST_GET_COMMENT_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_COMMENT_LIST:
            return { ...state, listLoader: false, comments: action.comments };
        case types.RECEIVE_GET_COMMENT_LIST_FAIL:
            return { ...state, listLoader: false };
        
        case types.RECEIVE_START_GAME:
            return { ...state, comments: [action.comment].concat(state.comments)};
        case types.RECEIVE_END_GAME:
            return { ...state, endGameFlag: true};
        
        case types.RECEIVE_SCORE_1:
            return receiveScore(state, action, 1);
        case types.RECEIVE_SCORE_2:
            return receiveScore(state, action, 2);
        case types.RECEIVE_SCORE_3:
            return receiveScore(state, action, 3);

        case types.RECEIVE_MISS_1:
            return receiveStatsUpdate(state, action);
        case types.RECEIVE_MISS_2:
            return receiveStatsUpdate(state, action);
        case types.RECEIVE_MISS_3:
            return receiveStatsUpdate(state, action);

        case types.RECEIVE_STATS_UPDATE:
            return receiveStatsUpdate(state, action);
        case types.RECEIVE_PLAYERS_TIME:
            return receivePlayersTime(state, action);
        case types.RECEIVE_CHANGE_QUATER:
            return { ...state,  comments: [action.payload.comment].concat(state.comments), liveGame: {...state.liveGame, time: action.payload.comment.time, quater:action.payload.comment.quater }};
        default:
            return state;
    }
}

export default guestGame;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';