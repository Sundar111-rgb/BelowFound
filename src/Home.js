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

  const animateW = useSharedValue(-1);
  const animateX = useSharedValue(12);
  const animateY = useSharedValue(12);
  const animateZ = useSharedValue(12);


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
          tabBarInactiveTintColor: '#5F6360'
        }}
        >
        <Tab.Screen
          name="Now Playing"
          component={NowPlaying}
          listeners={{ tabPress :e => {
             animateW.value = withTiming(-1,{ duration:300})
             animateX.value = withTiming(12,{ duration:300})
             animateY.value = withTiming(12,{ duration:300})
             animateZ.value = withTiming(12,{ duration:300})
           }}
           }
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View>
              <Animated.View  style={[styles.bottomView,animatedStyleW]}>
                <Image
                  style={[styles.bottomImage]}
                  tintColor={color}
                  source={require('./assets/video.png')}
                />
              </Animated.View>
              <Text style={[styles.bottom,{color:color}]}>Now Playing</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Popular"
          component={Popular}
         listeners={{ tabPress :e => {
             animateW.value = withTiming(12,{ duration:300})
             animateX.value = withTiming(-1, { duration:300})
             animateY.value = withTiming(12,{ duration:300})
             animateZ.value = withTiming(12,{ duration:300})
        }}
        }
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View>
              <Animated.View  style={[styles.bottomView,animatedStyleX]}>
                <Image
                  style={styles.bottomImage}
                  tintColor={color}
                  source={require('./assets/popularity.png')}
                />
              </Animated.View>
              <Text style={[styles.bottom,{color:color}]}>Popular</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Top Rated"
          component={TopRated}
          listeners={{ tabPress :e => {
            animateW.value = withTiming(12,{ duration:300})
            animateX.value = withTiming(12,{ duration:300})
            animateY.value = withTiming(-1, { duration:300})
            animateZ.value = withTiming(12,{ duration:300})
           }}
           }
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View>
              <Animated.View  style={[styles.bottomView,animatedStyleY]}>
                <Image
                  style={styles.bottomImage}
                  tintColor={color}
                  source={require('./assets/badge.png')}
                />
              </Animated.View>
              <Text style={[styles.bottom,{color:color}]}>Top Rated</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Upcoming"
          component={Upcoming}
          listeners={{ tabPress :e => {
            animateW.value = withTiming(12,{ duration:300})
            animateX.value = withTiming(12,{ duration:300})
            animateY.value = withTiming(12,{ duration:300})
            animateZ.value = withTiming(-1, { duration:300})
           }}
           }
          options={{
           tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View>
              <Animated.View  style={[styles.bottomView,animatedStyleZ]}>
                <Image
                  style={styles.bottomImage}
                  tintColor={color}
                  source={require('./assets/upcoming.png')}
                />
              </Animated.View>
               <Text style={[styles.bottom,{color:color}]}>Upcoming</Text>
               </View>
            ),
          }}
        />
      </Tab.Navigator>
  );
}

export default Home;

const styles = StyleSheet.create({
  bottom: {fontSize: 13, fontWeight: '200', fontFamily:'Times New Roman'},
  bottomView: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',

  },
  bottomImage: {height: 21, width: 22}
  
});
