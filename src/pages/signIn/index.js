import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import api from '../../services/api';

import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SiteInfo,
  SiteInfoText,
} from './styles';

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: 'michell@lh.com.br',
    password: '123456',
    error: '',
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleOpenSiteInfo = () => {
    this.props.navigation.navigate('SiteInfo');
  };

  handleFakeLogon = () => {
    this.props.navigation.navigate('Main');
  };

  handleSignInPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
    } else {
      try {
        const response = await api.post('/sessions', {
          email: this.state.email,
          password: this.state.password,
        });

        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Main', params: { token: response.data.token } }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      } catch (_err) {
        this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
      }
    }
  };

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Logo source={require('../../assets/logo-lh.png')} resizeMode="contain" />
        <Input
          placeholder="Endereço de e-mail"
          placeholderTextColor='rgba(225,225,225,0.7)'
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry
        />
        {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
        <Button onPress={this.handleFakeLogon}>
          <ButtonText>LOGIN</ButtonText>
        </Button>
        <SiteInfo onPress={this.handleOpenSiteInfo}>
          <SiteInfoText>lh.com.br 2019®</SiteInfoText>
        </SiteInfo>
      </Container>
    );
  }
}
