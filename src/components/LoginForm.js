import React, {Component} from 'react';
import {TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions'; //connect yapmazsak bu bileşenler hic kullanılmamış olarak gosterilir
import {Button, Card, CardSection, Spinner} from '../common';

class LoginForm extends Component {
  state = {email: '', password: '', loading: false}; //Buraya artık ihtiyaç yok this.props ile erişebiliyoruz artık mapStateToProps sayesinde
  clickLogin() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }
  loginSucces() {
    console.log('başarılı');
    this.setState({loading: false});
  }

  loginFail() {
    console.log('Hatalı');
    this.setState({loading: false});
    Alert.alert('Mesaj', 'Kullanıcı adı veya şifreniz hatalı!', [
      {text: 'Tamam', onPress: () => null},
    ]);
  }

  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickLogin.bind(this)}> GİRİŞ </Button>;
    }
    return <Spinner size="small" />;
  }
  render() {
    console.log('response email ' + this.props.email);
    console.log('response password ' + this.props.password);
    const {inputStyle} = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="E-mail"
            style={inputStyle}
            value={this.props.email} // value={this.state.email} mapStateToProps sayesinde burasıda artık stateden degil propstan alınır.
            onChangeText={email => this.props.emailChanged(email)}
          />
        </CardSection>

        <CardSection>
          <TextInput
            secureTextEntry
            placeholder="Şifre"
            style={inputStyle}
            value={this.props.password}
            onChangeText={password => this.props.passwordChanged(password)}
          />
        </CardSection>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
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
// export default connect(
//   null,
//   {emailChanged, passwordChanged},
// )(LoginForm);
//null olan kısıma daha sonra reducersdan donecek olan degerlerin bu component icinde dusecegi method ismi gelecek
//hangi method icinde cıkacaksan onları eklersin bunlarda burada:emailChanged, passwordChanged //aşağıda son hali mevcut

const mapStateToProps = ({AuthenticationResponse}) => {
  const {email, password, loading} = AuthenticationResponse;
  return {
    email,
    password,
    loading,
  };
};
export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged, loginUser},
)(LoginForm);
