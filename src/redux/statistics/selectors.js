export const selectors = {
    getPlayerList1: state => state.statistics.playersTeam1,
    getPlayerList2: state => state.statistics.playersTeam2,
    getStatsPlayer1: state => state.statistics.statsPlayer1,
    getStatsPlayer2: state => state.statistics.statsPlayer2,
    getListLoader: state => state.statistics.listLoader,
    getStatsTeam1: state => state.statistics.statsTeam1,
    getStatsTeam2: state => state.statistics.statsTeam2,
    getTeam1: state => state.statistics.team1,
    getTeam2: state => state.statistics.team2,
};