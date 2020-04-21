import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {push} from 'connected-react-router'
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import GameCard from './GameCard';
import {
    guestGameActions,
}from '../../redux'

const enhance = compose(
    withStyles(styles),
    withRouter,
    connect(
        null,
        dispatch => ({
            goTo(path) {
                dispatch(push(path));
            },
            setCurrentGame(payload){
                dispatch(guestGameActions.setCurrentGame(payload))
            }
        })
    )
);

export default enhance(GameCard);