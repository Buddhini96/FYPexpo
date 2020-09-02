import React from 'react';
import {Container, Header, Body, Title, Content, Card, CardItem, Right, Left, List, Label,
    ListItem,
    View} from 'native-base';
import {Text, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BradenRiskAssessmentTab(){


  const [sensory_value, set_Sensory_Value] = React.useState();
  const [moisture_value, set_Moisture_Value] = React.useState();
  const [activity_value, set_Activity_Value] = React.useState();
  const [mobility_value, set_Mobility_Value] = React.useState();
  const [nutrition_value, set_Nutrition_Value] = React.useState();
  const [friction_value, set_Friction_Value] = React.useState();

return(
    
        <Container>
            <Header noLeft>
          <Left />
          <Body>
            <Title style={{textTransform: 'capitalize'}}>Ulcer Risk</Title>
          </Body>
          <Right>
            <Icon name="bed" style={{fontSize: 30, color: '#e4e213'}} />
          </Right>
        </Header>  
    <Card style={{borderColor:'#0000ff', paddingRight:1}}>                
    <CardItem header ><Title style = {{color:'#0000ff'}}>Braden Risk Assessment Scale</Title></CardItem>
    <CardItem ><Text>Score the condition of the patient based on a scale of 1-4
                  in the categories given below</Text></CardItem>
    <CardItem><Text style={{marginBottom: 1}}>1 - Completely limited{"\n"}2 - Very limited{"\n"}
                3 - Slightly limited{"\n"}4 - No impairment
                </Text></CardItem>
    <CardItem>                  
        <List>
            <ListItem >
                <Label style={{flex:5, fontSize: 15}} >Sensory Perception</Label>
                    <RadioButton.Group style={{flex:3}}
                       onValueChange={value => set_Sensory_Value(value)} value={sensory_value}>          
                            <RadioButton value="1" /> 
                                <Text>1</Text>           
                            <RadioButton value="2" />
                                <Text>2</Text>
                            <RadioButton value="3" /> 
                                <Text>3</Text>           
                            <RadioButton value="4" />
                                <Text>4</Text>                          
                    </RadioButton.Group>                    
            </ListItem>

            <ListItem>
                <Label style={{ fontSize: 15,flex:1}}>Moisture</Label>
                    <RadioButton.Group style={{flex:1}} onValueChange={value => set_Moisture_Value(value)} value={moisture_value}>          
                            <RadioButton value="1" /> 
                                <Text>1</Text>           
                            <RadioButton value="2" />
                                <Text>2</Text>
                            <RadioButton value="3" /> 
                                <Text>3</Text>           
                            <RadioButton value="4" />
                                <Text>4</Text>                          
                    </RadioButton.Group> 
            </ListItem>

            <ListItem>
                <Label style={{flex:1, fontSize: 15}}>Activity</Label>
                    <RadioButton.Group style={{flex:1}} onValueChange={value => set_Activity_Value(value)} value={activity_value}>          
                            <RadioButton value="1" /> 
                                <Text>1</Text>           
                            <RadioButton value="2" />
                                <Text>2</Text>
                            <RadioButton value="3" /> 
                                <Text>3</Text>           
                            <RadioButton value="4" />
                                <Text>4</Text>                          
                    </RadioButton.Group>
            </ListItem>

            <ListItem>
                <Label style={{flex:1, fontSize: 15}}>Mobility</Label>
                      <RadioButton.Group style={{flex:1}} onValueChange={value => set_Mobility_Value(value)} value={mobility_value}>          
                            <RadioButton value="1" /> 
                                <Text>1</Text>           
                            <RadioButton value="2" />
                                <Text>2</Text>
                            <RadioButton value="3" /> 
                                <Text>3</Text>           
                            <RadioButton value="4" />
                                <Text>4</Text>                          
                      </RadioButton.Group>  
            </ListItem>

            <ListItem>
                <Label style={{flex:1, fontSize: 15}}>Nutrition</Label>
                      <RadioButton.Group style={{flex:1}} onValueChange={value => set_Nutrition_Value(value)} value={nutrition_value}>          
                            <RadioButton value="1" /> 
                                <Text>1</Text>           
                            <RadioButton value="2" />
                                <Text>2</Text>
                            <RadioButton value="3" /> 
                                <Text>3</Text>           
                            <RadioButton value="4" />
                                <Text>4</Text>                          
                      </RadioButton.Group> 
            </ListItem>

            <ListItem>
                <Label style={{  fontSize: 15}}>Friction and Shear</Label>
                        <RadioButton.Group style={{paddingLeft:5}} onValueChange={value => set_Friction_Value(value)} value={friction_value}>          
                            <RadioButton value="1" /> 
                                <Text>1</Text>           
                            <RadioButton value="2" />
                                <Text>2</Text>
                            <RadioButton value="3" /> 
                                <Text>3</Text>           
                            <RadioButton value="4" />
                                <Text>4</Text>                          
                      </RadioButton.Group> 
            </ListItem>

        </List>
     </CardItem>

                
    <CardItem footer button onPress={() => alert("{ "+"Sensory Perception : "+sensory_value+
                                                ", Moisture : "+moisture_value + ", Activity : "+activity_value+
                                                ", Mobility : "+mobility_value+ ", Nutrition : "+ nutrition_value
                                                +", Friction and Shear : "+friction_value+"}")}><Body>
        <Text style={{marginLeft:150, marginBottom:18, color:'#0000ff'}}>Submit</Text></Body></CardItem>    
</Card>
</Container>


);
}
