import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Timer from './Timer';

const enhance = compose(
  withStyles(styles)
);

export default enhance(Timer);