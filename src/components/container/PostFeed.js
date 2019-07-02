import React, { Component } from "react";
import {FlatList} from "react-native";
import {Post} from "../presentatoin";

class PostFeed extends Component {
    _renderPost({item}) {
        return <Post  item = {item}/>;
    }
    _renderKey(item) {
        return item.toString();
    }

    render(){
        return(
            <FlatList
            data = {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
            keyExtractor={this._renderKey}
            renderItem={this._renderPost}
            />
        )
    }
}

export default PostFeed;