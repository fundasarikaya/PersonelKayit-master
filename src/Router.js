import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{marginTop: 65}}>
      <Scene key="kimlik">
        <Scene key="loginScreen" component={LoginForm} title="Giris Ekrani" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Yeni"
          key="employeeList"
          component={EmployeeList}
          title="Personel Listesi"
          //initial //initial dersek ilk bu sahneyi gösterir
        />

        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Personel Kayıt"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
