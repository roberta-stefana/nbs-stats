import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Tooltip } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {LogoNbs} from '../../static/logo';

class NavBar extends Component {
    state = { 
        active: 'acasa',

    }
    render() { 
        const { classes, goTo }= this.props
        const { active } = this.state
        
        return ( 
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <div className={classes.logoPosition}>
                        <img src={LogoNbs} alt='website logo' className={classes.logo} />
                    </div>
                    <div>
                        <Tooltip title="Home">
                            <IconButton  onClick={()=> goTo('/')} className={active==='acasa'? `${classes.icon} ${classes.active}` : classes.icon}>
                                <HomeIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Live Games">
                            <IconButton onClick={()=> goTo('/live-games')} className={active==='live'? `${classes.icon} ${classes.active}` : classes.icon}>
                                <LiveTvIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Statistics">
                            <IconButton onClick={()=> goTo('statistics/')} className={active==='stats'? `${classes.icon} ${classes.active}` : classes.icon}>
                                <EqualizerIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Schedule and Results">
                            <IconButton onClick={()=> goTo('/')} className={active==='results'? `${classes.icon} ${classes.active}` : classes.icon}>
                                <ScheduleIcon/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}
 
export default NavBar;