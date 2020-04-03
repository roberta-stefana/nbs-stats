import { all, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import userSaga from './user';
import teamSaga from './team';
import gameSaga from './game';
import guestGameSaga from './guestGame';

import { userActions } from '../redux';
import { userApi } from '../api';


const checkToken = function* (action) {
  const token = localStorage.getItem('access_token');

  if (!token) {
    yield put(push('/login'));

    return;
  }

  yield put(userActions.requestCheckToken());
  try {
    const response = yield call(userApi.checkToken);
    yield put(userActions.receiveCheckToken(response.data.user));
  } catch (error) {
    yield put(userActions.receiveCheckTokenFail());
    yield put(push('/login'));
  }
};

export default function* rootSaga() {
    // always check the token before taking any other sagas;
    // using 'take' + 'call' will block any actions from being caught;
    // const action = yield take(types.CHECK_TOKEN);
    // yield call(checkToken, action);

    yield all([
      userSaga(),
      teamSaga(),
      gameSaga(),
      guestGameSaga(),
    ]);
}