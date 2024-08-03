import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default(props) => {
  const [open, setOpen] = useState(true);
  const animateW = useSharedValue(0);
  const animateX = useSharedValue(0);
  const animateY = useSharedValue(0);
  const animateZ = useSharedValue(0);

  const animateWW = useSharedValue(0);
  const animateXX = useSharedValue(0);
  const animateYY = useSharedValue(0);
  const animateZZ = useSharedValue(0);

  const animatedStyleW = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animateW.value}, {translateX: animateWW.value}],
    };
  });

  const animatedStyleX = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animateX.value}, {translateX: animateXX.value}],
    };
  });

  const animatedStyleY = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animateY.value}, {translateX: animateYY.value}],
    };
  });

  const animatedStyleZ = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animateZ.value}, {translateX: animateZZ.value}],
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:'##9247de'}}>
      <Animated.View style={[styles.bottomView, animatedStyleW]}>
        <Image
          style={[styles.bottomImage]}
          source={require('./assets/facebook.png')}
        />
      </Animated.View>

      <Animated.View style={[styles.bottomView, animatedStyleX]}>
        <Image
          style={[styles.bottomImage]}
          source={require('./assets/twitter.png')}
        />
      </Animated.View>

      <Animated.View style={[styles.bottomView, animatedStyleY]}>
        <Image
          style={[styles.bottomImage]}
          source={require('./assets/instagram.png')}
        />
      </Animated.View>

      <Animated.View style={[styles.bottomView, animatedStyleZ]}>
        <Image
          style={[styles.bottomImage]}
          source={require('./assets/whatsapp.png')}
        />
      </Animated.View>

      <TouchableOpacity
        style={[styles.bottomVieww]}
        onPress={() => {
          setOpen(!open);
          animateW.value = open
            ? withTiming(-70, {duration: 300})
            : withTiming(0, {duration: 300});
          animateWW.value = open
            ? withTiming(-80, {duration: 300})
            : withTiming(0, {duration: 300});

          animateX.value = open
            ? withTiming(-70, {duration: 700})
            : withTiming(0, {duration: 700});
          animateXX.value = open
            ? withTiming(70, {duration: 700})
            : withTiming(0, {duration: 700});

          animateY.value = open
            ? withTiming(80, {duration: 1200})
            : withTiming(0, {duration: 1200});
          animateYY.value = open
            ? withTiming(-80, {duration: 1200})
            : withTiming(0, {duration: 1200});

          animateZ.value = open
            ? withTiming(80, {duration: 1300})
            : withTiming(0, {duration: 1300});
          animateZZ.value = open
            ? withTiming(70, {duration: 1300})
            : withTiming(0, {duration: 1300});
        }}>
        <Image
          style={[styles.bottomImagee]}
          source={require('./assets/share.png')}
        />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  bottomView: {
    height: 60,
    width: 60,
     backgroundColor: '#2495d1',
     borderRadius: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2
  },

  bottomVieww: {
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomImage: {height: 50, width: 50, position: 'absolute'},
  bottomImagee: {height: 30, width: 30, position: 'absolute'},
});
