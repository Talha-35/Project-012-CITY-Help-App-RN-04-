import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity,  
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Second = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.input}>
            <TextInput
              // value = {userName}
              placeholder="Please select a city"
              style={{textAlign: 'center', fontSize: 17, padding: 4}}
            />
          </View>
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
          <View style={styles.part1}>
            <Image
              style={styles.image}
              source={require('../images/cafe2.webp')}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ThirdPage')}
              style={styles.part1}>
              <Text style={styles.text}>Omarosa Café Dortmund</Text>
            </TouchableOpacity>           
          </View>
          <View style={styles.part1}>
            <Image
              style={styles.image}
              source={require('../images/cafe2.webp')}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ThirdPage')}
              style={styles.part1}>
              <Text style={styles.text}>Café Kleimann</Text>
            </TouchableOpacity>           
          </View>
          <View style={styles.part1}>
            <Image
              style={styles.image}
              source={require('../images/cafe2.webp')}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ThirdPage')}
              style={styles.part1}>
              <Text style={styles.text}>Cafe Bernstein</Text>
            </TouchableOpacity>           
          </View>
          <View style={styles.part1}>
            <Image
              style={styles.image}
              source={require('../images/cafe2.webp')}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ThirdPage')}
              style={styles.part1}>
            <Text style={styles.text}>Coffee Fellows GmbH</Text>
             
            </TouchableOpacity>           
          </View>    
          <View style={styles.back}>
            
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
            >
            <Text style={styles.textBack}>Back</Text>
             
            </TouchableOpacity>           
          </View>    
          

        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cfd8dc',
    flex: 1,
  },
  input: {
    backgroundColor: '#b0bec5',
    margin: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  part1: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    margin: 5,
  },
  image: {
    // margin : Dimensions.get("window").width * 0.1,
    marginTop: 15,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    backgroundColor: 'white',
    tintColor: 'gray',
  },
  text: {
    alignSelf: 'flex-start',
    fontSize: 20,
    color: 'black',
    margin: 5,
  },
  back : {
    marginHorizontal : 110,
    backgroundColor : '#424242',
    borderRadius : 5,
    margin : 5
  },
  textBack : {
    textAlign : "center",
    fontSize: 20,
    color: 'white',
    margin: 5,
  }
});
