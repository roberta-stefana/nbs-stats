import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import GuestGame from './GuestGame';
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

        }),
        dispatch => ({
            updatePlayer(payload){
                    dispatch(gameActions.updatePlayer(payload))
            },
        }),
    )
);

export default enhance(GuestGame);