import {Alert} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from './types';

export const emailChanged = email => {
  return dispatch => {
    dispatch({
      type: EMAIL_CHANGED,
      payload: email,
    });
  };
};

export const passwordChanged = password => {
  return dispatch => {
    dispatch({
      type: PASSWORD_CHANGED,
      payload: password,
    });
  };
};
/*
  Kullanıcı password degerini girmeye başladığında action passwordChanged tetiklenir. Type'ı password_changed olur payload' ise kullanıcının bastığı karakter olur.
  Dispatch Reducer'ı ayağa kaldırır. Tüm reducer'lar arasında dolanır ve authenticationReducers icersindeki switch'deki password_changed kısmına düşer.
  Ve state'e return {...state, password: action.payload}; kısımdaki gibi password kısmına action.payload degerini atar yani kullanıcının bastığı karakteri.
  Bunu yakalamak için index.js reducer dosyasına AuthenticationReducers import edilir.
 */
//dispatch kullanmak icin Redux thunk yapısı eklenmelidir. npm install --save redux-thunk

/*
Diyelim ki bir login işlemi yaptırmak istiyorsunuz. Butonunuza bastığınız anda action methodunuz içerisinden payload(data) değeri boş ama bir type'ı
 olan dispatch eklediğinizde bu dispatch yapıyı tetikleyerek bulunduğunuz class'a props değerlerini dönebiliyor. Örneğin tıkladığınız anda daha 
 servis'iniz ile konuşmadan tetiklediğiniz dispatch değerinizle bir loading props değeri dönerek bu değeride true dönerseniz uygulamanızda bir
  spiner göstererek gerekli işlemler yapılıp kullanıcıyı login etmek istediğinizde bir dispatch yapısı ile gerekli datalarınızı dönerken bu
   loading değerinide false dönerek spiner'ı kaldırabilirsiniz. 

Yukarıda çok basit bir örnek verdim. Genel anlamda dispatch yapısını çalıştırdığınız anda o class'ınızı yeniden set edebiliyor istediğiniz anda
 istediğiniz değişiklikleri kullanıcıya sunabiliyorsunuz. 
*/

export const loginUser = ({email, password}) => {
  return dispatch => {
    dispatch({type: LOGIN_USER});
    if (email === '' || password === '') {
      Alert.alert('Mesaj', 'Email veya şifre alanı boş geçilemez!', [
        {text: 'Tamam', onPress: () => null},
      ]);
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => loginSuccess(dispatch, user))
        .catch(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => loginSuccess(dispatch, user))
            .catch(() => loginFail(dispatch));
        });
    }
  };
};

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  Actions.main(); //router screen  key="employeeList"
};

const loginFail = dispatch => {
  Alert.alert('Mesaj', 'Email veya şifre alanı boş geçilemez!', [
    {text: 'Tamam', onPress: () => null},
  ]);
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};
