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
            playersTeam1: statisticsSelectors. getPlayerList1(state),
            playersTeam2: statisticsSelectors. getPlayerList2(state)
        }),
        dispatch => ({
            getTeamList(payload) {
                dispatch(teamActions.getTeamList(payload))
            },
            getPlayeList1(payload) {
                dispatch(teamActions.getPlayerList1(payload))
            },
            getPlayeList2(payload) {
                dispatch(teamActions.getPlayerList2(payload))
            },

        }),
    )
);

export default enhance(Statistics);