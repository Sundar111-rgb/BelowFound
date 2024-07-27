import React, {useState, useEffect} from 'react';

import {list, popular} from './assets/list';
import {FlatList, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Popular(props) {
  const [allMovieList, setMovieList] = useState([]);
  const navigation = useNavigation();

  
  
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: list
    };
    
    fetch(popular, options)
      .then(response => response.json())
      .then(response => setMovieList(response.results))
      .catch(err => console.error(err));
  },[])

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
      <FlatList
        data={allMovieList}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Details',{
             data: item
            })}
              style={[styles.flatView]}>
              <View>
                <Image
                  source={require('./assets/film.jpg')}
                  style={{width: 175, height: 75, borderRadius: 10}}
                />
              </View>
              <View style={{marginTop: 10}}>
                <Text style={{color: '#000', fontSize: 13, fontWeight: '500'}}>
                  {item.title.substring(0, 22)}
                </Text>
                <Text style={{color: '#000', fontSize: 11}}>
                  Release date :{item.release_date}
                </Text>
                <Text style={{color: '#000', fontSize: 11}}>
                  Rating :{item.vote_average}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default Popular;

const styles = StyleSheet.create({
  flatView : {
    height: 150,
    width: 195,
    padding: 10,
    backgroundColor: 'teal',
    margin: 10,
    borderRadius: 10,borderWidth:1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 2,
    shadowColor: '#000',
    shadowOpacity: 0.5,
  }
})
