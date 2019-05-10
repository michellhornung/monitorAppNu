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

const SuccessMessage = styled.Text`
  textAlign: center;
  color: #08a092;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #fff;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const ErrorMessage = styled.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Button = styled.TouchableHighlight`
  padding: 20px;
  borderRadius: 5px;
  backgroundColor: #fc6663;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const SignInLink = styled.TouchableHighlight`
  padding: 10px;
  marginTop: 700px;
`;

const SignInLinkText = styled.Text`
  color: #000;
  fontSize: 12px;
  textAlign: center;
`;

export {
  Container,
  Logo,
  SuccessMessage,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignInLink,
  SignInLinkText,
};
