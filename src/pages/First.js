import React from 'react';
import { useState } from 'react';
import {View, Text,StyleSheet, SafeAreaView,Button,TouchableOpacity,TextInput} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const myCity = [
  {
    id: 0,
    city: 'Dortmund',    
  },
  {
    id: 1,
    city: 'Moscow ',    
  },
  {
    id: 2,
    city: 'Amsterdam',    
  },
  {
    id: 3,
    city: 'Athens ',    
  },
  {
    id: 4,
    city: 'Berlin',    
  },
  {
    id: 5,
    city: 'Lisbon ',    
  },
  {
    id: 6,
    city: 'Monaco',    
  },
  {
    id: 7,
    city: 'Rome ',    
  },
  {
    id: 7,
    city: 'Bayburt',    
  },
  {
    id: 9,
    city: 'Budapest ',    
  },
  {
    id: 9,
    city: 'Florence ',    
  },
  {
    id: 9,
    city: 'Vienna ',    
  },
  {
    id: 9,
    city: 'Edinburgh ',    
  },
  {
    id: 9,
    city: 'Prague ',    
  },
  {
    id: 9,
    city: 'Paris ',    
  },
];


const First = (props) => {
  
  const Item = ({ title }) => (
    <TouchableOpacity
    onPress={() => props.navigation.navigate('SecondPage')}
     style={styles.touch}>
        <Text style={styles.touchText}>{title.city}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item} />
  );

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
        <View style={styles.input}>
            <TextInput
            // value = {userName}
            placeholder = 'Please select a city'
            style={{textAlign : "center", fontSize : 17, padding : 4}}
            />
        </View>
           
        <FlatList
          keyExtractor={(item, index) => item.id.toString()}
          data = {myCity}
          renderItem={renderItem}
        />

        
     
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default First;


const styles = StyleSheet.create({
  container : {
    backgroundColor : '#b0bec5',
    flex : 1
  },
  input : {
    backgroundColor : "#b0bec5" , 
    margin : 4,  
    borderRadius : 5
  },
  touch : {
    backgroundColor : '#e0e0e0',
    padding : 10 ,
    borderRadius : 3, 
    marginVertical : 2,
    // borderBottomColor : 'gray',
    // borderWidth : 1,
    borderColor : 'gray'
    // marginTop : 15
 },
 touchText : {
  fontSize : 19, 
  textAlign : "center"
 },
})