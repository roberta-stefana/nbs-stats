import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {push} from 'connected-react-router'
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import NavBar from './NavBar';

const enhance = compose(
    withStyles(styles),
    withRouter,
    connect(
        null,
        dispatch => ({
            goTo(path) {
                dispatch(push(path));
            },
        })
    )
);

export default enhance(NavBar);