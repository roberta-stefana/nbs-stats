import { types } from "./types";
import {successfullRefresh, receiveScore, receiveStatsUpdate, receivePlayersTime, receiveSubstitution} from './helperFunctions'

const initialState = {
    game: null,
    liveGame: null,
    playersTeam1: [],
    playersTeam2:[],
    listLoader: false,
    buttonLoader: false,
    statsTeam1:[],
    statsTeam2:[],
    channelStatus: '',
    bigLoader: false,
};

const game = (state = initialState, action) => {
    switch(action.type) {
        case types.REQUEST_GET_PLAYERS_TEAM1:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_PLAYERS_TEAM1:
            return { ...state, playersTeam1: action.players, listLoader: false };
        case types.RECEIVE_GET_PLAYERS_TEAM1_FAIL:
            return { ...state, listLoader: false };

        case types.REQUEST_GET_PLAYERS_TEAM2:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_PLAYERS_TEAM2:
            return { ...state, playersTeam2: action.players, listLoader: false };
        case types.RECEIVE_GET_PLAYERS_TEAM2_FAIL:
            return { ...state, listLoader: false };

        case types.REQUEST_UPDATE_PLAYER:
            return { ...state};
        case types.RECEIVE_UPDATE_PLAYER:
            return { ...state, playersTeam1: state.playersTeam1.map(obj => obj.idPlayer === action.player.idPlayer ? action.player : obj), playersTeam2: state.playersTeam2.map(obj => obj.idPlayer === action.player.idPlayer ? action.player : obj)}; 
        case types.RECEIVE_UPDATE_PLAYER_FAIL:
            return { ...state};

        case types.REQUEST_ADD_STATS_TEAM1:
            return { ...state };
        case types.RECEIVE_ADD_STATS_TEAM1:
            return { ...state, statsTeam1: action.stats.map(obj => ({...obj, selected: false})) };
        case types.RECEIVE_ADD_STATS_TEAM1_FAIL:
            return { ...state };
        
        case types.REQUEST_ADD_STATS_TEAM2:
            return { ...state };
        case types.RECEIVE_ADD_STATS_TEAM2:
            return { ...state, statsTeam2: action.stats.map(obj => ({...obj, selected: false})) };
        case types.RECEIVE_ADD_STATS_TEAM2_FAIL:
            return { ...state };

        case types.REQUEST_ADD_GAME:
            return { ...state, buttonLoader: true, };
        case types.RECEIVE_ADD_GAME:
            return { ...state, game: action.game, liveGame: action.game.liveGame, buttonLoader: true };
        case types.RECEIVE_ADD_GAME_FAIL:
            return { ...state, buttonLoader: false };
        
        case types.REQUEST_HOST_GAME:
            return {...state, bigLoader: true};
        case types.RECEIVE_HOST_GAME:
            return {...state, channelStatus: 'on', bigLoader: false, game: action.game, liveGame: action.game.liveGame};
        case types.RECEIVE_HOST_GAME_FAIL:
            return {...state, bigLoader: false};

        case types.REQUEST_STOP_CHANNEL:
            return { ...state, buttonLoader: true };
        case types.RECEIVE_STOP_CHANNEL:
            return { ...state, channelStatus: 'off', buttonLoader: true };

        case types.SET_BIG_LOADER:
            return { ...state, bigLoader: action.bigLoader };

        case types.REQUEST_GET_STATS_LIST_TEAM1:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_STATS_LIST_TEAM1:
            return { ...state, statsTeam1: action.stats, listLoader: false };
        case types.RECEIVE_GET_STATS_LIST_TEAM1_FAIL:
            return { ...state, listLoader: false };

        case types.REQUEST_GET_STATS_LIST_TEAM2:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_STATS_LIST_TEAM2:
            return { ...state, statsTeam2: action.stats, listLoader: false };
        case types.RECEIVE_GET_STATS_LIST_TEAM2_FAIL:
            return { ...state, listLoader: false };

        case types.SUCCESSFULL_REFRESH:
            return successfullRefresh(state, action);

        case types.RECEIVE_ADMIN_SCORE_1:
            return receiveScore(state, action, 1);
        case types.RECEIVE_ADMIN_SCORE_2:
            return receiveScore(state, action, 2);
        case types.RECEIVE_ADMIN_SCORE_3:
            return receiveScore(state, action, 3);

        case types.RECEIVE_ADMIN_MISS_1:
            return receiveStatsUpdate(state, action);
        case types.RECEIVE_ADMIN_MISS_2:
            return receiveStatsUpdate(state, action);
        case types.RECEIVE_ADMIN_MISS_3:
            return receiveStatsUpdate(state, action);

        case types.RECEIVE_ADMIN_STATS_UPDATE:
            return receiveStatsUpdate(state, action);
        case types.RECEIVE_ADMIN_PLAYERS_TIME:
            return receivePlayersTime(state, action);
        case types.RECEIVE_ADMIN_CHANGE_QUATER:
            return { ...state, liveGame: {...state.liveGame, time: '10:00', quater: action.payload.comment.quater}};
        case types.RECEIVE_ADMIN_SUBSTITUTION:
            return receiveSubstitution(state, action);

        default:
            return state;
    }
}

export default game;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';