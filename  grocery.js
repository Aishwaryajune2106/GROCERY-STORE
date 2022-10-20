import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Flatlist,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Rlist from './experi/Rlist';
import Ulist from './experi/Ulist';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',

        height: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          padding: 10,
        }}>
        <Image style={styles.arrow} source={require('./IMG/leftarrow.png')} />
        <View style={{flexDirection: 'row', marginLeft: 300, marginTop: 0}}>
          <Image source={require('./IMG/downmenu.png')} />
          <Image style={styles.search} source={require('./IMG/search.png')} />
        </View>
      </View>
      <LinearGradient
        colors={['#1FA2FF', '#12D8FA', '#A6FFCB']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          height: 150,
          marginTop: 10,
          marginHorizontal: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Image
          style={{
            width: 90,
            height: 90,
            marginTop: 30,

            borderColor: 'white',
            borderWidth: 3,
            borderRadius: 100,
          }}
          source={require('./IMG/veg.jpg')}
        />
        <View
          style={{
            flexDirection: 'column',
            marginTop: 40,
            marginRight: 60,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Food Store</Text>
          <Text style={{color: 'white', fontSize: 15}}>10.9km Karva Nagar</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./IMG/timer.png')}
            />
            <Text style={{color: 'white', fontSize: 15}}>46 mins</Text>
          </View>
        </View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity>
            <Image
              style={{width: 25, height: 25, marginTop: 10}}
              source={require('./IMG/redheart.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 25, height: 25, marginTop: 10}}
              source={require('./IMG/whiteheart.png')}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <Rlist />
      <Ulist />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  arrow: {
    marginLeft: 10,
    marginTop: 0,
  },
  search: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginTop: 0,
  },
});
