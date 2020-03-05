export const selectors = {
    getPlayersTeam1: state => state.game.playersTeam1,
    getPlayersTeam2: state => state.game.playersTeam2,
    getListLoader: state => state.game.listLoader,
    getStatsTeam1: state => state.game.statsTeam1,
    getStatsTeam2: state => state.game.statsTeam2,
};