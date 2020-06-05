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
    }
});

export default styles;