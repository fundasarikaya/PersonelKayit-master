import {EMPLOYEE_CHANGED} from './types';

export const employeeChange = ({props, value}) => {
  return dispatch => {
    dispatch({
      type: EMPLOYEE_CHANGED,
      payload: {props, value},
    });
  };
};
