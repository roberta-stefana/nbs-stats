import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import {push} from 'connected-react-router';
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
        game: gameSelectors.getGame(state),
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
        addStatsTeam1(payload){
            dispatch(gameActions.addStatsTeam1(payload))
        },
        addStatsTeam2(payload){
            dispatch(gameActions.addStatsTeam2(payload))
        },
        addGame(payload){
            dispatch(gameActions.addGame(payload))
        },
        updatePlayer(payload){
            dispatch(gameActions.updatePlayer(payload))
        },
        goToGame(){
            dispatch(push('/game'))
        },
        hostGame(payload){
            dispatch(gameActions.hostGame(payload))
        },
        goTo(path){
            dispatch(push(path))
        },
    }),
)
);

export default enhance(PreGame);