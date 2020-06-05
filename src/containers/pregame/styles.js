import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
	mainContainer:{
		height:'90vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	playersForm:{
		marginTop: 30,
	},
	divList:{
		height:'60%',
		width:'400px',
	},
	button:{
		marginTop: '15px',
		marginBottom: '20px',
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
	autocomplete:{
		width:'300px'
	},
	centerContainer:{
		display:'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		width: '200px'
	},
	titlePaper:{
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: 20
	},
	buttonContainer:{
		width: '200px'
	},
	title:{
		paddingTop: '5px',
		paddingBottom: '5px',
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
	},
	gif:{
		width:200,
		height:300,
	},
	leftShadow:{
		boxShadow: '-15px 11px 5px 3px rgba(191,203,214,1)'
	},
	rightShadow:{
		boxShadow:'15px 11px 5px 3px rgba(191,203,214,1)'
	},
	marginBottom30:{
		marginBottom: 30
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