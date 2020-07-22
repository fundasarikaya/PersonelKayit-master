import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button, Card, CardSection} from '../common';

class EmployeeCreate extends Component {
  clickSave() {}
  render() {
    const {inputStyle} = styles;
    return (
      <View>
        <CardSection>
          <TextInput
            placeholder="İsim"
            style={inputStyle}
            value={this.props.isim}
            onChangeText={isim => this.props.employeeChange(isim)}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Soyisim"
            style={inputStyle}
            value={this.props.soyisim}
            onChangeText={soyisim => this.props.employeeChange(soyisim)}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="TC Kimlik Numarası"
            style={inputStyle}
            value={this.props.tc}
            onChangeText={tc => this.props.employeeChange(tc)}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button onPress={this.clickSave.bind(this)}> Kaydet </Button>
        </CardSection>
      </View>
    );
  }
}
const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
};
export default EmployeeCreate;
