import * as React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import theme, { globalStyles } from './config/theme';
import {
    Container,
    withStyles,
    CssBaseline,
} from '@material-ui/core';
import { ThemeProvider, createStyles } from '@material-ui/core/styles';
import { Landing, Login, Team, PreGame, Game } from './containers';
import {NavBar, WithoutAuthentication } from './components';

const styles = createStyles({
    container: {
        backgroundColor: theme.palette.common.white,
        paddingTop: '20px',
        height: '100%',
        maxWidth: '100%'
    },
    ...globalStyles
});

class App extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Container className={classes.container}>
                        <WithoutAuthentication without={true} >
                            {window.location.pathname !== '/login' && <NavBar/> }
                            <Switch>
                                <Route exact path="/">
                                        <Landing/>
                                    </Route>
                                <Route path="/team">
                                    <Team/>
                                </Route>
                                <Route path="/login">
                                    <Login/>
                                </Route>
                                <Redirect to="/"/>
                            </Switch>
                        </WithoutAuthentication>
                        <WithoutAuthentication without={false} id={2}>
                            <Switch>
                                <Route path="/pregame">
                                    <PreGame/>
                                </Route>
                                <Route path="/game">
                                    <Game/>
                                </Route>
                                <Redirect to="/pregame"/>
                            </Switch>
                        </WithoutAuthentication>
                </Container>
            </ThemeProvider>
        );
    }
}

export default withRouter(withStyles(styles)(App));
