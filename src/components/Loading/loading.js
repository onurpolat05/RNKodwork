import React from 'react';
import LottieView from 'lottie-react-native';

export default function loading() {
  return (
    <LottieView source={require('../../assets/loading.json')} autoPlay loop />
  );
}
