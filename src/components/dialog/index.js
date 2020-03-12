import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import DialogBox from './DialogBox'

const enhance = compose(
    withStyles(styles)
  );
  
  export default enhance(DialogBox);