import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";

class Register extends Component {
  //this function will navigate to the main screen of the app
  register(){
    // send crenditals to the server
    // if sign up succeed
    this.props.navigation.navigate("Home");
    // else send the error message
  }

  render() {
    return (
      <View style={{
        width: 100+"%",
        height: 100+"%",
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
        }}
        
        //onPress={() => this.register()}
        >
        <Text>Register Page</Text>
        <TextInput></TextInput>
    
        <TextInput></TextInput>
        <Button
          title={}
        ></Button>
      </View>
    );
  }
}

export default Register;
