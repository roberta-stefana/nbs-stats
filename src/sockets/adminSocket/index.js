import { compose } from 'redux';
import { connect } from 'react-redux';
import AdminSocket from './AdminSocket';
import { gameActions, gameSelectors } from '../../redux';

const enhance = compose(
  connect(state => ({
    socket: gameSelectors.getSocket(state),
  }),
    dispatch => ({
        receiveHostGame(payload){
          	dispatch(gameActions.receiveHostGame(payload));
		},
		receiveAdminScore1(payload){
			dispatch(gameActions.receiveAdminScore1(payload));
		},
		receiveAdminScore2(payload){
			dispatch(gameActions.receiveAdminScore2(payload));
		},
		receiveAdminScore3(payload){
			dispatch(gameActions.receiveAdminScore3(payload));
		},
		receiveAdminMiss1(payload){
			dispatch(gameActions.receiveAdminMiss1(payload));
		},
		receiveAdminMiss2(payload){
			dispatch(gameActions.receiveAdminMiss2(payload));
		},
		receiveAdminMiss3(payload){
			dispatch(gameActions.receiveAdminMiss3(payload));
		},
		receiveAdminStatsUpdate(payload){
			dispatch(gameActions.receiveAdminStatsUpdate(payload));
		},
		receiveAdminPlayersTime(payload){
			dispatch(gameActions.receiveAdminPlayersTime(payload));
		},
		receiveAdminChangeQuater(payload){
			dispatch(gameActions.receiveAdminChangeQuater(payload));
		},
		receiveAdminSubstitution(payload){
			dispatch(gameActions.receiveAdminSubstitution(payload));
		},

  }))
);

export default enhance(AdminSocket);