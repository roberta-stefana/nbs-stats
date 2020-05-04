import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Game from './Game';
import {
    gameSelectors,
    gameActions,
} from '../../redux';

const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            playersTeam1: gameSelectors.getPlayersTeam1(state),
            playersTeam2: gameSelectors.getPlayersTeam2(state),
			game: gameSelectors.getGame(state),
			liveGame: gameSelectors.getLiveGame(state),
			statsTeam1: gameSelectors.getStatsTeam1(state),
            statsTeam2: gameSelectors.getStatsTeam2(state),
            bigLoader: gameSelectors.getBigLoader(state),

        }),
        dispatch => ({
            updatePlayer(payload){
                    dispatch(gameActions.updatePlayer(payload))
            },
            hostGame(payload){
                dispatch(gameActions.hostGame(payload))
            },
            requestStopChannel(){
                dispatch(gameActions.requestStopChannel())
            },
            setBigLoader(payload){
                dispatch(gameActions.setBigLoader(payload))
            },
            getStatsListTeam1(payload){
                dispatch(gameActions.getStatsListTeam1(payload))
            },
            sendStartGame(payload){
                dispatch(gameActions.sendStartGame(payload))
            },
            sendEndGame(payload){
                dispatch(gameActions.sendEndGame(payload))
            },
            sendScore1(payload){
                dispatch(gameActions.sendScore1(payload))
            },
            sendScore2(payload){
                dispatch(gameActions.sendScore3(payload))
            },
            sendScore3(payload){
                dispatch(gameActions.sendScore3(payload))
            },
            sendMiss1(payload){
                dispatch(gameActions.sendMiss1(payload))
            },
            sendMiss2(payload){
                dispatch(gameActions.sendMiss3(payload))
            },
            sendMiss3(payload){
                dispatch(gameActions.sendMiss3(payload))
            },

        }),
    )
);

export default enhance(Game);