import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
  	teams:{
		height: '65px',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		borderBottom: '5px groove',
		marginBottom: '30px',
	},
	logo:{
        height:50,
		width:60,
		paddingRight: '10px',
	},
	teamNameLeft:{
		width: '320px',
		display: 'flex',
		justifyContent: 'flex-start',
	},
	teamNameRight:{
		width: '300px',
		display: 'flex',
		justifyContent: 'flex-end'
	},	
	buttonContainer:{
		paddingTop:'30px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',

	},
	buttonSection:{
		display: 'flex',
		flexFlow: 'row wrap',
		position: 'relative',
		width:'700px',
		justifyContent:'space-around'
	},
	wrapper:{
		width: '400px',
		height: '200px',
	},
	timeButtons:{
		display:'flex',
		flexDirection:'row',
		flexFlow: 'row wrap',
		position: 'relative',
		justifyContent:'space-around',
		width:'300px',
		margin:'auto',
		height:'100%',
		marginTop: '15px'
	},
	button:{
		width:'80px',
		height: '80px',
		margin: '8px',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.dark,
	},
	buttonSquare:{
		width:120,
		height:60,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.dark,
		border: '2px solid #C0F442',
		fontWeight: '500',
	},
	flexColumn:{
		display:'flex',
		flexDirection:'column',
	},
	tableContainerLeft:{
		alignItems:'flex-start',
	},
	tableContainerRight:{
		alignItems:'flex-end',
	},

});

export default styles;