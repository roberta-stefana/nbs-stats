import * as React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import theme, { globalStyles } from './config/theme';
import {
    Container,
    withStyles,
    CssBaseline,
} from '@material-ui/core';
import { ThemeProvider, createStyles } from '@material-ui/core/styles';
import { Landing, Login, Team, PreGame, LivePage, Statistics, Results} from './containers';
import {NavBar, WithoutAuthentication } from './components';
import {AdminSocket, GuestSocket} from './sockets';

const styles = createStyles({
    containerHost: {
        backgroundColor: theme.palette.common.white,
        paddingTop: '20px',
        height: '100%',
        maxWidth: '100%'
    },
    containerGuest:{
        paddingTop: '64px',
        height: '100%',
        maxWidth: '1100px',
        paddingRight: 0,
        paddingLeft: 0,
    },
    ...globalStyles
});

class App extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                
                        <WithoutAuthentication without={true} >
                            {window.location.pathname !== '/login' && <NavBar/> }
                            <Container className={classes.containerGuest}>
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
                                <Route path="/live-games">
                                    <LivePage/>
                                </Route>
                                <Route path="/guest-game">
                                    <GuestSocket/>
                                </Route>
                                <Route path="/statistics">
                                    <Statistics/>
                                </Route>
                                <Route path="/results">
                                    <Results/>
                                </Route>
                                <Redirect to="/"/>
                            </Switch>
                            </Container>
                        </WithoutAuthentication>
                        <WithoutAuthentication without={false} id={2}>
                        <Container className={classes.containerHost}>
                            <Switch>
                                <Route path="/pregame">
                                    <PreGame/>
                                </Route>
                                <Route path="/game">
                                    <AdminSocket/>
                                </Route>
                                <Redirect to="/pregame"/>
                            </Switch>
                            </Container>
                        </WithoutAuthentication>
            </ThemeProvider>
        );
    }
}

export default withRouter(withStyles(styles)(App));
