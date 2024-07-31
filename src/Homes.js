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

function Homes() {

  const animateW = useSharedValue(-1);
  

 const animatedStyleW = useAnimatedStyle(() => {
  return {
    transform : [{ translateX: animateW.value}]
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
           }}
           }
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View>
              <Animated.View  style={[styles.bottomView,animatedStyleW]}>
                <Image
                  style={[styles.bottomImage]}
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
             animateW.value = withTiming(105,{ duration:300})
        }}
        }
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View style={{ marginTop:20}}>
             
              <Text style={[styles.bottom,{color:color}]}>Popular</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Top Rated"
          component={TopRated}
          listeners={{ tabPress :e => {
            animateW.value = withTiming(210,{ duration:300})
           }}
           }
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View style={{ marginTop:20}}>
             
              <Text style={[styles.bottom,{color:color}]}>Top Rated</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Upcoming"
          component={Upcoming}
          listeners={{ tabPress :e => {
            animateW.value = withTiming(320,{ duration:300})
           }}
           }
          options={{
           tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View style={{ marginTop:20}}>
               <Text style={[styles.bottom,{color:color}]}>Upcoming</Text>
               </View>
            ),
          }}
        />
      </Tab.Navigator>
  );
}

export default Homes;

const styles = StyleSheet.create({
  bottom: {fontSize: 13, fontWeight: '900', fontFamily:'Times New Roman', color:'#000'},
  bottomView: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  bottomImage: {height: 20, width: 20}
  
});
