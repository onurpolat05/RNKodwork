import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
export default function FavoritedJops() {
  const favorites = useSelector(state => state.favorites);
  console.log(favorites);
  return (
    <View>
      <Text>FavoritedJops</Text>
    </View>
  );
}
