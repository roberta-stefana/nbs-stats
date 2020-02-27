import { types } from "./types";


const initialState = {
    playersTeam1: [],
    playersTeam2:[],
    listLoader: false,
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

        default:
            return state;
    }
}

export default game;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';