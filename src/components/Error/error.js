import React from 'react';
import LottieView from 'lottie-react-native';

export default function error() {
  return (
    <LottieView source={require('../../assets/error.json')} autoPlay loop />
  );
}
