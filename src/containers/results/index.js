import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Results from './Results'
import {
    guestGameSelectors,
    guestGameActions
} from '../../redux';

const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            resultList : guestGameSelectors.getResultGameList(state),
        }),
        dispatch => ({
            getResultList(payload){
                console.log("index")
                dispatch(guestGameActions.getLiveGameList())
            },
        }),
    )
);

export default enhance(Results);