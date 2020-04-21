export const selectors = {
    getLiveGameList: state => state.guestGame.liveGames,
    getListLoader: state => state.guestGame.listLoader,
    getButtonLoader: state => state.guestGame.buttonLoader,
    getCurrentGame: state => state.guestGame.currentGame,
    getChannelStatus: state => state.guestGame.channelStatus,
    getCommentList: state => state.guestGame.comments,
    getBigLoader: state => state.guestGame.bigLoader,
};