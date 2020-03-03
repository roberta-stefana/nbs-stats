import React, { Component } from 'react';
import {logoList} from '../../static/logo'
import{ 
    Grid, Typography, Button
} from '@material-ui/core'
import {PlayersTable} from '../../components';


const team1 = {name: 'CS Universitatea NBS Cluj'}
const team2 = {name: 'CSS Gloria Arad'}

class Game extends Component {
    state = { 
        imageTeam1 :null,
        imageTeam2: null,
    }

    componentDidMount(){
       
        logoList.map(l=>{
            if(l.team === team1.name){
                this.setState({
                    imageTeam1: l.img
                })
            }else if(l.team === team2.name){
                this.setState({
                    imageTeam2: l.img
                })
            }
        })
    }

    render() { 
        const {classes} = this.props;
        const {imageTeam1, imageTeam2} = this.state;

        return ( 
            <Grid container>
                <Grid item xs={12} className={classes.teams}>
                    <div className={classes.teamNameLeft}>
                        <img src={imageTeam1} alt="logo" className={classes.logo}/>
                        <Typography variant="h5">{team1.name}</Typography>
                    </div>
                    <div className={classes.score}>
                        <Typography variant ="h4">25 : 65</Typography>
                    </div>
                    <div className={classes.teamNameRight}>
                        <img src={imageTeam2} alt="logo" className={classes.logo}></img>
                        <Typography variant="h5">{team2.name}</Typography>
                    </div>
                </Grid>
                <Grid item xs={5} className={`${classes.tableContainerLeft} ${classes.flexColumn}`}>
                    <PlayersTable></PlayersTable>
                </Grid>
                <Grid item xs={2} >
                    <Typography>Time</Typography>
                    <Typography>Quater</Typography>
                </Grid>
                <Grid item xs={5} className={`${classes.tableContainerRight} ${classes.flexColumn}`}>
                    <PlayersTable></PlayersTable>
                </Grid>
                <Grid item xs={12} className={classes.buttonContainer}>
                    <div className={classes.buttonSection}>
                        <Button className={classes.button}>+1</Button>
                        <Button className={classes.button}>+2</Button>
                        <Button className={classes.button}>+3</Button>
                        <Button className={classes.button}>Miss 1</Button>
                        <Button className={classes.button}>Miss 2</Button>
                        <Button className={classes.button}>Miss 3</Button>

                        <Button className={classes.button}>Off Reb</Button>
                        <Button className={classes.button}>Def Reb</Button>
                        <Button className={classes.button}>Bs</Button>
                        <Button className={classes.button}>As</Button>
                        <Button className={classes.button}>To</Button>
                        <Button className={classes.button}>St</Button>
                        <Button className={classes.button}>PF</Button>
                        <Button className={classes.button}>FD</Button>
                    </div>
                    <div className={classes.wrapper}>
                    <div className={classes.timeButtons}>
                        <Button className={classes.buttonSquare}>Start Time</Button>
                        <Button className={classes.buttonSquare}>Stop Time</Button>
                        <Button className={classes.buttonSquare}>Timeout</Button>
                        <Button className={classes.buttonSquare}>Start Game</Button>
                    </div>
                    </div>

                    
                </Grid>
            </Grid>     
        );
    }
}
 
export default Game;