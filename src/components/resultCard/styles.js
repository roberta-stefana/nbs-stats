import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    card:{
        width: 400,
        margin: 30
    },
    header:{
        backgroundColor: '#e6e6e6'
    },
    image:{
        width: 80,
        height:80,
    },
    imageContainer:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingBottom: 20,
    },
    score:{
        height: 'min-content',
        paddingTop: 'inherit',
    },
    avatar:{
        backgroundColor: theme.palette.secondary.main,
        
    },
    shareButtons:{
        flex: 1,
    },
    statsButton:{
        padding: 4,
        width: '8em'  
    },
});

export default styles;