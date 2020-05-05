export const receiveJoinGame = (state, action) => {
    const {game, stats} = action.payload;
    const idTeam1 = game.team1.idTeam;
    const idTeam2 = game.team2.idTeam;

    return {
        ...state, game: game, liveGame: game.liveGame, buttonLoader: false,
        statsTeam1: stats.filter(obj => obj.player.idTeam === idTeam1),
        statsTeam2: stats.filter(obj => obj.player.idTeam === idTeam2),
    };
};

export const receiveScore = (state, action, points) => {
    const {comment, object} = action.payload;
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


export const receiveStatsUpdate = (state, action) => {
    const {comment, object} = action.payload;
    if(state.game.team1.idTeam === object.player.idTeam)
        return {
            ...state,
            comments: [comment].concat(state.comments),
            statsTeam1: state.statsTeam1.map(s => s.idStats === object.idStats ? object : s),
            liveGame: {...state.liveGame, time: comment.time }
        };
    else{
        return {
            ...state,
            comments: [comment].concat(state.comments),
            statsTeam2: state.statsTeam2.map(s => s.idStats === object.idStats ? object : s),
            liveGame: {...state.liveGame, time: comment.time }
        };
    }  
};
