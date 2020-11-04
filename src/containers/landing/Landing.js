import React, { Component } from 'react';
import { Container, Button} from '@material-ui/core';


class Landing extends Component {
	state = {  }


	
	render() { 
		const{classes} = this.props;
		return (
			<Container className={classes.main}></Container>
		  );
	}
}
 
export default Landing;




