import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    appbar:{
        background: '#fff',
        height: 64
    },
    logo:{
        height:50,
        width:50,
    },
    logoPosition:{
        flex: 1
    },
    icon:{
        paddingRight: 15,
        paddingLeft: 15,
    },
    active:{
        color:theme.palette.primary.dark
    }
});

export default styles;