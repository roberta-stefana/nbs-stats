import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Boxscore from './Boxscore'

const enhance = compose(
    withStyles(styles),
);

export default enhance(Boxscore);