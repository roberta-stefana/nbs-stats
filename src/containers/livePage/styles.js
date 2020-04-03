import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    container:{
        backgroundColor: '#fcba03'
    },
    mainContainer:{
        display:'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 50,
    }
});

export default styles;