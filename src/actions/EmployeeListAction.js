import firebase from 'firebase';
import {
  EMPLOYEE_CHANGED,
  CREATE_REQUEST,
  CREATE_REQUEST_SUCCESS,
} from './types';

export const employeeChange = ({props, value}) => {
  return dispatch => {
    dispatch({
      type: EMPLOYEE_CHANGED,
      payload: {props, value},
    });
  };
};

export const employeeCreate = ({isim, soyisim, tc, departman}) => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    //dispatch tıklandıgında reducersları ayaga kaldırır
    dispatch({type: CREATE_REQUEST});
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`) //girişi yapan kullanıcıya inputlarda degerleri ekleriz burada ekleme kuralını firebase tarafında belirlenir
      .push({isim, soyisim, tc, departman})
      .then(() => {
        dispatch({type: CREATE_REQUEST_SUCCESS});
      });
  };
};
