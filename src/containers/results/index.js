import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Results from './Results'
import{
    guestGameActions,
    guestGameSelectors,
    statisticsActions,
    statisticsSelectors,
}from '../../redux'

const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            resultList : guestGameSelectors.getResultGameList(state),
            statsTeam1 : statisticsSelectors.getStatsTeam1(state),
            statsTeam2 : statisticsSelectors.getStatsTeam2(state),
        }),
        dispatch => ({
            getResultList(payload){
                dispatch(guestGameActions.getResultList())
            },
            getCommentList(payload){
                dispatch(guestGameActions.getCommentList(payload))
            },
            setTeam1(payload){
                dispatch(statisticsActions.setTeam1(payload))
            },
            setTeam2(payload){
                dispatch(statisticsActions.setTeam2(payload))
            },
            getStatsList(payload){
                dispatch(statisticsActions.getStatsList(payload))
            }   
        }),
    )
);

export default enhance(Results);