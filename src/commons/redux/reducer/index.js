import { combineReducers } from 'redux';
import { AuthReducer } from './auth/auth.reducer';
import { InformationReducer } from './information/indeformation.reducer';

const allReducer = combineReducers({
  information: InformationReducer,
  auth: AuthReducer,
});

export { allReducer };
