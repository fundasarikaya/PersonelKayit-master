import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{marginTop: 65}}>
      <Scene key="kimlik">
        <Scene key="loginScreen" component={LoginForm} title="Giris Ekrani" />
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Personel Listesi"
          //initial //initial dersek ilk bu sahneyi gösterir
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
