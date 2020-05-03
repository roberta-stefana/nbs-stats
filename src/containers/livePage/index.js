import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import LivePage from './LivePage'
import {
    guestGameSelectors,
    guestGameActions
} from '../../redux';

const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            liveGameList : guestGameSelectors.getLiveGameList(state),
        }),
        dispatch => ({
            getLiveGameList(payload){
                    dispatch(guestGameActions.getLiveGameList())
            },
        }),
    )
);

export default enhance(LivePage);