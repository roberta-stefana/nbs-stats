import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import GuestGame from './GuestGame';
import {
    guestGameActions,
    guestGameSelectors
} from '../../redux';

const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            currentGame: guestGameSelectors.getCurrentGame(state),
        }),
        dispatch => ({
            joinGame(payload){
                dispatch(guestGameActions.joinGame(payload))
            },
        }),
    )
);

export default enhance(GuestGame);