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

export default() => {

  const animateW = useSharedValue("0deg");
  const animateX = useSharedValue("180deg");
  const animateY = useSharedValue("180deg");
  const animateZ = useSharedValue("180deg");


 const animatedStyleW = useAnimatedStyle(() => {
  return {
    transform : [{ rotateZ: animateW.value}]
  }
 })

 const animatedStyleX = useAnimatedStyle(() => {
  return {
    transform : [{ rotateZ: animateX.value}]
  }
 })

 const animatedStyleY = useAnimatedStyle(() => {
  return {
    transform : [{ rotateZ: animateY.value}]
  }
 })

 const animatedStyleZ = useAnimatedStyle(() => {
  return {
    transform : [{ rotateZ: animateZ.value}]
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
             animateW.value = withTiming('0',{ duration:300})
             animateX.value = withTiming('180deg',{ duration:300})
             animateY.value = withTiming('180deg',{ duration:300})
             animateZ.value = withTiming('180deg',{ duration:300})
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
                  source={require('./assets/navigation.png')}
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
             animateW.value = withTiming('180deg',{ duration:300})
             animateX.value = withTiming(0, { duration:300})
             animateY.value = withTiming('180deg',{ duration:300})
             animateZ.value = withTiming('180deg',{ duration:300})
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
                  source={require('./assets/navigation.png')}
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
            animateW.value = withTiming('180deg',{ duration:300})
            animateX.value = withTiming('180deg',{ duration:300})
            animateY.value = withTiming(0, { duration:300})
            animateZ.value = withTiming('180deg',{ duration:300})
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
                  source={require('./assets/navigation.png')}
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
            animateW.value = withTiming('180deg',{ duration:300})
            animateX.value = withTiming('180deg',{ duration:300})
            animateY.value = withTiming('180deg',{ duration:300})
            animateZ.value = withTiming(0, { duration:300})
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
                  source={require('./assets/navigation.png')}
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



const styles = StyleSheet.create({
  bottom: {fontSize: 13, fontWeight: '200', fontFamily:'Times New Roman'},
  bottomView: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',

  },
  bottomImage: {height: 28, width: 28}
  
});
