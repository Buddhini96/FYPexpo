import React , { useState } from 'react';
import {Container, Header, Body, Title, Content, Text, Button, Right, Left, Item, Form, List, Label,Picker,
    ListItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,TouchableOpacity, Modal, Alert, TouchableHighlight, } from 'react-native';

export default function RepositionHistoryTab(){

    const [modalVisible, setModalVisible] = useState(false);

    const [value, onValueChange] = useState("15");

    return(
        <View>
            <Header noLeft>
                <Left />
                <Body>
                    <Title style={{textTransform: 'capitalize'}}>Position Changes</Title>
                </Body>
                <Right>
                    <Icon name="bed" style={{fontSize: 30, color: '#e4e213'}} />
                </Right>
            </Header>

            <Button full style={{marginTop:15}} onPress={() => {setModalVisible(true);}}>
                <Text>Set Next Repostioning time</Text>
            </Button>

            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Time Interval wasn't set");
                        setModalVisible(!modalVisible);
                                }}>
      
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center",marginTop: 22}}>                               
                        <View style={{ margin: 20, backgroundColor: "#f0f8ff", borderRadius: 20, padding: 50,
                                    alignItems: "center", shadowColor: "#000", shadowOffset: {width: 0, height: 2},
                                    shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>
                            <Text style={{ marginBottom: 15, textAlign: "center" }}>Set Time Interval in Minutes</Text>

                            <Form style ={{maxWidth:150, marginBottom:15}}> 
                            <Item picker inlineLabel style ={{ borderBottomColor:'#f0f8ff'}}>
                                <Label>Time</Label>
                            
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{width: 100}}
                                selectedValue={value}
                                onValueChange={(value) => {onValueChange(value);}}
                            >
                                <Picker.Item label="15" value="15" />
                                <Picker.Item label="30" value="30" />
                                <Picker.Item label="45" value="45" />
                                <Picker.Item label="60" value="60" />
                                <Picker.Item label="75" value="75" />
                            </Picker>
                            </Item>
                            </Form>
                                                     
                            <TouchableHighlight onPress={() => {setModalVisible(!modalVisible);
                                                                Alert.alert("Reposition the patient in \n"+value+" mins");}}>
                                <Text style={{color:'black'}}>Done</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
            </Modal>

            

        </View>

);
}

    
      
                                        
                                      
    
    
    
    
    
    
    
 