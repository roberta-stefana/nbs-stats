import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import PlayByPlay from './PlayByPlay'
import {
    guestGameSelectors,
    guestGameActions
} from '../../redux';

const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            commentList: guestGameSelectors.getCommentList(state),
        }),
        dispatch => ({
            getCommentList(payload){
                dispatch(guestGameActions.getCommentList(payload))
            }

        }),
    )
);

export default enhance(PlayByPlay);