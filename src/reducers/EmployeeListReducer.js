import {
  EMPLOYEE_CHANGED,
  CREATE_REQUEST,
  CREATE_REQUEST_SUCCESS,
} from '../actions/types';
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
    case CREATE_REQUEST:
      return {...state, loading: true};
    case CREATE_REQUEST_SUCCESS:
      return {INITIAL_STATE}; //başlangıc durumuna gecirir kayıt ekledikten sonra listeye dondukten sorna form boşaltılması icin
    default:
      return state;
  }
};

/*
Firebase Database Rule
{
  
  "rules": {
    "users":{
      "$uid":{
        ".read":"$uid==auth.uid",
        ".write":"$uid==auth.uid"
      }
    }
  }
}
*/
