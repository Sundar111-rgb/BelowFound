import React, {useState, useEffect, useRef} from 'react';

import {imagecontain, imagedes, imagepath, list, popular, toprated} from './assets/list';
import {FlatList, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

function TopRated(props) {
  const [allMovieList, setMovieList] = useState([]);
  const refRBSheet = useRef();
  const [data, setData] = useState(null);

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: list
    };
    
    fetch(toprated, options)
      .then(response => response.json())
      .then(response => setMovieList(response.results))
      .catch(err => console.error(err));
  },[])

  return (
    <View style={styles.container}>
      <RBSheet
      height={400}
      
        ref={refRBSheet}
        useNativeDriver={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent'
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
         <View
        style={styles.rbsheetview}>
        <View
          style={styles.rbsheetcontent}>
          {/* <Text style={{fontSize: 20}}>{}</Text> */}
          <Text style={{fontSize: 20, fontFamily:'Times New Roman'}}>{data!=null && data.title}</Text>
        </View>
        <View style={{paddingVertical: 30}}>
          <Text style={{fontSize: 20,color:'grey', fontFamily:'Times New Roman'}}>Details: {`\n`}</Text>
          <Text style={{fontSize: 15, fontFamily:'Times New Roman'}}>{data!=null && data.overview}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16,color:'grey', fontFamily:'Times New Roman'}}>Release Date: </Text>
          <Text style={{fontSize: 15, fontFamily:'Times New Roman'}}>{data!=null && data.release_date}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16,color:'grey', fontFamily:'Times New Roman'}}>Rating :</Text>
          <Text style={{fontSize: 15, fontFamily:'Times New Roman'}}>{data!=null && data.vote_count}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16,color:'grey', fontFamily:'Times New Roman'}}>Adult :</Text>
          <Text style={{fontSize: 15, fontFamily:'Times New Roman'}}>{data!=null && JSON.stringify(data.adult)}</Text>
        </View>
      </View>
      </RBSheet>
      <FlatList
        data={allMovieList}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => {
              setData(item);
              refRBSheet.current.open();
             
            }}
              style={styles.flatView}>
             <View style={imagecontain}>
                <Image source={{ uri:imagepath + item.poster_path}}
                  style={imagedes}
                />
              </View>
              <View style={{marginTop: 10}}>
                <Text style={{color: '#000', fontSize: 13, fontWeight: '500', fontFamily:'Times New Roman'}}>
                  {item.title.substring(0, 22)}
                </Text>
                <Text style={{color: '#000', fontSize: 12, fontFamily:'Times New Roman'}}>
                  Release date :{item.release_date}
                </Text>
                <Text style={{color: '#000', fontSize: 12, fontFamily:'Times New Roman'}}>
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

export default TopRated;

const styles = StyleSheet.create({

  container : {
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    
  },
  flatView: {
    height: 150,
    width: 195,
    padding: 10,
    backgroundColor: 'teal',
    margin: 10,
    borderRadius: 10,borderWidth:1,borderColor:'#fff',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 2,
    shadowColor: '#fff',
    shadowOpacity: 0.5,
  },

  rbsheetview:{
    backgroundColor: '#ccc',
   //height:200,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    alignSelf:'center', shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 2,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
  },

  rbsheetcontent:{
    flexDirection: 'row',
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 10,
      flexWrap:'wrap', justifyContent:'center'
  }
})