import React, {useState, useRef} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import FoodComponent from './components/FoodComponent';
import OptionTabs from './components/OptionTabs';
import CardComponView from './components/CardComponent';
import FoodCartComponent from './components/FoodCartComponent';
import RBSheet from 'react-native-raw-bottom-sheet';

export default () => {
  const [all, setAll] = useState(true);
  const refRBSheet = useRef();


  return (
      <ScrollView style={{ width:'100%', height:'100%', backgroundColor:'#fff'}}>
        <RBSheet
        ref={refRBSheet}
        //useNativeDriver={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <View>
        <Text>Hello</Text>
        </View>
      </RBSheet>
      <View
        style={{
          width: '99%',
          // backgroundColor: 'green',
          flexDirection: 'row',
          height: '5%',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '50%',
            height: '100%',
            //backgroundColor: 'red',
            flexDirection: 'row',
            alignSelf: 'flex-start',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Image
              source={require('./assets/location-pin.png')}
              style={{height: 20, width: 14}}
            />
          </View>

          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                {' '}
                Purandarpur{' '}
              </Text>
              <Image
                source={require('./assets/down-arrow.png')}
                style={{height: 12, width: 12}}
              />
            </View>
            <View>
              <Text style={{fontSize: 10}}> Jakkanpur, Gardanibagh, Patna</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '25%',
            height: '100%',
            // backgroundColor: 'red',
            flexDirection: 'row',
            alignSelf: 'flex-end',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderColor: 'grey',
              borderWidth: 1,
              padding: 4,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('./assets/discount.png')}
              style={{height: 12, width: 12}}
            />
            <Text style={{fontSize: 12}}> Offers</Text>
          </View>
          <View
            style={{
              width: 23,
              height: 22,
              borderWidth: 1,
              borderColor: 'grey',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              marginHorizontal: 5,
            }}>
            <Text style={{fontSize: 12}}>S</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          width: '90%',
          height: '3%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderColor: 'grey',
          borderWidth: 1,
          padding: 10,
          borderRadius: 12,
          alignSelf:'center'
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{width: 15, height: 15, tintColor: 'red'}}
            source={require('./assets/search.png')}
          />
          <TextInput
            style={{
              borderColor: 'red',
              borderRightWidth: 1,
              width: '90%',
              height: 25,
              marginLeft: 10,
            }}
          />
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <Image
            style={{width: 15, height: 17, tintColor: 'red'}}
            source={require('./assets/microphone.png')}
          />
        </View>
      </View>
      <View style={{height: '2%', justifyContent: 'center', alignSelf:'center'}}>
        <Text>Explore</Text>
      </View>
      <View
        style={{
          width: '80%',
          height: '10%',
          backgroundColor: '#fff',
          borderColor: 'grey',
          borderWidth: 1,
          borderRadius: 10,
          alignSelf:'center'
        }}></View>

      <View style={{flexDirection: 'row', padding: 10}}>
        <CardComponView />
        <CardComponView />
        <CardComponView />
      </View>

      <View style={{ alignSelf:'center'}}>
        <Text>WHAT'S ON YOUR MIND?</Text>
      </View>

<View style={{padding:5 ,height: '12%',}}>
      <FlatList
        horizontal
        style={{backgroundColor: 'transparent', height: '10%'}}
        //numRows={2}
        data={[
          {id: 1, name: 'Jalebi', image: require('./assets/food.png')},
          {id: 2, name: 'Burger', image: require('./assets/food.png')},
          {id: 3, name: 'Idli', image: require('./assets/food.png')},
          {id: 4, name: 'Rosgul', image: require('./assets/food.png')},
          {id: 5, name: 'Biryani', image: require('./assets/food.png')},
          {id: 6, name: 'Shake', image: require('./assets/food.png')},
          {id: 7, name: 'Jalebi', image: require('./assets/food.png')},
          {id: 8, name: 'Burger', image: require('./assets/food.png')},
          {id: 9, name: 'Idli', image: require('./assets/food.png')},
          {id: 10, name: 'Rosgul', image: require('./assets/food.png')},
          {id: 11, name: 'Biryani', image: require('./assets/food.png')},
          {id: 12, name: 'Shake', image: require('./assets/food.png')},
        ]}
        renderItem={({item}) => (
          <FoodComponent name={item.name} image={item.image} />
        )}
      />
</View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#D3D3D3',
          borderRadius: 20,
          width: '96%',
          alignSelf: 'center',
          height: '2%',
          justifyContent: 'center',
          borderColor: 'grey',
          //borderWidth: 1,
        }}>
        <TouchableOpacity
          onPress={() => setAll(!all)}
          style={{
            backgroundColor: all ? '#000' : '#D3D3D3',
            borderRadius: 20,
            width: 170,
            alignSelf: 'center',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
            //borderColor:'grey',
            //borderWidth:1
          }}>
          <Text style={{color: all ? '#D3D3D3' : '#000'}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setAll(!all)}
          style={{
            backgroundColor: all ? '#D3D3D3' : '#000',
            borderRadius: 20,
            width: 170,
            alignSelf: 'center',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
            flexDirection: 'row',
            // borderColor:'grey',
            // borderWidth:1
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: all ? '#000' : '#D3D3D3'}}>New</Text>
            <Image
              style={{width: 15, height: 17, tintColor: '#52BE80'}}
              source={require('./assets/thunder-bolt.png')}
            />
          </View>
          <View>
            <Text style={{color: all ? '#000' : '#D3D3D3'}}>Near and Fast</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', padding:10}}>
        <TouchableOpacity
          style={{
            width: 65,
            height: 28,
            padding: 1,
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal:4
          }} onPress={() => refRBSheet.current.open()}>
          <Image
            source={require('./assets/filter.png')}
            style={{width: 13, height: 15, tintColor: 'red'}}
          />
          <Text style={{fontSize: 8}}>{`   Sort `}</Text>
          <Image
            source={require('./assets/down-arrow.png')}
            style={{width: 13, height: 15, tintColor: 'red'}}
          />
        </TouchableOpacity>
        <OptionTabs name="Great Offers" />
        <OptionTabs name="Rating 4.0+" />
        <OptionTabs name="Pure Veg" />
        <TouchableOpacity
          style={{
            marginHorizontal:4,
            width: 65,
            height: 28,
            padding: 1,
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }} onPress={() => refRBSheet.current.open()}>
          <Text style={{fontSize: 8}}>{`Cuisines  `}</Text>
          <Image
            source={require('./assets/down-arrow.png')}
            style={{width: 13, height: 15, tintColor: 'red'}}
          />
        </TouchableOpacity>
      </View>
      <FoodCartComponent />
      <FoodCartComponent />
      <FoodCartComponent />
      </ScrollView>
     
    
  );
};
