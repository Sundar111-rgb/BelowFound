import React,{ useState } from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Animated, { useSharedValue, interpolate, useAnimatedStyle, withTiming }  from 'react-native-reanimated';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';
import TopRated from './TopRated';
import Popular from './Popular';
import FlatlistScroll from './FlatlistScroll';


const Tab = createBottomTabNavigator();

export default() => {

  
 const animation = useSharedValue(1);
  const [scale, setScale] = useState(0);

  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [1,0],[50, 100])
    const height = interpolate(animation.value, [1,0],[50, 100])

     return {
        width: width,
        height: height
     };
  });
 


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
            animation.value = withTiming(100, { duration:3000})
           }}
           }
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View>
              <Animated.View  style={[styles.bottomView,animatedStyle]}>
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
            animation.value = withTiming(100, { duration:3000})
        }}
        }
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View>
              <Animated.View  style={[styles.bottomView,animatedStyle]}>
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
            animation.value = withTiming(100, { duration:3000})
           }}
           }
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View>
              <Animated.View  style={[styles.bottomView,animatedStyle]}>
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
            animation.value = withTiming(100, { duration:3000})
           }}
           }
          options={{
           tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View>
              <Animated.View  style={[styles.bottomView,animatedStyle]}>
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
    backgroundColor:'red'
  },
  bottomImage: {height: 28, width: 28}
  
});
