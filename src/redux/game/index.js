import { types } from "./types";


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
            return {...state};
        case types.RECEIVE_HOST_GAME:
            return {...state, channelStatus: 'on'};
        case types.RECEIVE_HOST_GAME_FAIL:
            return state;

        case types.REQUEST_STOP_CHANNEL:
            return { ...state, buttonLoader: true };
        case types.RECEIVE_STOP_CHREQUEST_STOP_CHANNEL:
            return { ...state, channelStatus: 'off', buttonLoader: true };

        default:
            return state;
    }
}

export default game;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';