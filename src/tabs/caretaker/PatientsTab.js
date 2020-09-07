import React from 'react';
import {FlatList, View, SafeAreaView} from 'react-native';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Card,
  CardItem,
  Badge,
  Right,
  Left,
  Text,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DataTable} from 'react-native-paper';
import {SafeAreaFrameContext} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {CountdownComponent} from '../../components/CountdownComponent';


export default function PatientsTab({navigation}) {
  const DATA = [
    {
      id: 1,
      name: 'Erna Blaksland',
      time: 25,
    },
    {
      id: 2,
      name: 'Carline Kupisz',
      time: 35,
    },
    {
      id: 3,
      name: 'Robby Doghartie',
      time: 45,
    },
   
];
  const viewPatient = (name,time) => {
    navigation.navigate(
      'patientViewScene',
      {name: name, time: time},
      
      //TODO: mock parameter sent to PatientViewScene. All the  reposition data needs to be fetched before that
    );
  };

  const renderThis = ({item}) => (
      <Card>
      <CardItem header bordered>
        <Left><Text>{item.name}'s Profile</Text></Left>
        <Right><Text> Bed No : {item.id}</Text></Right>      
      </CardItem>
      <CardItem>
        <Text style={{marginLeft:5}}>Time for Reposition</Text>
        
      </CardItem>
      <CardItem bordered>        
        <CountdownComponent time={item.time}/>
        <Button style={{marginLeft:50, marginTop:15}}><Text>Reset</Text></Button>
      </CardItem>
    </Card>
    
  );

  return (
    <Container>
      <Content>
      <Header>
        <Left>
          <Button>
            <Icon
              name="reorder"
              style={{fontSize: 30, color: 'white'}}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </Button>
        </Left>
        <Body>
          <Title style={{textTransform: 'capitalize'}}>Patients</Title>
        </Body>
        <Right>
          <Icon
            name="hospital-o"
            style={{fontSize: 30, color: '#dff604', marginRight: 5}}
          />
        </Right>
      </Header>

      <View>
        
          <FlatList
            data={DATA}
            renderItem={renderThis}
            keyExtractor={(item) => item.id}
            numColumns={1}
          />
        
      </View>
      </Content>
    </Container>
  );
}
