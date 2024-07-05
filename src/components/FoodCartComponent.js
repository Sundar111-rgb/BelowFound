import React, {useRef, useState} from 'react';
import {
  FlatList,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

export default props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wish, setWish] = useState(true);
  const [hide, setHide] = useState(true);
  const [imageSets, setImageLength] = useState([
    require('../assets/delicious.png'),
    require('../assets/delicious.png'),
    require('../assets/delicious.png'),
    require('../assets/delicious.png'),
    require('../assets/delicious.png'),require('../assets/delicious.png'),require('../assets/delicious.png')
  ]);
  const ref = useRef();

  return (
    <View
      style={{
        height: 350,
        width: '90%',
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity:0.2,
        shadowRadius:2,
      }}>
      <View style={{height: '80%', borderRadius: 10}}>
        <FlatList
          ref={ref}
          horizontal
          pagingEnabled
          onScroll={e => {
            setCurrentIndex(
              (
                e.nativeEvent.contentOffset.x / Dimensions.get('window').width
              ).toFixed(0),
            );
          }}
          data={imageSets}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: 380,
                  height: 280,
                  alignSelf: 'center',
                 // backgroundColor: '#000',
                  borderRadius: 10,
                }}>
                <Image
                  source={item}
                  style={{borderRadius: 10, width: 380, height: 280}}
                />
              </View>
            );
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 80,
          right: 30,
        }}>
        {imageSets.map((item, index) => {
          return (
            <View
              style={{
                height: 10,
                width: currentIndex == index ? 14 : 10,
                borderRadius: 10,
                backgroundColor: currentIndex == index ? 'white' : 'grey',
                borderColor: currentIndex == index ? 'white' : 'grey',
                borderWidth: 2,
                marginHorizontal: 0,
              }}
            />
          );
        })}
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '98%',
          justifyContent: 'space-between',
          alignSelf: 'center',
          margin: 2,
        }}>
        <View style={{}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}> Cafe Hideout</Text>
        </View>
        <View style={{flexDirection: 'row', backgroundColor:'green', justifyContent:'center', alignItems:'center', padding:1, borderRadius:2}}>
          <Text style={{fontSize: 8, color:'#fff'}}>{` 4.2 `}</Text>
          <Image
            source={require('../assets/star.png')}
            style={{width: 6, height: 6, tintColor:'#fff'}}
          />
        </View>
      </View>
      <View style={{margin: 2}}>
        <Text style={{fontSize: 10, fontWeight: '300'}}>
          {'   '}
          North Indian . ₹250 for one
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderTopColor: 'grey',
          borderTopWidth: 0.2,
          padding: 10,
        }}>
        <Image
          source={require('../assets/discount.png')}
          style={{width: 10, height: 10, tintColor: 'blue'}}
        />
        <Text style={{fontSize: 10, color: 'blue'}}>50% OFF up to ₹100</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 0,
          right: 7,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{margin: 4}} onPress={() => setWish(!wish)}>
          <Image
            style={{width: 20, height: 20, tintColor: '#fff'}}
            source={
              wish
                ? require('../assets/heart.png')
                : require('../assets/heartfill.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity style={{margin: 4}} onPress={() => setHide(!hide)}>
          <Image
            style={{width: 22, height: 25, tintColor: '#fff'}}
            source={
              hide
                ? require('../assets/hide.png')
                : require('../assets/unhide.png')
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
