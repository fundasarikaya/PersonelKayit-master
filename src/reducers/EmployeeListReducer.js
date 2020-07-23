import {EMPLOYEE_CHANGED} from '../actions/types';
const INITIAL_STATE = {
  isim: '',
  soyisim: '',
  tc: '',
  departman: '',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_CHANGED:
      return {...state, [action.payload.props]: action.payload.value};
      //action.payload.props gelen propsu action.payload.value eşitleriz
      //actiondaki  payload: {props, value}, kısmında props ve value gondeririz
      //gelen props ornegin soyisim bilgisisini kullanıcının girdigi soyisim bilgisi ile eşleştiririz
      //bu sekilde reducersımızı gondermiş oluruz
    default:
      return state;
  }
};
