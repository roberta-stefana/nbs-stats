import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import PreGame from './PreGame'
import {
    teamSelectors,
    teamActions,
    gameSelectors,
    gameActions,
} from '../../redux';

const enhance = compose(
  withStyles(styles),
  connect(
    state => ({
        teamList: teamSelectors.getTeamList(state),
        playersTeam1: gameSelectors.getPlayersTeam1(state),
        playersTeam2: gameSelectors.getPlayersTeam2(state),
    }),
    dispatch => ({
        getTeamList(payload) {
            dispatch(teamActions.getTeamList(payload))
        },
        getPlayersTeam1(payload){
            dispatch(gameActions.getPlayersTeam1(payload))
        },
        getPlayersTeam2(payload){
            dispatch(gameActions.getPlayersTeam2(payload))
        },
    }),
)
);

export default enhance(PreGame);