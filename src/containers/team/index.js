import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Team from './Team';

const enhance = compose(
  withStyles(styles)
);

export default enhance(Team);