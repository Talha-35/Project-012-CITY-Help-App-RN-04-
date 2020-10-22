import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Third = (props) => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.part1}>
          <Image
            style={styles.image}
            source={require('../images/cafe2.webp')}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ThirdPage')}
            style={styles.part1}>
            <Text style={styles.text}>Chevy's Cafe and Bar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blue}>
          <Image style={styles.image1} source={require('../images/pin.png')} />
          <TouchableOpacity>
            <Text style={styles.text3}>Grevel Dortmund</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blue}>
          <Image style={styles.image1} source={require('../images/home.png')} />
          <TouchableOpacity>
            <Text style={styles.text3}>Greveler Straße 39</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blue}>
          <Image
            style={styles.image1}
            source={require('../images/phone.png')}
          />
          <TouchableOpacity>
            <Text style={styles.text3}>0231 92527791</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.back}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={styles.textBack}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.back2}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('FirstPage')}>
            <Text style={styles.textBack}>Main Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Third;

const styles = StyleSheet.create({
  image: {
    marginTop: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height / 3,
    tintColor: 'gray',
  },
  text: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'left',
  },
  blue: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#42a5f5',
    borderRadius: 5,
    margin: 5,
    padding: 9,
  },
  text3: {
    color: 'white',
    fontSize: 16,
  },
  image1: {
    width: 25,
    height: 25,
    marginRight: 15,
    backgroundColor: '#42a5f5',
    tintColor: 'white',
    marginVertical: 5,
},
    back: {
    marginTop : 35 ,
      marginHorizontal: 110,
      backgroundColor: '#424242',
      borderRadius: 5,
      margin: 5,
    },
    back2: {
      marginHorizontal: 110,
      backgroundColor: '#424242',
      borderRadius: 5,
      margin: 5,
    },
    textBack: {
      textAlign: 'center',
      fontSize: 20,
      color: 'white',
      margin: 5,
    },
  
});
