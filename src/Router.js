import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Jops from './screens/Jops/jops';
import JopDetail from './screens/JopDetail/JopDetail';
import FavoritedJops from './screens/FavoritedJops/FavoritedJops';
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  const JopsDrawer = () => {
    return (
      <Drawer.Navigator screenOptions={{headerShown: ''}}>
        <Drawer.Screen name="JopsScreen" component={Jops} />
        <Drawer.Screen
          name="Favorited Jops"
          component={FavoritedJops}
          options={{headerShown: ''}}
        />
      </Drawer.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jops" component={JopsDrawer} />
        <Stack.Screen name="JopDetail" component={JopDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
