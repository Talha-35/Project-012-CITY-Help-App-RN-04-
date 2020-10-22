import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';


const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      // initialRouteName='Bir Şehir Seçiniz' 
      screenOptions={{gestureEnabled:true}}>
    {/* headerShown:false diyerek başlık ekranını da kapatabiliyoruz */}
    {/* gestureEnabled:true ekrana kaydırarak geri sayfaya gitmeye yarıyor  */}
       
        <Stack.Screen name="FirstPage" component={First} options={{ title: 'Select a City' }} />
        <Stack.Screen name="SecondPage" component={Second} options={{ title: 'Dortmund Restaurants' }}  />
        <Stack.Screen name="ThirdPage" component={Third} options={{ title: '' }}  />
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
