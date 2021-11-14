import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Config from 'react-native-config';
import JopCard from '../../components/JopCard/JopCard';
import * as Request from '../../Hooks/useFetch/useFetch';
export default function jops() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {loading, data, error} = Request.useFetch(`${Config.API_URL}?page=0`);
  const {results} = data;
  const renderJops = ({item}) => <JopCard jopList={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        renderItem={renderJops}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
  },
});
