import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    logo:{
        height: 40,
        width: 45,
    },
    cell: {
        padding: '3px 10px 3px 10px'
    },
    table:{
        width: 1000,
    },
    firstCell:{
        borderTop: '1px solid rgb(224, 224, 224)',
        borderBottom: 0,
        padding: '3px 10px 3px 10px'
    },
    firstCellText:{
        borderTop: '1px solid rgb(224, 224, 224)',
        borderRight: '1px solid rgb(224, 224, 224)',
        borderLeft: '1px solid rgb(224, 224, 224)',
        padding: '3px 10px 3px 10px'
    }, 
    borderLeftCell:{
        borderLeft: '1px solid rgb(224, 224, 224)',
    },
    borderRightCell:{
        borderRight: '1px solid rgb(224, 224, 224)',
    },
    toolbar:{
        backgroundColor: theme.palette.secondary.dark,
        marginTop: 60,
        width: 1000,
        minHeight: 45
    },
    teamName:{
        color: theme.palette.common.white
    }
});

export default styles;