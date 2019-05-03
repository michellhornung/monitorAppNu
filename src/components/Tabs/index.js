import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, TabsContainer, TabItem, TabItemRed, TabText,
} from './styles';

export default function Tabs({ translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        }),
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      }),
    }}
    >
      <TabsContainer>
        <TabItemRed>
          <Icon name="business-center" size={24} color="#FFF" />
          <TabText>LH TEC</TabText>
        </TabItemRed>
        <TabItem>
          <Icon name="business-center" size={24} color="#FFF" />
          <TabText>DKVOX</TabText>
        </TabItem>
        <TabItem>
          <Icon name="business-center" size={24} color="#FFF" />
          <TabText>RESLUT</TabText>
        </TabItem>
        <TabItem>
          <Icon name="business-center" size={24} color="#FFF" />
          <TabText>YYZ</TabText>
        </TabItem>
        <TabItem>
          <Icon name="business-center" size={24} color="#FFF" />
          <TabText>HAMMERCO</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
