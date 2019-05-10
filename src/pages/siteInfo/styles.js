import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #f5f5f5;
`;

const Logo = styled.Image`
  height: 100;
  width: 300;
  marginBottom: 40px;
  position: absolute;
`;

const Version = styled.Text`
  color: #000;
  fontSize: 12px;
  textAlign: center;
  
`;

const SignInLink = styled.TouchableOpacity`
  padding: 10px;
  marginTop: 200px;
`;

const SignInLinkText = styled.Text`
  color: #000;
  fontSize: 12px;
  textAlign: center;
`;

export {
  Container,
  Logo,
  SignInLink,
  SignInLinkText,
  Version,
};
