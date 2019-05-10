import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #364e68;
  paddingTop: 500px;
`;

const Logo = styled.Image`
  position: absolute;
  width: 300;
  height: 100;
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  color: #d7eaea;
  backgroundColor: 'rgba(225,225,225,0.2)';
  alignSelf: stretch;
  marginBottom: 10;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const ErrorMessage = styled.Text`
  textAlign: center;
  color: #fff;
  fontWeight: bold;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Button = styled.TouchableOpacity`
  padding: 16px;
  borderRadius: 5px;
  backgroundColor: #f06f32;
  alignSelf: stretch;
  margin: 15px;
  marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #FFF7E5;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const SiteInfo = styled.TouchableOpacity`
  padding: 10px;
`;

const SiteInfoText = styled.Text`
  color: #69779b;
  fontWeight: bold;
  fontSize: 11px;
  textAlign: center;
  paddingTop: 10px;
`;

export { Container, Logo, Input, ErrorMessage, Button, ButtonText, SiteInfo, SiteInfoText };
