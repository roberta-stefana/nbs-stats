import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
	mainContainer:{
		height:'90vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	button:{
		marginTop: '15px',
		marginBottom: '20px',
		width: '300px',
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.common.white,
	},
	fields:{
		width:'300px',
		height:'450px',
		display:'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	title:{
		color: theme.palette.primary.dark,
		marginBottom: '20px',
	},
	logo:{
		width:150,
		height:160,
	},
	list:{
		height: '100%',
		overflow: 'auto',
	},
	listContainer: {
		maxHeight: '60%',
		flexDirection: 'row',
		marginBottom: '20px',
	},
});

export default styles;