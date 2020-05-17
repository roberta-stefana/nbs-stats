import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import SubstitutionBox from './SubstitutionBox'

const enhance = compose(
  withStyles(styles)
);

export default enhance(SubstitutionBox);