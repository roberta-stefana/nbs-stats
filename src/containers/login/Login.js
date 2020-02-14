import React, { Component } from 'react';
import { 
	Typography, 
	Grid, 
	TextField,
	Button,
} from '@material-ui/core';
import Logo from '../../static/images/logo.jpg'



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
  
  	render() { 
		const {classes} = this.props;
		const { username, password } = this.state;

    	return (
			<Grid container className={classes.mainContainer}>
				<div >
					<img src={Logo} alt='website logo' className={classes.logo} />
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
			</Grid>
    	);
 	 }
}
 
export default Login;

