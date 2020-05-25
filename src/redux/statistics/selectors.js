export const selectors = {
    getPlayerList1: state => state.statistics.playersTeam1,
    getPlayerList2: state => state.statistics.playersTeam2,
    getStatsPlayer1: state => state.statistics.statsPlayer1,
    getStatsPlayer2: state => state.statistics.statsPlayer2,
    getListLoader: state => state.statistics.listLoader,
};