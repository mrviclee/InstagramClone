import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { MainFeed, Login, Profile, Camera, Register } from "./components/screens";
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";

const Tabs = createBottomTabNavigator({
    Feed: MainFeed,
    Profile: Profile,
    Camera: Camera,
})

const Intro = createStackNavigator({
    Login: {screen: Login},
    Register: {screen: Register}
})
const MainStack = createSwitchNavigator({
    Intro: Intro,
    Home: Tabs

})

const AppContainer = createAppContainer(MainStack)

class InstaClone extends Component {
  render() {
    return <AppContainer />;
  }
}

export default InstaClone;
