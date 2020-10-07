import { types } from "./types";

export const receiveStatsList = (state, action) => {
    const {stats} = action;
    let stats1=[];
    let stats2=[];
    stats.map(s=>{
        if(state.team1.idTeam === s.player.idTeam)
            stats1.push(s);
        else
            stats2.push(s); 
    })
    return{
        ...state, statsTeam1: stats1, statsTeam2: stats2, listLoader: false
    }
};

const initialState = {
    playersTeam1: [],
    playersTeam2: [],
    statsPlayer1: [],
    statsPlayer2: [],
    listLoader: false,
    statsGame: [],
    statsTeam1: [],
    statsTeam2: [],
    team1: null,
    team2: null,
};

const statistics = (state = initialState, action) => {
    switch(action.type) {
        case types.REQUEST_GET_PLAYER_LIST_1:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_PLAYER_LIST_1:
            return { ...state, playersTeam1: action.players, listLoader: false };
        case types.RECEIVE_GET_PLAYER_LIST1_FAIL:
            return { ...state, listLoader: false };
        
        case types.REQUEST_GET_PLAYER_LIST_2:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_PLAYER_LIST_2:
            return { ...state, playersTeam2: action.players, listLoader: false };
        case types.RECEIVE_GET_PLAYER_LIST2_FAIL:
            return { ...state, listLoader: false };

        case types.REQUEST_GET_STATS_PLAYER_1:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_STATS_PLAYER_1:
            return { ...state, statsPlayer1: action.stats, listLoader: false };
        case types.RECEIVE_GET_STATS_PLAYER1_FAIL:
            return { ...state, listLoader: false };

        case types.REQUEST_GET_STATS_PLAYER_2:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_STATS_PLAYER_2:
            return { ...state, statsPlayer2: action.stats, listLoader: false };
        case types.RECEIVE_GET_STATS_PLAYER2_FAIL:
            return { ...state, listLoader: false };


        case types.REQUEST_GET_STATS_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_STATS_LIST:
            return receiveStatsList(state, action);
        case types.RECEIVE_GET_STATS_LIST_FAIL:
            return { ...state, listLoader: false };

        case types.SET_TEAM1:
            return { ...state, team1: action.payload };
        case types.SET_TEAM2:
            return { ...state, team2: action.payload };

        default:
            return state;
    }
}

export default statistics;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';