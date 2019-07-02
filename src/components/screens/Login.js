import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Login extends Component {
  //this function will navigate to the main screen of the app
  login(){
    this.props.navigation.navigate("Register");
  }

  render() {
    return (
      <TouchableOpacity style={{
        width: 100+"%",
        height: 100+"%",
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
        }}
        
        onPress={() => this.login()}
        >
        <Text>Log In</Text>
      </TouchableOpacity>
    );
  }
}

export default Login;
