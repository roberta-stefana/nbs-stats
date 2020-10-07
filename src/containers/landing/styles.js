import { createStyles } from '@material-ui/core';
import Background from '../../static/logo/background.jpg';

const styles = theme => createStyles({
	main:{
		backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100%',
	}
});

export default styles;