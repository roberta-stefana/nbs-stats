import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    logo:{
        height: 150,
        width: 155,
        margin: 'auto',
    },
    loadingContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85%',
        flexDirection: 'column'
    },
    text:{
        color: theme.palette.secondary.main,
        paddingRight: 10
    },
    loading:{
        display:'flex',
        flexDirection: 'row'
    }
});

export default styles;