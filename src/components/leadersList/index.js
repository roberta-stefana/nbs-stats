import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import LeadersList from './LeadersList'

const enhance = compose(
    withStyles(styles),
);

export default enhance(LeadersList);