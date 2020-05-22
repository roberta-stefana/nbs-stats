import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import BarChart from './BarChart'

const enhance = compose(
    withStyles(styles),

);

export default enhance(BarChart);