import { types } from "./types";

const receiveJoinGame = (state, action) => {
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
    console.log(state.game.team1.idTeam === object.player.idTeam)
    if(state.game.team1.idTeam === object.player.idTeam)
        return {
            ...state,
            comments: [comment].concat(state.comments),
            statsTeam1: state.statsTeam1.map(s => s.idStats === object.idStats ? object : s),
            liveGame: {...state.liveGame, points1: state.liveGame.points1+points, time: comment.time }
        };
    else{
        return {
            ...state,
            comments: [comment].concat(state.comments),
            statsTeam2: state.statsTeam2.map(s => s.idStats === object.idStats ? object : s),
            liveGame: {...state.liveGame, points2: state.liveGame.points2+points, time: comment.time }
        };
    }  
};

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

        default:
            return state;
    }
}

export default guestGame;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';