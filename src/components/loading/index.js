import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Loading from './Loading'

const enhance = compose(
    withStyles(styles),
    withRouter,
);

export default enhance(Loading);