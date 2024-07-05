import React from 'react';
import { Text, View } from 'react-native';

export default (props) => {
    return (
        <View style={{ marginHorizontal:3,width:65, height:28,padding:1, borderColor:'#000', borderWidth:1, borderRadius:7, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ fontSize:8}}>{props.name}</Text>
        </View>
    );
}

