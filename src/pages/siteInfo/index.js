import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import {
  Container,
  Logo,
  SignInLink,
  SignInLinkText,
  Version,
} from './styles';

export default class SiteInfo extends Component {
  static navigationOptions = {
    header: null,
  };
  
  handleBackToLoginPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Logo source={require('../../assets/logo-monitor-02.png')} resizeMode="contain" />        
        <Version>
            Versão: 1.0.007
            MonitorApp
        </Version>  
        <SignInLink onPress={this.handleBackToLoginPress}>
          <SignInLinkText>Voltar ao login</SignInLinkText>
        </SignInLink> 
      </Container>
    );
  }
}
