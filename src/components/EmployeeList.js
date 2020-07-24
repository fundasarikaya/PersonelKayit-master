import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import {connect} from 'react-redux';
import {employeesListData} from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesListData();
  }

  //propertyler componente ulaştığı zaman componentWillReciveProps
  componentWillReceiveProps(nextProps) {
    const datasource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.datasource = datasource.cloneWithRows(nextProps.employeesArray);
  }
  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

const mapStateToProps = ({employeeDataResponse}) => {
  const employeesArray = _.map(employeeDataResponse.data, (val, uid) => {
    return {...val, uid}; //{isim:'Funda',soyisim:'Sari',tc:'123',departman:'bilisim',uid:'sdjf'} seklinde dataları alırız
  });
  return {employeesArray};
};

export default connect(
  mapStateToProps,
  {employeesListData},
)(EmployeeList);

//npm install -save lodash ile gelen objeleri array icerisine id ile eklememizi saglar
