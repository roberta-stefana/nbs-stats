import { createStyles, FormHelperText } from '@material-ui/core';

const styles = theme => createStyles({
    paper:{
        width: 300,
        height: 250,
        marginTop: 40,
    },
    item:{
        margin: 20,
        display: 'flex',
        justifyContent: 'space-around'
    },
    name:{
        //marginRight: 30,
    },
    lastItem:{
        backgroundColor: theme.palette.secondary.dark,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
        display: 'flex',
        height: 50,
        flexDirection: 'column-reverse',
    },
    greenLine:{
        height: 10,
        display: 'flex',
        backgroundColor: theme.palette.common.green,
    },
    team:{
        margin: 'auto',
        color: theme.palette.common.white
    },
    value:{
        //fontSize: 30,
    }
});

export default styles;