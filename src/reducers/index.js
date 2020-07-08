import {combineReducers} from 'redux';
import AuthenticationReducers from './AuthenticationReducers';
export default combineReducers({
  AuthenticationResponse: AuthenticationReducers, //Buraya AuthenticationReducers dan gelen degeri response olarak alırız.
});
