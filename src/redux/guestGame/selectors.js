export const selectors = {
    getLiveGameList: state => state.guestGame.liveGames,
    getResultGameList: state => state.guestGame.resultGames,
    getListLoader: state => state.guestGame.listLoader,
    getButtonLoader: state => state.guestGame.buttonLoader,
    getGame: state => state.guestGame.game,
    getLiveGame: state => state.guestGame.liveGame,
    getChannelStatus: state => state.guestGame.channelStatus,
    getCommentList: state => state.guestGame.comments,
    getBigLoader: state => state.guestGame.bigLoader,
    getStatsTeam1: state => state.guestGame.statsTeam1,
    getStatsTeam2: state => state.guestGame.statsTeam2,
    getEndGameFlag: state => state.guestGame.endGameFlag
};