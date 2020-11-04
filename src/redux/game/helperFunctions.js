export const receiveHostGame = (state, action) => {
    const {game, stats} = action.payload;
    const idTeam1 = game.team1.idTeam;
    const idTeam2 = game.team2.idTeam;

    return {
        ...state, game: game, liveGame: game.liveGame, buttonLoader: false, channelStatus: 'on',
        statsTeam1: stats.filter(obj => obj.player.idTeam === idTeam1),
        statsTeam2: stats.filter(obj => obj.player.idTeam === idTeam2),
    };
};

export const receiveScore = (state, action, points) => {
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

export const receiveStatsUpdate = (state, action) => {
    const {comment, object} = action.payload;
    if(state.game.team1.idTeam === object.player.idTeam)
        return {
            ...state,
            statsTeam1: state.statsTeam1.map(s => s.idStats === object.idStats ? object : s),
            liveGame: {...state.liveGame, time: comment.time }
        };
    else{
        return {
            ...state,
            statsTeam2: state.statsTeam2.map(s => s.idStats === object.idStats ? object : s),
            liveGame: {...state.liveGame, time: comment.time }
        };
    }  
};

export const receivePlayersTime = (state, action) => {
    const {object, time} = action.payload;
    let stats1 = state.statsTeam1;
    let stats2 = state.statsTeam2;
    object.map(s=>{
        if(state.game.team1.idTeam === s.player.idTeam)
            stats1 = stats1.map(obj => obj.idStats === s.idStats ? s : obj);
        else
            stats2 = stats2.map(obj => obj.idStats === s.idStats ? s : obj); 
    })
    return{
        ...state, statsTeam1: stats1, statsTeam2: stats2, liveGame: {...state.liveGame, time: time }
    }
};

export const receiveSubstitution = (state, action) => { 
    // object: 1,2,3 --> 1 out, 2 in, 3 team 
    const {comment, object} = action.payload;
    const elements = object.split(',');
    if(state.game.team1.idTeam === parseInt(elements[2]))
        return {
            ...state,
            statsTeam1: state.statsTeam1.map(s => s.player.idPlayer === parseInt(elements[0]) ? {...s, player:{...s.player, onCourt:false}} : 
            s.player.idPlayer === parseInt(elements[1]) ? {...s, player:{...s.player, onCourt:true}} : s),

        };
    else{
        return {
            ...state,
            statsTeam2: state.statsTeam2.map(s => s.player.idPlayer === parseInt(elements[0]) ? {...s, player:{...s.player, onCourt:false}} : 
            s.player.idPlayer === parseInt(elements[1]) ? {...s, player:{...s.player, onCourt:true}} : s),
        };
    }  
};