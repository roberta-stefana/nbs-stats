import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    tableContainer:{
		display:'flex',
		flexDirection: 'column',
		alignItems: 'center',

	},
	coachSquare:{
		width: 20,
		height: 20,
		backgroundColor: theme.palette.secondary.dark,
		marginRight: 10
	},
	textCoach:{
		color: theme.palette.secondary.dark,
	},
	coachContainer:{
		marginTop: 20,
		display:'flex',
		width:1000,
	},
	bottom:{
		marginBottom: 40,
	}
});

export default styles;