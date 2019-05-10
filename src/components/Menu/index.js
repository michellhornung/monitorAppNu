import React from 'react';
import { TouchableOpacity } from 'react-native';

// import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Nav, NavItem, NavText, SignOutButton, SignOutButtonText,
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}
    >
      <Nav>
        <TouchableOpacity>
          <NavItem>
            <Icon name="help-outline" size={20} color="#FFF" />
            <NavText>Me ajuda</NavText>
          </NavItem>
        </TouchableOpacity>

        <TouchableOpacity>
          <NavItem>
            <Icon name="person-outline" size={20} color="#FFF" />
            <NavText>Perfil</NavText>
          </NavItem>
        </TouchableOpacity>

        <TouchableOpacity>
          <NavItem>
            <Icon name="smartphone" size={20} color="#FFF" />
            <NavText>Configurações do app</NavText>
          </NavItem>
        </TouchableOpacity>
      </Nav>

      <SignOutButton onPress={() => { }}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
