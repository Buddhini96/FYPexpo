import React from 'react';
import {Container, Header, Body, Title,  Right, Left, Text, Button,
  ListItem,
  View} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function PatientViewTab({route, navigation}) {
  const {name} = route.params;

  const BradenRiskAssessment = (name) => {
    navigation.navigate(
      'BradenRiskAssessmentScene',
      //TODO: mock parameter sent to PatientViewScene. All the  reposition data needs to be fetched before that
    );
  };

  const RepositionHistory = (name) => {
    navigation.navigate(
      'RepositionHistoryScene',
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
  
            <Button  style={{marginTop: 40, marginLeft:25 }} onPress={BradenRiskAssessment}>
              <Text>Assess Patient's Ulcer Risk</Text>
            </Button>

            <Button  style={{marginTop: 10, marginLeft:25 }} onPress={RepositionHistory} >
              <Text>View Reposition History</Text>
            </Button>

            <Button  style={{marginTop: 10, marginLeft:25 }} >
              <Text>View Pressure Distribution</Text>
            </Button>
              
    </Container>

       
          
  );
}
