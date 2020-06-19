import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Landing from './Landing';

const enhance = compose(
    withStyles(styles)
);

export default enhance(Landing);