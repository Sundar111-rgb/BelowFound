import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

function Details(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(props.route.params.data);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center',justifyContent:'center', backgroundColor:'#456678'}}>
      <View><Text style={{ fontSize:20, fontFamily:'Times New Roman'}}>Movie</Text></View>
      <View
        style={styles.content}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'teal',
            padding: 10,
            borderRadius: 10,
              flexWrap:'wrap', justifyContent:'center'
          }}>
          {/* <Text style={{fontSize: 20}}>{}</Text> */}
          <Text style={{fontSize: 22, fontFamily:'Times New Roman'}}>{data!=null && data.title}</Text>
        </View>
        <View style={{paddingVertical: 30}}>
          <Text style={styles.detail}>Details: {`\n`}</Text>
          <Text style={[styles.detail,{ color:'#000'}]}>{data!=null && data.overview}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.detail}>Release Date: </Text>
          <Text style={[styles.detail,{ color:'#000'}]}>{data!=null && data.release_date}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.detail}>Rating :</Text>
          <Text style={[styles.detail,{ color:'#000'}]}>{data!=null && data.vote_count}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.detail}>Adult :</Text>
          <Text style={[styles.detail,{ color:'#000'}]}>{data!=null && JSON.stringify(data.adult)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Details;

const styles=StyleSheet.create({
  detail : {fontSize: 18,color:'grey', fontFamily:'Times New Roman'},
  content :{
    backgroundColor: '#ccc',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.1,
    alignSelf:'center', shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 2,
    shadowColor: '#fff',
    shadowOpacity: 0.5,
  }
})
