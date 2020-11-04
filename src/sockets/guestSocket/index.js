import { compose } from 'redux';
import { connect } from 'react-redux';
import GuestSocket from './GuestSocket';
import { guestGameActions} from '../../redux';

const enhance = compose(
  connect(state => ({

  }),
    dispatch => ({
		receiveJoinGame(payload){
			dispatch(guestGameActions.receiveJoinGame(payload));
		},
		setActiveUsers(payload){
			dispatch(guestGameActions.setActiveUsers(payload));
		}, 
		receiveStartGame(payload){
			dispatch(guestGameActions.receiveStartGame(payload));
		},
		receiveEndGame(payload){
			dispatch(guestGameActions.receiveEndGame(payload));	
		},
		receiveScore1(payload){
			dispatch(guestGameActions.receiveScore1(payload));
		},
		receiveScore2(payload){
			dispatch(guestGameActions.receiveScore2(payload));
		},
		receiveScore3(payload){
			dispatch(guestGameActions.receiveScore3(payload));
		},
		receiveMiss1(payload){
			dispatch(guestGameActions.receiveMiss1(payload));
		},
		receiveMiss2(payload){
			dispatch(guestGameActions.receiveMiss2(payload));
		},
		receiveMiss3(payload){
			dispatch(guestGameActions.receiveMiss3(payload));
		},
		receiveStatsUpdate(payload){
			dispatch(guestGameActions.receiveStatsUpdate(payload));
		},
		receivePlayersTime(payload){
			dispatch(guestGameActions.receivePlayersTime(payload));
		},
		receiveChangeQuater(payload){
			dispatch(guestGameActions.receiveChangeQuater(payload));
		},
		receiveSubstitution(payload){
			dispatch(guestGameActions.receiveSubstitution(payload));
		},
  }))
);

export default enhance(GuestSocket);