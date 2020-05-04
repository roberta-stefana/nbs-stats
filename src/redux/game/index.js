import { types } from "./types";

const successfullRefresh = (state, action) => {
    const {game, stats} = action.payload;
    const idTeam1 = game.team1.idTeam;
    const idTeam2 = game.team2.idTeam;

    return {
        ...state, game: game, liveGame: game.liveGame, buttonLoader: false,
        statsTeam1: stats.filter(obj => obj.player.idTeam === idTeam1),
        statsTeam2: stats.filter(obj => obj.player.idTeam === idTeam2),
    };
};

const receiveScore = (state, action, points) => {
    const {comment, object} = action.payload;
    if(state.game.team1.idTeam === object.player.idTeam)
        return {
            ...state,
            statsTeam1: state.statsTeam1.map(s => s.idStats === object.idStats ? object : s),
            liveGame: {...state.liveGame, points1: state.liveGame.points1+points, time: comment.time }
        };
    else{
        return {
            ...state,
            statsTeam2: state.statsTeam2.map(s => s.idStats === object.idStats ? object : s),
            liveGame: {...state.liveGame, points2: state.liveGame.points2+points, time: comment.time }
        };
    }  
};

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
    

        default:
            return state;
    }
}

export default game;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';