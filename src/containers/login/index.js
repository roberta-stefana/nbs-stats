import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Login from './Login';
import { userActions, userSelectors } from '../../redux';

const enhance = compose(
  withStyles(styles),
  connect(state => ({
    loginFailMessage: userSelectors.getLoginFailMessage(state),
    buttonLoader: userSelectors.getButtonLoader(state),
  }),
    dispatch => ({
        login(payload) {
            dispatch(userActions.login(payload));
        }
  }))
);

export default enhance(Login);