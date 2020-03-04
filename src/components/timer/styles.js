import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    timerContainer:{
        display: 'flex',
        flexDirection:'row'
    },
    timerTile:{
        width:'100px',
        height:'100px',
        backgroundColor: theme.palette.primary.main,
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        border: '5px solid #C0F442',
    },
    time:{
        color: theme.palette.primary.dark,
    }
});

export default styles;