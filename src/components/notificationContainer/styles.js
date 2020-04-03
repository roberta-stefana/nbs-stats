import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    table:{
        maxHeight: "100%",
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
        backgroundColor:theme.palette.primary.main,
        width: '430px',
        height: '50px',
    },
    toolbarTitle:{
        flex:1,
    },
    selectedPlayer:{
        flex:1,
    },
    fab:{
        backgroundColor: theme.palette.primary.light,
    }
});

export default styles;