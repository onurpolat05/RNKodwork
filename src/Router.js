import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import Jops from './screens/Jops/jops';
import JopDetail from './screens/JopDetail/JopDetail';
import FavoritedJops from './screens/FavoritedJops/FavoritedJops';
import store from './Redux/provider';
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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Jops"
            component={JopsDrawer}
            options={{headerTintColor: '#FF5C58'}}
          />
          <Stack.Screen
            name="JopDetail"
            component={JopDetail}
            options={({route}) => ({
              title: route.params.jopList.name,
              headerTintColor: '#FF5C58',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
