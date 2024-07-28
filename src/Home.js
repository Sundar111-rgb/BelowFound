import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';
import TopRated from './TopRated';
import Popular from './Popular';
import FlatlistScroll from './FlatlistScroll';

const Tab = createBottomTabNavigator();

function Home() {

  const animateW = useSharedValue(-3);
  const animateX = useSharedValue(10);
  const animateY = useSharedValue(10);
  const animateZ = useSharedValue(10);


 const animatedStyleW = useAnimatedStyle(() => {
  return {
    transform : [{ translateY: animateW.value}]
  }
 })

 const animatedStyleX = useAnimatedStyle(() => {
  return {
    transform : [{ translateY: animateX.value}]
  }
 })

 const animatedStyleY = useAnimatedStyle(() => {
  return {
    transform : [{ translateY: animateY.value}]
  }
 })

 const animatedStyleZ = useAnimatedStyle(() => {
  return {
    transform : [{ translateY: animateZ.value}]
  }
 })

  return (
      <Tab.Navigator
        initialRouteName="Now Playing"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
        >
        <Tab.Screen
          name="Now Playing"
          component={NowPlaying}
          listeners={{ tabPress :e => {
             animateW.value = withTiming(-3, { duration:300})
             animateX.value = withTiming(10,{ duration:300})
             animateY.value = withTiming(10,{ duration:300})
             animateZ.value = withTiming(10,{ duration:300})
           }}
           }
          options={{
            tabBarLabel: 'Now Playing',
            tabBarIcon: ({color, size}) => (
              <Animated.View  style={[styles.bottomView,animatedStyleW]}>
                <Image
                  style={[styles.bottomImage]}
                  tintColor={color}
                  source={require('./assets/video.png')}
                />
              </Animated.View>
            ),
          }}
        />
        <Tab.Screen
          name="Popular"
          component={Popular}
         listeners={{ tabPress :e => {
             animateW.value = withTiming(10,{ duration:300})
             animateX.value = withTiming(-3, { duration:300})
             animateY.value = withTiming(10,{ duration:300})
             animateZ.value = withTiming(10,{ duration:300})
        }}
        }
          options={{
            tabBarLabel: 'Popular',
            tabBarIcon: ({color, size}) => (
              <Animated.View  style={[styles.bottomView,animatedStyleX]}>
                <Image
                  style={styles.bottomImage}
                  tintColor={color}
                  source={require('./assets/popularity.png')}
                />
              </Animated.View>
            ),
          }}
        />
        <Tab.Screen
          name="Top Rated"
          component={TopRated}
          listeners={{ tabPress :e => {
            animateW.value = withTiming(10,{ duration:300})
            animateX.value = withTiming(10,{ duration:300})
            animateY.value = withTiming(-3, { duration:300})
            animateZ.value = withTiming(10,{ duration:300})
           }}
           }
          options={{
            tabBarLabel: 'Top Rated',
            tabBarIcon: ({color, size}) => (
              <Animated.View  style={[styles.bottomView,animatedStyleY]}>
                <Image
                  style={styles.bottomImage}
                  tintColor={color}
                  source={require('./assets/badge.png')}
                />
              </Animated.View>
            ),
          }}
        />
        <Tab.Screen
          name="Upcoming"
          component={Upcoming}
          listeners={{ tabPress :e => {
            animateW.value = withTiming(10,{ duration:300})
            animateX.value = withTiming(10,{ duration:300})
            animateY.value = withTiming(10,{ duration:300})
            animateZ.value = withTiming(-3, { duration:300})
           }}
           }
          options={{
            tabBarLabel: 'Upcoming',
            tabBarIcon: ({color, size}) => (
              <Animated.View  style={[styles.bottomView,animatedStyleZ]}>
                <Image
                  style={styles.bottomImage}
                  tintColor={color}
                  source={require('./assets/upcoming.png')}
                />
              </Animated.View>
            ),
          }}
        />
      </Tab.Navigator>
  );
}

export default Home;

const styles = StyleSheet.create({
  bottom: {fontSize: 13, fontWeight: 'bold', fontFamily:'Times New Roman'},
  bottomView: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',

  },
  bottomImage: {height: 21, width: 22}
  
});
