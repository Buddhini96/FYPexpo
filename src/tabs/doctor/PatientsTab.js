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

export default function PatientsTab({navigation}) {
  const DATA = [
    {
      id: 1,
      name: 'Erna Blaksland',
    },
    {
      id: 2,
      name: 'Carline Kupisz',
    },
    {
      id: 3,
      name: 'Robby Doghartie',
    }
   
  ];
  const viewPatient = (name) => {
    navigation.navigate(
      'patientViewScene',
      {name: name},
      //TODO: mock parameter sent to PatientViewScene. All the  reposition data needs to be fetched before that
    );
  };

  const renderThis = ({item}) => (
    <View style={{margin: 15, flexDirection: 'row'}}>
      <Text style={{flex: 1}}>Patient {item.id} </Text>
      <Text style={{flex: 2}}>{item.name} </Text>
      <View style={{flex: 1}}>
        <Button
          onPress={() => viewPatient(item.name)}
          small
          success
          style={{alignSelf: 'flex-end'}}>
          <Text>View</Text>
        </Button>
      </View>
    </View>
  );

  return (
    <Container>
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
    </Container>
  );
}
