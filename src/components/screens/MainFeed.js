import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config';
import {PostFeed} from "../container"

class MainFeed extends Component {

    render(){
        return(
            
            <View>
                <View style = {styles.tempNav}>
                    <Text style={{color: "black"}}>Instagram</Text>
                </View>
                <PostFeed />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100+"%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(250, 250, 250)",
        borderBottomWidth: config.styleConstants.borderWidth,
        borderBottomColor: config.styleConstants.borderColor,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MainFeed;