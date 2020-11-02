import React, { Component } from 'react';
import { Container, Button} from '@material-ui/core';
import SockJsClient from 'react-stomp';


class Landing extends Component {
	state = {  }

	sendMessage = () => {
        this.clientRef.sendMessage('/app/user-all', JSON.stringify({
            name: "nameee",
            message: "Merge ha ha ha"
        }));
	};
	
	render() { 
		const{classes} = this.props;
		return (
			<Container className={classes.main}>
				<Button variant="contained" color="primary"
                                        onClick={this.sendMessage}>Send</Button>
			<SockJsClient url='https://warm-wave-45384.herokuapp.com/websocket-chat/'
                              topics={['/topic/user']}
                              onConnect={() => {
                                  console.log("connected");
                              }}
                              onDisconnect={() => {
                                  console.log("Disconnected");
                              }}
                              onMessage={(msg) => {
                                  console.log(msg);
                              }}
                              ref={(client) => {
                                  this.clientRef = client
                              }}/>
		</Container>
		  );
	}
}
 
export default Landing;




