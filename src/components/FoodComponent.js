import React from 'react';
import {View, Image, Text} from 'react-native';

function FoodComponent(props) {
  return (
    <View style={{}}>
    <View
      style={{
        padding: 10,
       // borderWidth: 1,
        borderColor: '#000',
        width: 72,
        height: 83,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        //margin:10,
        //backgroundColor:'blue'
      }}>
      <Image
        style={{width: 50, height: 50, borderRadius:5}}
        source={props.image}
      />
      <Text>{props.name}</Text>
    </View>

<View
style={{
  padding: 10,
  //borderWidth: 1,
  borderColor: '#000',
  width: 72,
  height: 83,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:10,
  margin:10
}}>
<Image
  style={{width: 50, height: 50, borderRadius:5}}
  source={props.image}
/>
<Text>{props.name}</Text>
</View>
</View>
  );
}

export default FoodComponent;
