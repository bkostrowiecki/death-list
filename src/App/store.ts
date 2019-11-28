import { createStore, combineReducers } from 'redux';
import { deathListReducer } from './DeathList/deathList.reducer';

export const store = createStore(combineReducers({
  deathList: deathListReducer
}));
