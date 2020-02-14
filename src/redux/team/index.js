import { types } from "./types";


const initialState = {
    teams: [],
    listLoader: false,
};

const team = (state = initialState, action) => {
    switch(action.type) {
        case types.REQUEST_GET_TEAM_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_TEAM_LIST:
            return { ...state, teams: action.teams, listLoader: false };
        case types.RECEIVE_GET_TEAM_LIST_FAIL:
            return { ...state, listLoader: false };

        default:
            return state;
    }
}

export default team;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';