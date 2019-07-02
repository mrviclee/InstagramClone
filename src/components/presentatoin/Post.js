import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config';


class Post extends Component {

    constructor(){
        super();
        this.state={
            liked: false,
            screenWidth: Dimensions.get("window").width
        }
    }

    // Method: When user hit the image change the heart icon color
    likedToggle() {
        this.setState({
            liked: !this.state.liked
        })
    }

    render(){
        const imageHeight = Math.floor(this.state.screenWidth * 1.25);
        const imageSelection = this.props.item % 2 === 0 ? "https://lh3.googleusercontent.com/wJ85UljX6oGinTeC79V_-WatWqRr1TcnmHc7CS1cWPmeEmsbc0_r2Niv8RGJtTogE5xL6F9_qm0g0UWSqG6J3XEr"
        :  "https://lh3.googleusercontent.com/kGOciFIGO-wJfyou0m-LhSdRV4cAKo3uVQ23kkwu0No6YxBldIt4VWLl_-IeHFytXG8OxJXUrs4OZ9dpPkqHBvJ7"
        let imageUri = imageSelection
                +"=s" + imageHeight.toString() + "-c";


        const heartColor = this.state.liked ? "rgb(252, 61, 57)": null;
        return(
            
            <View>
                <View style={styles.userBar}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image 
                            style={styles.userPic}
                            source={{
                                uri: "https://lh3.googleusercontent.com/ms8TJFAMWkZ4M55nkBFGnD9xsI5F8aBhuKMnNxNEqhuJsDTatbWOHyxB_Pa0QnmDxaS-QuF4Z3pL3TW98Kf4IJk3Tw"
                            }}
                        />
                        <Text style={{marginHorizontal: 15}}>Vic Lee</Text>
                     </View>
                     <View >
                         <Text style={{fontSize: 30, color: "black"}}>...</Text>
                     </View>
                </View>
                <TouchableOpacity
                    activeOpacity={.9}
                    onPress={()=>{
                        this.likedToggle();
                    }}
                >
                <Image
                    style = {{width: this.state.screenWidth, height: imageHeight}}
                    source={{
                        uri: imageUri
                    }}
                />
                </TouchableOpacity>
                <View style = {styles.iconBar}>
                    <Image //Heart Icon
                        style={[styles.icons, {height: 45, width: 45, tintColor: heartColor}]} source={config.image.heartIcon}/>
                    <Image // Message Icon
                        style={[styles.icons, {height: 40, width: 40}]} source={config.image.messageIcon}
                    />
                    <Image // Share Icon
                        style={[styles.icons, {height: 40, width: 40}]} source={config.image.shareIcon}
                    />
                </View>
                <View style= {styles.commentBar}>
                    <Image style={styles.icons}source={config.image.likeIcon}/>
                    <Text style={styles.icons}>7 likes</Text>
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userBar:{
        width: 100+"%",
        height: 60,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,

    },
    userPic: {
        height: 50,
        width: 50,
        borderRadius: 30,
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100+"%",
        flexDirection: "row",
        borderBottomColor: config.styleConstants.borderColor,
        borderTopWidth: config.styleConstants.borderWidth,
        borderBottomWidth: config.styleConstants.borderWidth,
        alignItems: "center"
    },

    icons: {
        marginLeft: 5
    },

    commentBar: {
        width: 100+"%",
        height: config.styleConstants.rowHeight,
        borderBottomColor: config.styleConstants.borderColor,
        borderTopWidth: config.styleConstants.borderWidth,
        borderBottomWidth: config.styleConstants.borderWidth,
        flexDirection: "row",
        alignItems: "center"
    }
})

export default Post;