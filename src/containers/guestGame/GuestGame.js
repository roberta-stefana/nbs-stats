import React, { Component } from 'react';
import {
    AppBar,
    Tabs,
    Tab,
}from '@material-ui/core'
import {Loading, DialogBox} from '../../components'
import {PlayByPlay, Boxscore} from '../index'

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

    handleTabChange = (event, newValue) => {
        console.log(newValue)
        this.setState({
            step:newValue,
        })
    }
    

    handleEndGame = () =>{
        this.props.goTo('/live-games')
    }

    renderSwitch = step =>{
        const {game, liveGame, statsTeam1, statsTeam2} = this.props
        switch(step) {
            case 0:
                return <PlayByPlay game={game} liveGame={liveGame} statsTeam1={statsTeam1} statsTeam2={statsTeam2}/>;
            case 1:
                return <Boxscore statsTeam1={statsTeam1} statsTeam2={statsTeam2} team1={game.team1} team2={game.team2}/>
            default:
                return 'foo';
          }
    }

    render() {
        const {classes, game, endGameFlag }= this.props;
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
                    <DialogBox
                        title="End Game"
                        content="The game ended. You will be redirected to the Statistics page"
                        open={endGameFlag}
                        handleDialogClose={this.handleEndGame}
                    />
                    {this.renderSwitch(step)}
                </React.Fragment>
                }   
            </React.Fragment>
        );
    }
}
 
export default GuestGame;