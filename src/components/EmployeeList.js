import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {employeesListData} from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesListData();
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

export default connect(
  null,
  {employeesListData},
)(EmployeeList);
