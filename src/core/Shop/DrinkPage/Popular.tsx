import React from 'react';
import { Image } from 'react-native';

export function Popular() {
  const image = require('../../../../images/popular.png');

  return (
    <Image
      source={image}
      style={{position: 'absolute', zIndex: 1}}
    />
  )
}