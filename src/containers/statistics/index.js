import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Statistics from './Statistics'
import {
    teamSelectors,
    teamActions,
    statisticsActions,
    statisticsSelectors,
}from '../../redux';


const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            teamList: teamSelectors.getTeamList(state),
            playersTeam1: statisticsSelectors.getPlayerList1(state),
            playersTeam2: statisticsSelectors.getPlayerList2(state),
            statsPlayer1: statisticsSelectors.getStatsPlayer1(state),
            statsPlayer2: statisticsSelectors.getStatsPlayer2(state),
        }),
        dispatch => ({
            getTeamList(payload) {
                dispatch(teamActions.getTeamList(payload))
            },
            getPlayerList1(payload) {
                dispatch(statisticsActions.getPlayerList1(payload))
            },
            getPlayerList2(payload) {
                dispatch(statisticsActions.getPlayerList2(payload))
            },
            getStatsPlayer1(payload) {
                dispatch(statisticsActions.getStatsPlayer1(payload))
            },
            getStatsPlayer2(payload) {
                dispatch(statisticsActions.getStatsPlayer2(payload))
            },

        }),
    )
);

export default enhance(Statistics);