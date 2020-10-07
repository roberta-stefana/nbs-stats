import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    div:{
        width: 1000,
        height: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    toolbar:{
        backgroundColor: theme.palette.secondary.dark,
        marginTop: 60,
        width: '1000px',
        minHeight: 45
    },
    title:{
        margin: 'auto',
        color: theme.palette.common.white
    },
    margin:{
        marginTop: 120,
    }
});

export default styles;