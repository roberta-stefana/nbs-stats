import React, { Component } from 'react';
import {
    AppBar,
    Tabs,
    Tab,
}from '@material-ui/core'
import {PlayByPlay} from '../index'

class GuestGame extends Component {
    state = { 
        step: 0,
    }

    handleTabChange = () => {

    }

    renderSwitch = step =>{
        switch(step) {
            case 0:
              return <PlayByPlay/>;
            default:
              return 'foo';
          }
    }

    render() {
        const {classes }= this.props;
        const { step } = this.state;
        
        return (  
            <React.Fragment>
                <AppBar position="static" color="default">
                    <Tabs
                        value={step}
                        onChange={this.handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="PlayByPlay"/>
                        <Tab label="Boxscore" />
                        <Tab label="Leaders" />
                    </Tabs>
                </AppBar>
                {this.renderSwitch(step)}
            </React.Fragment>
        );
    }
}
 
export default GuestGame;