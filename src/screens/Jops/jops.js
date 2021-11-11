import React from 'react';
import {View, Text} from 'react-native';
import Config from 'react-native-config';
import * as Request from '../../Hooks/useFetch/useFetch';
export default function jops() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {loading, data, error} = Request.useFetch(`${Config.API_URL}?page=0`);
  const {results: jops} = data;
  console.log(jops);
  return (
    <View>
      <Text>jops</Text>
    </View>
  );
}
