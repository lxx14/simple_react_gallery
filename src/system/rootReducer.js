import { combineReducers } from 'redux';

import gallery from '../components/Gallery/reducer';
import favorite from '../components/SinglePagePhoto/reducer';

export default combineReducers({
  gallery,
  favorite
})