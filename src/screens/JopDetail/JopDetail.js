import React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RenderHtml from 'react-native-render-html';
import {w, h} from '../../utiles/dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
export default function JopDetail({route}) {
  const dispatch = useDispatch();
  const jop = route.params.jopList;
  const source = {
    html: jop.contents,
  };
  const handleAddFavorite = () => {
    dispatch({type: 'ADD_FAVORİTE', payload: jop});
  };
  const showAlert = () => {
    Alert.alert(
      'Successful',
      'Your application has been successfully received!',
    );
  };
  return (
    <View>
      <Text style={styles.name}> {jop.name} </Text>
      <View style={styles.title_container}>
        <Text style={styles.title_text}> Locations: </Text>
        <Text style={styles.text}> {jop.locations[0].name} </Text>
      </View>
      <View style={styles.title_container}>
        <Text style={styles.title_text}> Jop Levels: </Text>
        <Text style={styles.text}> {jop.levels[0].name} </Text>
      </View>
      <Text style={styles.title}> Jop Detail </Text>
      <View style={styles.contents}>
        <ScrollView>
          <RenderHtml source={source} contentWidth={w} content />
        </ScrollView>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.button} onPress={showAlert}>
          <AntDesign name="caretright" size={15} color="#fff" />
          <Text style={styles.button_text}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddFavorite}>
          <AntDesign name="heart" size={15} color="#fff" />
          <Text style={styles.button_text}>Favorite Jop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  title_container: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  title_text: {
    color: '#FF5C58',
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 3,
  },
  contents: {
    height: h / 1.47,
    backgroundColor: 'white',
    borderWidth: 0.6,
    borderColor: 'gray',
  },
  button_container: {
    margin: 6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#FF5C58',
    padding: 10,
    width: w / 2.5,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 3,
    fontSize: 15,
  },
});
