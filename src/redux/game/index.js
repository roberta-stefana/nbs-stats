import { types } from "./types";


const initialState = {
    game: null,
    playersTeam1: [],
    playersTeam2:[],
    listLoader: false,
    buttonLoader: false,
    statsTeam1:[],
    statsTeam2:[],
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
            return { ...state, statsTeam1: state.statsTeam1.concat(action.stats) };
        case types.RECEIVE_ADD_STATS_TEAM1_FAIL:
            return { ...state };
        
        case types.REQUEST_ADD_STATS_TEAM2:
            return { ...state };
        case types.RECEIVE_ADD_STATS_TEAM2:
            return { ...state, statsTeam2: state.statsTeam2.concat(action.stats) };
        case types.RECEIVE_ADD_STATS_TEAM2_FAIL:
            return { ...state };

        case types.REQUEST_ADD_GAME:
            return { ...state, buttonLoader: true, };
        case types.RECEIVE_ADD_GAME:
            return { ...state, game: action.game, buttonLoader: true };
        case types.RECEIVE_ADD_GAME_FAIL:
            return { ...state, buttonLoader: false };


        default:
            return state;
    }
}

export default game;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';