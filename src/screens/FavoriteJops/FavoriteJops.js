import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import JopCard from '../../components/JopCard/JopCard';
import {useDispatch} from 'react-redux';

export default function FavoriteJops() {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites);
  const handleRomeveJop = item => {
    dispatch({type: 'REMOVE_FAVORİTE', payload: item});
  };
  const renderFavoriteJops = ({item}) => (
    <View style={styles.inner_container}>
      <JopCard jopList={item} favorite={true} />
      <TouchableOpacity
        onPress={() => handleRomeveJop(item)}
        style={styles.button_container}>
        <Text style={styles.text}>Remove</Text>
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
    backgroundColor: '#eaeaea',
    paddingHorizontal: 5,
  },
  inner_container: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  button_container: {
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 8,
    marginBottom: 8,
    borderRadius: 10,
    backgroundColor: '#FF5C58',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
