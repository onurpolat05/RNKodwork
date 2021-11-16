import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function JopCard({jopList, favorite}) {
  const navigation = useNavigation();
  const onSelect = () => {
    navigation.navigate('JopDetail', {jopList});
  };

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={favorite ? {} : styles.container}>
        <Text style={styles.jop}> {jopList.name} </Text>
        <Text> {jopList.company.name} </Text>
        <View style={styles.locations_container}>
          <Text style={styles.locations}> {jopList.locations[0].name} </Text>
        </View>
        <Text style={styles.levels}> {jopList.levels[0].name} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 5,
    borderRadius: 5,
  },
  jop: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 4,
  },
  locations_container: {
    flexWrap: 'wrap',
  },
  locations: {
    backgroundColor: '#FF5C58',
    paddingVertical: 4,
    marginVertical: 2,
    marginLeft: 5,
    paddingHorizontal: 2,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 10,
    overflow: 'hidden',
  },
  levels: {
    textAlign: 'right',
    marginRight: 5,
    color: '#FF5C58',
    fontWeight: 'bold',
    marginVertical: 7,
  },
});
