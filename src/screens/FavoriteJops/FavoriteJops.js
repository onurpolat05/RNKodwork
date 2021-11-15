import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import JopCard from '../../components/JopCard/JopCard';
export default function FavoriteJops() {
  const favorites = useSelector(state => state.favorites);
  console.log(favorites.length);
  const renderFavoriteJops = ({item}) => (
    <View style={styles.çinner_container}>
      <JopCard jopList={item} />
      <TouchableOpacity>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={favorites}
      renderItem={renderFavoriteJops}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  inner_container: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
  },
  button_container: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
});
