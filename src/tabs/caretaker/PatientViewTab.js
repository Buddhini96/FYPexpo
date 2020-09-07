import React, { useState, useEffect } from 'react';
import CountDown from 'react-native-countdown-component';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Card,
  CardItem,
  Right,
  Left,
  Text,
  Button,
  Badge,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PatientViewTab({route, navigation}) {
  const {name} = route.params;  
  
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(true);
  const [hue, setHue] = useState('#00ff00');

  useEffect(() => {
    let interval = null;
    if (seconds === 0) {
      setIsActive(false);
      clearInterval(interval);
    } 
    else if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      if (seconds < 12 && seconds>7){
        setHue('#ff7f50');
      }
      else if (seconds < 7){
        setHue('red');
      }
    }  
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <Container>
      <Header noLeft>
        <Left />
        <Body>
          <Title style={{textTransform: 'capitalize'}}>Patient</Title>
        </Body>
        <Right>
          <Icon name="bed" style={{fontSize: 30, color: '#e4e213'}} />
        </Right>
      </Header>

  

    <Content>
        <Title style={{marginLeft:25, marginTop:25, marginBottom:25, color:"black"}}> {name}'s Profile</Title>
        <Text style={{marginLeft:30, marginBottom:40}}>Time for Next Repositioning : </Text>
        <CountDown
        size={30}
        until={20}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: hue}}
        digitTxtStyle={{color: hue}}
        timeLabelStyle={{color: hue, fontWeight: 'bold'}}
        separatorStyle={{color:hue}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{h: 'HH', m: 'MM', s: 'SS'}}
        showSeparator
      /> 
      

    </Content>

    
      
    </Container>
  );
}


