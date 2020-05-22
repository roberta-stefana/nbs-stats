import { types } from "./types";


const initialState = {
    playersTeam1: [],
    playersTeam2: [],
    listLoader: false,
};

const statistics = (state = initialState, action) => {
    switch(action.type) {
        case types.REQUEST_GET_PLAYER_LIST_1:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_PLAYER_LIST1:
            return { ...state, playersTeam1: action.players, listLoader: false };
        case types.RECEIVE_GET_PLAYER_LIST1_FAIL:
            return { ...state, listLoader: false };
        
        case types.REQUEST_GET_PLAYER_LIST_2:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_PLAYER_LIST2:
            return { ...state, playersTeam2: action.players, listLoader: false };
        case types.RECEIVE_GET_PLAYER_LIST2_FAIL:
            return { ...state, listLoader: false };

        default:
            return state;
    }
}

export default statistics;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';