import React, {useState, useEffect} from 'react';

import { imagepath, list, nowplaying, imagedes, imagecontain } from './assets/list';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

function NowPlaying(props) {
  const [allMovieList, setMovieList] = useState([]);


  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: list
    };
    
    fetch(nowplaying, options)
      .then(response => response.json())
      .then(response => setMovieList(response.results))
      .catch(err => console.error(err));
  },[])

  return (
    <View testID="now-playing-container" style={styles.container}>
      <FlatList
        data={allMovieList}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <View
              style={styles.flatview}>
              <View style={imagecontain}>
                <Image source={{ uri:imagepath + item.poster_path}}
                  style={imagedes}
                />
              </View>
              <View style={{marginTop: 10}}>
                <Text style={{color: '#000', fontSize: 13, fontWeight: '500', fontFamily:'Times New Roman'}}>
                  {item.title.substring(0, 22)}
                </Text>
                <Text style={{color: '#000', fontSize: 11, fontFamily:'Times New Roman'}}>
                  Release date :{item.release_date}
                </Text>
                <Text style={{color: '#000', fontSize: 11, fontFamily:'Times New Roman'}}>
                  Rating :{item.vote_average}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default NowPlaying;


const styles = StyleSheet.create({

  container:{
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatview:{
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
    shadowColor: '#fff',
    shadowOpacity: 0.5,
  }
})
