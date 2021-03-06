import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    tab:{
        color: theme.palette.primary.dark,
        fontWeight: 800,
        fontFamily: 'nunito, sans-serif',
        fontSize: 'inherit',
    },
    tabs:{
        zIndex: '1'
    }
});

export default styles;