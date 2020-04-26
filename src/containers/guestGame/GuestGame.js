import React, { Component } from 'react';
import {
    AppBar,
    Tabs,
    Tab,
}from '@material-ui/core'
import {Loading} from '../../components'
import {PlayByPlay} from '../index'

class GuestGame extends Component {
    state = { 
        step: 0,
    }

    componentDidMount(){
        const currentGameId= localStorage.getItem('currentGameId');
        this.props.joinGame(currentGameId);
    }

    componentWillUnmount() {
        // disconnecting from the saga channel and the socket
        this.props.requestLeaveGame();
    }

    handleTabChange = () => {

    }

    renderSwitch = step =>{
        const {game, liveGame, statsTeam1, statsTeam2} = this.props
        switch(step) {
            case 0:
              return <PlayByPlay game={game} liveGame={liveGame} statsTeam1={statsTeam1} statsTeam2={statsTeam2}/>;
            default:
              return 'foo';
          }
    }

    render() {
        const {classes, game }= this.props;
        const { step } = this.state;
        
        return (  
            <React.Fragment>
                {game === null 
                ? <Loading/>
                : 
                <React.Fragment>
                    <AppBar position="static" color="default" className={classes.tabs}>
                        <Tabs
                            value={step}
                            onChange={this.handleTabChange}
                            variant="fullWidth"
                        >
                            <Tab label="Play By Play" className={classes.tab}/>
                            <Tab label="Boxscore" className={classes.tab}/>
                            <Tab label="Leaders" className={classes.tab}/>
                        </Tabs>
                    </AppBar>
                    {this.renderSwitch(step)}
                </React.Fragment>
                }   
            </React.Fragment>
        );
    }
}
 
export default GuestGame;