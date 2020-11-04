import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import GuestGame from './GuestGame';
import {push} from 'connected-react-router';
import {
    guestGameActions,
    guestGameSelectors
} from '../../redux';

const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            game: guestGameSelectors.getGame(state),
            liveGame: guestGameSelectors.getLiveGame(state),
            bigLoader: guestGameSelectors.getBigLoader(state),
            statsTeam1: guestGameSelectors.getStatsTeam1(state),
            statsTeam2: guestGameSelectors.getStatsTeam2(state),
            commentList: guestGameSelectors.getCommentList(state),
            endGameFlag: guestGameSelectors.getEndGameFlag(state),
        }),
        dispatch => ({
            requestLeaveGame(){
                dispatch(guestGameActions.requestLeaveGame())
            },
            goTo(path){
                dispatch(push(path))
            },
            setEndGameFlag(){
                dispatch(guestGameActions.setEndGameFlag())
            },
        }),
    )

);

export default enhance(GuestGame);