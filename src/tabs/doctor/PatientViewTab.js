import React from 'react';
import {Container, Header, Body, Title, Content, Card, CardItem, Right, Left, Badge,List, Label,
  ListItem,
  View} from 'native-base';
import { Modal, Portal, Text, Button, Provider,RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PatientViewTab({route, navigation}) {
  const {name} = route.params;

  const BradenRiskAssessment = (name) => {
    navigation.navigate(
      'BradenRiskAssessmentScene',
      {name: name},
      //TODO: mock parameter sent to PatientViewScene. All the  reposition data needs to be fetched before that
    );
  };

 
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
  
            <Button style={{marginTop: 75}} onPress={BradenRiskAssessment}>
              Assess Patient's Ulcer Risk
            </Button>
              
    </Container>

       
          
  );
}
