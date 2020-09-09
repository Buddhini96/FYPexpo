import React, {Component} from 'react';
import { Text,  Modal } from 'react-native';
import {
  Picker,
  Form,
  Button,
  Item,
  Container,
  Input,
  Label,
  CheckBox,
  ListItem,
  Body,
  Header,
  Left,
  Title,
  Content,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from '../styles/SignUpStyles';
import { TextInput } from 'react-native-paper';

class SignUpScene extends Component {
  state = {
    selected: undefined,
    checked: false,
    secureEntry: true,
    modalVisible: false,
    username: false,
    password: '',
    repassword:'',
    email:'',
    phoneno: 123456,
    validationSuccess: false
    
  };
  

  changeChecked = () => {
    this.setState({checked: !this.state.checked});
  };

  changeValue = (value) => {
    this.setState({
      selected: value,
    });
  };

  formValidation = () =>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*$/;
    const phonenumber = /^\d{10}$/;
    if(!this.state.username){
      alert("Enter a Username")
    }
    else if (!(this.state.phoneno.match(phonenumber))){
      alert("Enter a valid phone number : "+this.state.phoneno)
    }    
    else if (reg.test(this.state.email) === false){
      alert("This is an invalid email : "+ this.state.email);
    }
    else if(!this.state.password === this.state.repassword){
      alert("Re-Entered Password do not match");
    }
    else{
      alert("You Signed up");
    }
      
  };
    
    
  

  render() {
    return (
      <Container style={styles.top}>
        <Modal animationType="fade" visible={this.state.modalVisible}>
          <Container>
            <Header>
              <Left>
              <Button transparent onPress={() => {
                this.setState({modalVisible: false});
              }}>
              <Icon style={{fontSize:20}} name="arrow-left"/>
              </Button>
              </Left>
              <Body>
                <Title>Terms & Conditions</Title>
              </Body>
            </Header>
            <Content>
              <Text>Modal Body</Text>
            </Content>
          </Container>
        </Modal>

        <Text style={styles.textContainer}>Create An Account</Text>
        <Form style={styles.Form}>
          <Item picker inlineLabel>
            <Label>Create As</Label>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Proceed As"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected}
              onValueChange={this.changeValue.bind(this)}>
              <Picker.Item label="Patient" value="key0" />
              <Picker.Item label="Caretaker " value="key1" />
              <Picker.Item label="Doctor" value="key2" />
            </Picker>
          </Item>

          <Item inlineLabel>
            <Icon style={styles.icon} name="user" />
            <Input placeholder="Username" 
                   value={this.state.username}
                   onChangeText={(username) => this.setState({username})}/>
          </Item>
          
          

          <Item inlineLabel>
            <Icon style={styles.icon} name="phone-square" />
            <Input keyboardType="number-pad" placeholder="Phone Number"
            value={this.state.phoneno}
            onChangeText={(phoneno) => this.setState({phoneno})} />
          </Item>

          <Item inlineLabel>
            <Icon style={styles.icon} name="at" />
            <Input  placeholder="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})} />
          </Item>

          <Item inlineLabel>
            <Icon style={styles.icon} name="key" />
            <Input
              secureTextEntry={this.state.secureEntry}
              placeholder="Password"
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
            />
            <Button
              transparent
              style={styles.eye}
              onPress={() =>
                this.setState({secureEntry: !this.state.secureEntry})
              }>
              {this.state.secureEntry ? (
                <Icon style={{fontSize: 20}} name="eye-slash" />
              ) : (
                <Icon style={{fontSize: 20}} name="eye" />
              )}
            </Button>
          </Item>

          <Item inlineLabel>
            <Icon style={styles.icon} name="key" />
            <Input
              secureTextEntry={this.state.secureEntry}
              placeholder="Re-Enter Password"
              value={this.state.repassword}
              onChangeText={(repassword) => this.setState({repassword})}
            />

          </Item>

          <ListItem>
            <CheckBox
              checked={this.state.checked}
              onPress={this.changeChecked}
            />
            <Body>
              <Text style={styles.subText}>
                I Agree to the{' '}
                <Text
                  onPress={() => {
                    this.setState({modalVisible: true});
                  }}
                  style={styles.link}>
                  Terms and Conditions
                </Text>
              </Text>
            </Body>
          </ListItem>

          {this.state.checked ? (
            <Button primary block style={styles.button} onPress={this.formValidation} >
            <Text style={styles.buttonText}>Sign Up</Text>
            </Button>
            ) : (
            <Button disabled style={styles.button} >
                <Text style={{marginLeft:55}}>Sign Up</Text>
            </Button>
          )}
        </Form>
      </Container>
    );
  }
}

export default SignUpScene;

//onPress={() => alert("Username is " + this.state.username)}
//
//<Icon name='close-circle' />

 