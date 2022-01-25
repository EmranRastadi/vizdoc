import { combineReducers } from 'redux';
import { InformationReducer } from './information/indeformation.reducer';

const allReducer = combineReducers({
  information: InformationReducer,
});

export { allReducer };
