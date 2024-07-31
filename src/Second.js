import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';
import TopRated from './TopRated';
import Popular from './Popular';

const Tab = createBottomTabNavigator();

export default () => {
  const animateW = useSharedValue(0);
  const animateX = useSharedValue(0);
  const animateY = useSharedValue(0);
  const animateZ = useSharedValue(0);

  return (
    <Tab.Navigator
      initialRouteName="Now Playing"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#5F6360',
      }}>
      <Tab.Screen
        name="Now Playing"
        component={NowPlaying}
        listeners={{
          tabPress: e => {
            animateW.value = withTiming(40, {duration: 500});
            animateX.value = withTiming(28, {duration: 500});
            animateY.value = withTiming(28, {duration: 500});
            animateZ.value = withTiming(28, {duration: 500});
          },
        }}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View style={[styles.bottomView]}>
              <Animated.Image
                style={[{width: animateW, height: animateW, resizeMode:'contain'}]}
                tintColor={color}
                source={require('./assets/navigation.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Popular"
        component={Popular}
        listeners={{
          tabPress: e => {
            animateW.value = withTiming(28, {duration: 500});
            animateX.value = withTiming(40, {duration: 500});
            animateY.value = withTiming(28, {duration: 500});
            animateZ.value = withTiming(28, {duration: 500});
          },
        }}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View style={[styles.bottomView]}>
              <Animated.Image
                style={[{width: animateX, height: animateX, resizeMode:'contain'}]}
                tintColor={color}
                source={require('./assets/navigation.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Top Rated"
        component={TopRated}
        listeners={{
          tabPress: e => {
            animateW.value = withTiming(28, {duration: 500});
            animateX.value = withTiming(28, {duration: 500});
            animateY.value = withTiming(40, {duration: 500});
            animateZ.value = withTiming(28, {duration: 500});
          },
        }}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View style={[styles.bottomView]}>
              <Animated.Image
                style={[{width: animateY, height: animateY, resizeMode:'contain'}]}
                tintColor={color}
                source={require('./assets/navigation.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        listeners={{
          tabPress: e => {
            animateW.value = withTiming(28, {duration: 500});
            animateX.value = withTiming(28, {duration: 500});
            animateY.value = withTiming(28, {duration: 500});
            animateZ.value = withTiming(40, {duration: 500});
          },
        }}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View style={[styles.bottomView]}>
              <Animated.Image
                style={[{width: animateZ, height: animateZ, resizeMode:'contain'}]}
                tintColor={color}
                source={require('./assets/navigation.png')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottom: {fontSize: 13, fontWeight: '200', fontFamily: 'Times New Roman'},
  bottomView: {
    marginTop: 20,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
