import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import team from './team';
import game from './game';

/*
  Contains the root reducer
  @history is passed here to connect the router to redux, as it's own reducer
 */
export default history => combineReducers({
  router: connectRouter(history),
  user,
  team,
  game,
});

export {
  types as userTypes,
  actions as userActions,
  selectors as userSelectors,
} from './user';

export {
  types as teamTypes,
  actions as teamActions,
  selectors as teamSelectors,
} from './team';

export {
  types as gameTypes,
  actions as gameActions,
  selectors as gameSelectors,
} from './game';
