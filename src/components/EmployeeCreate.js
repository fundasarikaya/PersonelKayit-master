import React, {Component} from 'react';
import {View, Text, TextInput, Picker} from 'react-native';
import {connect} from 'react-redux';
import {Button, Card, CardSection} from '../common';
import {employeeChange} from '../actions';

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
            onChangeText={isim =>
              this.props.employeeChange({props: 'isim', value: isim})
            }
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Soyisim"
            style={inputStyle}
            value={this.props.soyisim}
            onChangeText={soyisim =>
              this.props.employeeChange({props: 'soyisim', value: soyisim})
            }
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="TC Kimlik Numarası"
            style={inputStyle}
            value={this.props.tc}
            onChangeText={tc =>
              this.props.employeeChange({props: 'tc', value: tc})
            }
          />
        </CardSection>

        <CardSection>
          <Text>Departman</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.departman}
            onValueChange={departman =>
              this.props.employeeChange({props: 'departman', value: departman})
            }>
            <Picker.Item label="Bilişim" value="bilisim" />
            <Picker.Item label="Muhasebe" value="muhasebe" />
            <Picker.Item label="Satın alma" value="satinalma" />
          </Picker>
        </CardSection>

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
export default connect(
  null,
  employeeChange,
)(EmployeeCreate);
