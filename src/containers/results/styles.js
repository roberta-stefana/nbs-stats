import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    container:{
        backgroundColor: '#fcba03'
    },
    mainContainer:{
        display:'flex', 
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingTop: 30,
        alignItems: 'center',
    },
    logo:{
        width: 60,
        height: 60,
    },
    tables:{
		display:'flex',
		flexDirection: 'column',
		alignItems: 'center',
    },
    resultGrid:{
        display: 'flex',

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
});

export default styles;