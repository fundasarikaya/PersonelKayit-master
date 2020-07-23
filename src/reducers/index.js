import {combineReducers} from 'redux';
import AuthenticationReducers from './AuthenticationReducers';
import EmployeeListReducer from './EmployeeListReducer';

export default combineReducers({
  AuthenticationResponse: AuthenticationReducers, //Buraya AuthenticationReducers dan gelen degeri response olarak alırız.
  employeeListResponse: EmployeeListReducer,
});
