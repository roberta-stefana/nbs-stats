import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import PlayByPlay from './PlayByPlay'
import {
    gameSelectors,
    gameActions,
    guestGameSelectors,
} from '../../redux';

const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            currentGame: guestGameSelectors.getCurrentGame(state),
        }),
        dispatch => ({
            updatePlayer(payload){
                    dispatch(gameActions.updatePlayer(payload))
            },
        }),
    )
);

export default enhance(PlayByPlay);