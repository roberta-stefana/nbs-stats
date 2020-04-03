import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import PlayByPlay from './PlayByPlay'
import {
    gameSelectors,
    gameActions,
} from '../../redux';

const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            playersTeam1: gameSelectors.getPlayersTeam1(state),
        }),
        dispatch => ({
            updatePlayer(payload){
                    dispatch(gameActions.updatePlayer(payload))
            },
        }),
    )
);

export default enhance(PlayByPlay);