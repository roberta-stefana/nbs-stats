import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import PreGame from './PreGame'
import {
    teamSelectors,
    teamActions,
} from '../../redux';

const enhance = compose(
  withStyles(styles),
  connect(
    state => ({
        teamList: teamSelectors.getTeamList(state),
    }),
    dispatch => ({
        getTeamList(payload) {
            dispatch(teamActions.getTeamList(payload))
        },
    }),
)
);

export default enhance(PreGame);