import { combineReducers } from 'redux';
import cart from '../actions/index';
import produtos from './clickReducers';

export default combineReducers({
  cart,
  produtos,
});
