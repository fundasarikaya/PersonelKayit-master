import {AppRegistry} from 'react-native';
import App from './App';
import firebase from '@firebase/app';
import '@firebase/auth';
import {name as appName} from './app.json';

const firebaseConfig = {
  apiKey: 'AIzaSyAIMuWpEfD_D1N4MuznXxOLB9SPTCNs7YU',
  authDomain: 'employeeregister-9f24c.firebaseapp.com',
  databaseURL: 'https://employeeregister-9f24c.firebaseio.com',
  projectId: 'employeeregister-9f24c',
  storageBucket: 'employeeregister-9f24c.appspot.com',
  messagingSenderId: '1007967296183',
  appId: '1:1007967296183:web:36e2cf6ce4ae4275764b32',
  measurementId: 'G-RM60RFFHL4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
