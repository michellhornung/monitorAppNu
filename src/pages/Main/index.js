import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container, Content, Card, CardWithError, CardHeader, CardContent, CardFooter, Title, Description, Annotation,
} from './styles';

let offset = 0;
const Main = () => (
  <Container>
    <Header />
    <Content>
      <Menu translateY={translateY} />

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}
      >

{/* HERE COMES THE LOGIC TO SHOW GREEN OR RED CARD  */}

        {/* <Card style={{
          transform: [{
            translateY: translateY.interpolate({
              inputRange: [-350, 0, 380],
              outputRange: [-50, 0, 380],
              extrapolate: 'clamp',
            }),
          }],
        }}
        >
          <CardHeader>
            <Icon name="mood" size={35} color="#fff" />
          </CardHeader>
          <CardContent>
            <Title>Just Relax!</Title>
            <Description>Todos os serviços rodando. Não temos problemas.</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Estamos a 100 dias sem registro de problema. Último registro foi dia 00/00/0000 às 00:00 horas.
            </Annotation>
          </CardFooter>
        </Card> */}


        <CardWithError style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }],
          }}
          >
            <CardHeader>
              <Icon name="mood-bad" size={35} color="#fff" />
            </CardHeader>
            <CardContent>
              <Title>Houston we have a problem!</Title>
              <Description>Existem serviços à serem analisados e corrigidos.</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Estamos a 0 dias sem um problema. Último registro foi dia 00/00/0000 às 00:00 horas.
              </Annotation>
            </CardFooter>

          </CardWithError>

      </PanGestureHandler>
    </Content>
    <Tabs translateY={translateY} />
  </Container>
);

const translateY = new Animated.Value(0);
const animatedEvent = Animated.event(
  [
    {
      nativeEvent: {
        translationY: translateY,
      },
    },
  ],
  { useNativeDriver: true },
);

Main.navigationOptions = {
  header: null,
};

function onHandlerStateChanged(event) {
  if (event.nativeEvent.oldState === State.ACTIVE) {
    let opened = false;
    const { translationY } = event.nativeEvent;

    offset += translationY;

    if (translationY >= 100) {
      opened = true;
    } else {
      translateY.setValue(offset);
      translateY.setOffset(0);
      offset = 0;
    }

    Animated.timing(translateY, {
      toValue: opened ? 380 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      offset = opened ? 380 : 0;
      translateY.setOffset(offset);
      translateY.setValue(0);
    });
  }
}

export default Main;