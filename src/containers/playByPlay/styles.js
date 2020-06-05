import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    mainContainer:{
        paddingTop: 30
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
        fontSize: 30,
    },
    liveNotificationsContainer:{
        maxHeight:'100%',
        justifyContent: 'flex-end',
        display: 'flex'
    },
    switchButton:{
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
        height: '3.5em',
        width: '14em',
    },
    leftButton:{
        marginRight: '50px'
    },
    rightButton:{
        marginLeft: '50px'
    },
    infoContainer:{
        height: 200
    },
    buttonsContainer:{
        paddingBottom: 15
    },
    tableContainer:{

    }
});

export default styles;