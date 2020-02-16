import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
	mainContainer:{
		//height:'90vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	divList:{
		height:'60%',
		width:'400px',
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
		height:'300px',
		display:'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		paddingTop:'20px',
	},
	center:{
		display:'flex',
		justifyContent: 'center',
	},
	title:{
		paddingTop: '20px',
		paddingBottom: '30px',
		color: theme.palette.primary.dark,
	},
	logo:{
		width:150,
		height:160,
		paddingBottom: '20px',
	},
	list:{
		height: '100%',
		overflow: 'auto',
		width: '100%',
		boxShadow:'5px 5px #C0F442'
	},
	listContainer: {
		height:'70%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row',
		paddingBottom: '30px',
		paddingTop:'20px',

	},
});

export default styles;