import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import PlayersTable from './PlayersTable';

const enhance = compose(
  withStyles(styles),
);

export default enhance(PlayersTable);