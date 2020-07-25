import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeesListData} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesListData();
  }
  renderRow({item, index}) {
    return <ListItem employee={item} />;
  }
  render() {
    console.log(this.props.employeesArray);
    return (
      <FlatList
        data={this.props.employeesArray}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const mapStateToProps = ({employeeDataResponse}) => {
  const employeesArray = _.map(employeeDataResponse, (val, uid) => {
    return {...val, uid}; //{isim:'Funda',soyisim:'Sari',tc:'123',departman:'bilisim',uid:'sdjf'} seklinde dataları alırız
  });
  return {employeesArray};
};

export default connect(
  mapStateToProps,
  {employeesListData},
)(EmployeeList);

//npm install -save lodash ile gelen objeleri array icerisine id ile eklememizi saglar
//Removed ListView in ReactNative import ListView from 'deprecated-react-native-listview';
