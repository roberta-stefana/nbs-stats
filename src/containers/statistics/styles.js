import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    mainContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    autocomplete:{
        flexDirection:'row',
        display: 'flex',
        justifyContent: 'space-around',
        width: '90%',
        marginTop: 20,
    },
    textField:{
        width: 200,
    },
    pick:{
        marginTop: 'auto',
        marginBottom: 'auto',
        color: theme.palette.primary.dark
    }
});

export default styles;