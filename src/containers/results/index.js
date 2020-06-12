import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Results from './Results'
import{
    guestGameActions,
    guestGameSelectors
}from '../../redux'

const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            resultList : guestGameSelectors.getResultGameList(state),
        }),
        dispatch => ({
            getResultList(payload){
                dispatch(guestGameActions.getResultList())
            },
            getCommentList(payload){
                dispatch(guestGameActions.getCommentList(payload))
            }
        }),
    )
);

export default enhance(Results);