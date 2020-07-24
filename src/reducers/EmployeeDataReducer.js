import {EMPLOYEE_LIST_DATA_SUCCESS} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_LIST_DATA_SUCCESS:
        console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
