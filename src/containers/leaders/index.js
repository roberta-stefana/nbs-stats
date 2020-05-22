import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Leaders from './Leaders'

const enhance = compose(
    withStyles(styles),
);

export default enhance(Leaders);