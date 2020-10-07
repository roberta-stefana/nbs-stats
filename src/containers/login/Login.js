import React, { Component } from 'react';
import { 
	Typography, 
	Grid, 
	TextField,
	Button,
} from '@material-ui/core';
import {LogoNbs} from '../../static/logo'
import {DialogBox} from '../../components';



class Login extends Component {

	state = {
		username: '',
		password: '',
	}

	handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;

        this.props.login({ username, password });
	}
	
	handleChange = input => event => {
        this.setState({
            [input]: event.target.value,
        });
	};
	
	handleDialogClose = () =>{
		this.setState({
			username: '',
			password: '',
		})
		this.props.setLoginFail();
	}
  
  	render() { 
		const {classes, loginFail} = this.props;
		const { username, password } = this.state;

    	return (
			<Grid container className={classes.mainContainer}>
				<div >
					<img src={LogoNbs} alt='website logo' className={classes.logo} />
				</div>
				<div className={classes.fields} >
						<Typography 
							variant="h3"
							className={classes.title}
						>
							Welcome
						</Typography>
						<TextField
							label="Username"
							margin="normal"
							variant="standard"
							fullWidth
							value={username}
							onChange={this.handleChange('username')}
						/>
						<TextField
							label="Password"
							margin="normal"
							variant="standard"
							type="password"
							fullWidth
							value={password}
							onChange={this.handleChange('password')}
						/>
						<br/>
					<Button
						size="medium"
						className={classes.button}
						fullWidth
						onClick={this.handleSubmit}
					>
						LOGIN
					</Button>
				</div>
				<DialogBox
					open={loginFail}
					title="Something went wrong."
					content="Please check your email and password."
					handleDialogClose={this.handleDialogClose}
				/>
			</Grid>
    	);
 	 }
}
 
export default Login;

