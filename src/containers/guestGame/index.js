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
            game: guestGameSelectors.getGame(state),
            bigLoader: guestGameSelectors.getBigLoader(state),
        }),
        dispatch => ({
            joinGame(payload){
                dispatch(guestGameActions.joinGame(payload))
            },
            requestLeaveGame(){
                dispatch(guestGameActions.requestLeaveGame())
            }
        }),
    )
);

export default enhance(GuestGame);