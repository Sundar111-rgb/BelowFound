import React, {useEffect, useState} from 'react';

import {imagepath, list,  upcoming} from './assets/list';
import {FlatList, View, Text, Image, ImageBackground, StyleSheet} from 'react-native';

function Upcoming(props) {
  const [allMovieList, setMovieList] = useState([]);

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: list
    };
    
    fetch(upcoming, options)
      .then(response => response.json())
      .then(response => setMovieList(response.results))
      .catch(err => console.error(err));
  },[])

  return (
    <View
      style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        data={allMovieList}
        renderItem={({item}) => {
          return (
            <ImageBackground
              source={{ uri:imagepath+item.poster_path}}
              style={styles.imagebak}>
              <View
                style={[styles.content]}>
                <Text style={{color: '#000', fontSize: 15, fontWeight:'600', flexWrap:'wrap'}}>{item.title}</Text>
                <Text style={{color: '#000', fontSize:10}}>
                  Release date : {item.release_date}
                </Text>
                <Text style={{color: '#000', fontSize:10}}>
                  Rating : {item.vote_average}
                </Text>
              </View>
            </ImageBackground>
          );
        }}
      />
    </View>
  );
}



export default Upcoming;

const styles = StyleSheet.create({
  container : {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagebak : {
    width: 385,
    height: 305,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#000',
    margin: 10,
    alignSelf:'center',justifyContent:'center',
    borderWidth:1, borderRadius:2
  },
  content:{ position: 'absolute',
  bottom: 0,
  margin: 10,
  backgroundColor: 'teal',
  padding: 10,
  borderRadius: 10,
  borderWidth: 0,
  shadowOffset: {
    width: 5,
    height: 5,
  },
  shadowRadius: 2,
  shadowColor: '#000',
  shadowOpacity: 0.5
}
})
