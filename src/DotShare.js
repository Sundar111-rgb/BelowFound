import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function DotShare(props) {
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
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:'#ccc'}}>
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
            ? withTiming(70, {duration: 300})
            : withTiming(0, {duration: 300});

          animateX.value = open
            ? withTiming(-20, {duration: 400})
            : withTiming(0, {duration: 400});
          animateXX.value = open
            ? withTiming(70, {duration: 400})
            : withTiming(0, {duration: 400});

          animateY.value = open
            ? withTiming(30, {duration: 500})
            : withTiming(0, {duration: 500});
          animateYY.value = open
            ? withTiming(70, {duration: 500})
            : withTiming(0, {duration: 500});

          animateZ.value = open
            ? withTiming(80, {duration: 600})
            : withTiming(0, {duration: 600});
          animateZZ.value = open
            ? withTiming(70, {duration: 600})
            : withTiming(0, {duration: 600});
        }}>
        <Image
          style={[styles.bottomImagee]}
          source={require('./assets/share.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default DotShare;

const styles = StyleSheet.create({
  bottomView: {
    height: 50,
    width: 50,
    // backgroundColor: 'red',
    // borderRadius: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomVieww: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 30,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomImage: {height: 30, width: 30, position: 'absolute'},
  bottomImagee: {height: 30, width: 30, position: 'absolute'},
});
