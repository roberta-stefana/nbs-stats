import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Login from './Login';
import { userActions, userSelectors } from '../../redux';

const enhance = compose(
  withStyles(styles),
  connect(state => ({
    loginFail: userSelectors.getLoginFail(state),
    buttonLoader: userSelectors.getButtonLoader(state),
  }),
    dispatch => ({
        login(payload) {
            dispatch(userActions.login(payload));
        },
        setLoginFail(){
          dispatch(userActions.setLoginFail());
        }
  }))
);

export default enhance(Login);