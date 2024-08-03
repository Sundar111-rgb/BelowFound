import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default props => {
  const [openW, setOpenW] = useState(true);
  const [openX, setOpenX] = useState(true);
  const [openZ, setOpenZ] = useState(true);

  const animateW = useSharedValue(20);
  const animateWW = useSharedValue(40);
  const animatedStyleW = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animateW.value}],
    };
  });

  const animateX = useSharedValue(20);
  const animateXX = useSharedValue(40);
  const animatedStyleX = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animateX.value}],
    };
  });

  const animateZ = useSharedValue(20);
  const animateZZ = useSharedValue(40);
  const animatedStyleZ = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animateZ.value}],
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: '#bb83f3', padding: 10}}>
      <View
        style={{
          alignSelf: 'center',
          width: '100%',
          marginTop: 40,
          backgroundColor: 'none',
        }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontFamily: 'RobotoSlab-Bold',
          }}>
          Cricket Jagat
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          marginBottom: 50,
          backgroundColor: 'none',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            setOpenW(!openW);
            animateW.value = openW
              ? withTiming(20, {duration: 400})
              : withTiming(20, {duration: 400});

            animateWW.value = openW
              ? withTiming(300, {duration: 400})
              : withTiming(40, {duration: 400});

           
          }}>
          <Animated.View
            style={[styles.bottomView, {height: animateWW}, animatedStyleW]}>
            <Text style={{color: '#fff', fontFamily: 'RobotoSlab-Bold'}}>
              Rohit Sharma
            </Text>
            {!openW ? (
              <View style={styles.viewtext}>
                <Text style={styles.texttt}>
                  Rohit Sharma owned all the shots in the book when he emerged
                  from the Mumbai suburbs as heir apparent to the Indian batting
                  greats of the 2000s. It took him time and persistence, but by
                  the 2010s he had become a colossus in white-ball cricket, and
                  the man in charge of perhaps the most formidable league team
                  in the first age of T20. That Rohit had talent was apparent to
                  both the casual observer and to the trained eye. Fans were
                  frustrated at the long wait for the potential to translate
                  into runs, though selectors and captains, knowing better, kept
                  backing him. At one point the word "talent" was Rohit's
                  bugbear, a pejorative nickname for him on social media.
                </Text>
              </View>
            ) : null}
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            setOpenX(!openX);
            animateX.value = openX
              ? withTiming(20, {duration: 400})
              : withTiming(20, {duration: 400});

            animateXX.value = openX
              ? withTiming(300, {duration: 400})
              : withTiming(40, {duration: 400});

          
          }}>
          <Animated.View
            style={[styles.bottomView, {height: animateXX}, animatedStyleX]}>
            <Text style={{color: '#fff', fontFamily: 'RobotoSlab-Bold'}}>
              Virat kohli
            </Text>
            {!openX ? (
              <View style={styles.viewtext}>
                <Text style={styles.texttt}>
                  India has given to the world many a great cricketer but
                  perhaps none as ambitious as Virat Kohli. To meet his
                  ambition, Kohli employed the technical assiduousness of Sachin
                  Tendulkar and fitness that was in the league of top athletes
                  in the world, not just cricketers. As a result, Kohli became
                  the most consistent all-format accumulator of his time, making
                  jaw-dropping chases look easy, and finding, in his own words,
                  the safest possible way to score runs. Plenty of them. This
                  ambition transferred seamlessly to his captaincy: he demanded
                  more than ever of his bowlers especially the quick ones, often
                  sacrificed a batsman for bowling depth, and led India to a
                  long stay at No. 1 in Test rankings and a first-ever series
                  win in Australia. He is well on his way to end up as India's
                  most successful Test captain.
                </Text>
              </View>
            ) : null}
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            setOpenZ(!openZ);
            animateZ.value = openZ
              ? withTiming(20, {duration: 400})
              : withTiming(20, {duration: 400});

            animateZZ.value = openZ
              ? withTiming(300, {duration: 400})
              : withTiming(40, {duration: 400});

         
          }}>
          <Animated.View
            style={[styles.bottomView, {height: animateZZ}, animatedStyleZ]}>
            <Text style={{color: '#fff', fontFamily: 'RobotoSlab-Bold'}}>
              MS Dhoni
            </Text>
            {!openZ ? (
              <View style={styles.viewtext}>
                <Text style={styles.texttt}>
                  MS Dhoni probably ranks as the third-most popular Indian
                  cricketer ever, behind only Sachin Tendulkar and Virat Kohli.
                  He emerged from a cricketing backwater, the eastern Indian
                  state of Jharkhand, and made it to the top with a home-made
                  batting and wicketkeeping technique, and a style of captaincy
                  that scaled the highs and hit the lows of both conservatism
                  and unorthodoxy. Under Dhoni's leadership, India won the top
                  prize in all formats: leading the Test rankings for 18 months
                  starting December 2009, winning the 50-over World Cup in 2011,
                  and the T20 world title on his captaincy debut in 2007.
                </Text>
              </View>
            ) : null}
          </Animated.View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    height: 40,
    width: '95%',
    backgroundColor: '#6c24b4',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 1,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderColor:'#fff'
  },

  bottomVieww: {
    height: 30,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 30,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginTop: 100,
  },

  bottomImage: {height: 50, width: 50, position: 'absolute'},
  bottomImagee: {height: 30, width: 30, position: 'absolute'},

  texttt: {
    flexWrap: 'wrap',
    fontFamily: 'RobotoSlab-Black',
    color:'#bb83f3'
  },
  viewtext : {borderWidth: 2, borderRadius: 10, padding: 10, borderColor:'#fff'}
 
});
