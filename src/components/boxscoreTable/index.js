import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import BoxscoreTable from './BoxscoreTable'

const enhance = compose(
    withStyles(styles),

);

export default enhance(BoxscoreTable);