import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, TabsContainer, TabItem, TabItemRed, TabItemYellow, TabText,
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
        <TouchableOpacity>
          <TabItemRed>
            <Icon name="business-center" size={24} color="#FFF" />
            <TabText>LH TEC</TabText>
          </TabItemRed>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <TabItemYellow>
            <Icon name="business-center" size={24} color="#FFF" />
            <TabText>DKVOX</TabText>
          </TabItemYellow>
        </TouchableOpacity>

        <TouchableOpacity>
          <TabItem>
            <Icon name="business-center" size={24} color="#FFF" />
            <TabText>RESLUT</TabText>
          </TabItem>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <TabItem>
          <Icon name="business-center" size={24} color="#FFF" />
          <TabText>YYZ</TabText>
        </TabItem>
        </TouchableOpacity>

        <TouchableOpacity>
          <TabItem>
            <Icon name="business-center" size={24} color="#FFF" />
            <TabText>HAMMERCO</TabText>
          </TabItem>
        </TouchableOpacity>
      </TabsContainer>
    </Container>
  );
}
