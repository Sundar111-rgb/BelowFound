import React from 'react';
import {View, Image, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Delivery from './Delivery';
import Dining from './Dining';
import Money from './Money';

import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Delivery"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Delivery"
        component={Delivery}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                width: 65,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'blue',
              }}>
              <Image
                style={{height: 20, width: 20}}
                tintColor={color}
                source={require('./assets/delivery.png')}
              />
              <Text style={{color: color}}>Delivery</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Dining"
        component={Dining}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                width: 65,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'blue',
              }}>
              <Image
                style={{height: 20, width: 20}}
                tintColor={color}
                source={require('./assets/food-tray.png')}
              />
              <Text style={{color: color}}>Dining</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Money"
        component={Money}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                width: 65,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'blue',
              }}>
              <Image
                style={{height: 20, width: 20}}
                tintColor={color}
                source={require('./assets/wallet.png')}
              />
              <Text style={{color: color}}>Money</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Home;
