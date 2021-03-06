import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    table:{
        //maxHeight: "100%",
        overflow: 'scroll'
    },
    logo:{
        height:30,
        width:35,
    },
    cell:{
        
        paddingTop: '4px',
        paddingBottom:'4px',
        paddingLeft:'8px',
        paddingRight:'8px'
    },
    headCells:{
        height: 20,
        backgroundColor: theme.palette.primary.main,
        borderBottom: '5px solid #C0F442'
    },
    toolbar:{
        display:'flex',
        backgroundColor:theme.palette.secondary.dark,
        width: '430px',
        height: '30px',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    toolbarTitle:{
        flex:1,
    },
    selectedPlayer:{
        flex:1,
    },
    fab:{
        backgroundColor: theme.palette.primary.light,
    },
    teamText:{
        marginTop: 5,
        color: theme.palette.common.white
    }
});

export default styles;