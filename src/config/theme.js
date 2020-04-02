import { createMuiTheme } from '@material-ui/core/styles';

// TODO: redistribute the colors to form the intended palette;
// could use a comment to say what use has each color OR rename the brandColors keys to be more descriptive
const brandColors = {
    darkBlue: '#34577B',
    normalBlue: '#9FAFC1',
    lightBlue: '#BFCBD6',
    white: '#FFFFFF',
    gray: '#9FA2A3',
    green: '#C0F442',
    black: '#000000',

    paper: '#EEEEEE',
    inputBorder: '#80BDFF',
    success: '#1BB99A',
    successDark: 'rgba(27, 185, 154, 1)',
    error: '#d93523',
    info: '#90FFDC',
    darkTitle: '#2f4a70',
};

// our custom theme
// docs can be found here: https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
    palette: {
        common: {
            white: brandColors.white,
            green: brandColors.green,
            black: brandColors.black
        },
        primary: { // albastru
            main: brandColors.normalBlue,
            light: brandColors.lightBlue,
            dark: brandColors.darkBlue,
        },
        secondary: { // gray
            main: brandColors.gray,
        },
        error: {
            main: brandColors.error,
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: 'DejaVu Sans, sans-serif',
    },
    overrides: {
        MuiOutlinedInput: {
            input: {
                padding: '10px 12px',
            },
            root: {
                borderRadius: 4,
            },
        },
        MuiCircularProgress: {
            root: {
                marginRight: 8
            }
        },
        MuiFormControl: {
            root: {
                //marginBottom: 16,
                display: 'block'
            }
        },
        MuiFormLabel:{
            root: {
                fontWeight: '00',
                color: brandColors.darkBlue,
                '&$focused':{
                    color: brandColors.darkBlue,
                },
            },
        },
        MuiInputBase:{
            root:{
                borderBottom: brandColors.darkBlue,
            },
        },
        MuiCardHeader:{
            title:{
                fontSize: '15px',
                color: "#000000"
            },
            subheader:{
                fontSize: '15px',
                color: "#000000"
            }
        },
        MuiTable:{
            root:{
                width: '430px',
            }
        },
        MuiStepper:{
            root:{
                paddingTop:'24px',
                paddingBottom:'24px',
                paddingLeft: '0px',
                paddingRight: '0px',
            }
        }
        
    }
});

export const globalStyles = {
    '@global' : {
        body: {
            fontStyle: 100
        },
        '#root': {
            height: '100vh'
        },
        '*, *:before, *:after': {
            boxSizing: 'border-box'
        },
        'a, a:hover, a:visited, a:active, a:focus': {
            textDecoration: 'none',
            color: theme.palette.common.white
        },
        ':focus': {
            outline: 'none'
        },

        /* width */
        '::-webkit-scrollbar': {
            width: 10,
            height: 10
        },

        /* Track */
        '::-webkit-scrollbar-track': {
            opacity: 0
        },
    
        /* Handle */
        '::-webkit-scrollbar-thumb': {
            opacity: 0.1,
            borderRadius: 5,
            background: 'rgba(119, 119, 119, 0.3)'
        },

        /* Handle on hover */
        '::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(119, 119, 119, 1)',
            opacity: 1
        }
    }
};

export default theme;