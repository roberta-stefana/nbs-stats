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
    messageBox:{
        height: 600,
        width: 600,
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
    },
    logo:{
        marginTop: 15,
        height: '100px',
        width: '95px',
    },
    text:{
        color: theme.palette.primary.dark
    }
});

export default styles;