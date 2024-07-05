import React from 'react';
import { View, Image, Text } from 'react-native';

export default(props) =>{
    return (
        <View style={{ borderRadius:10, borderWidth:1, borderColor:'grey', padding:10, margin:10, justifyContent:'center', alignItems:'center'}}>
             <Image
        style={{width: 100, height: 100, borderRadius:10}}
        source={require('../assets/food.png')}
      />
      <Text style={{ fontWeight:'bold'}}>Awards '24</Text>
      <Text style={{ fontSize:12 }}>Vote Now</Text>
        </View>
    );
}

 