import React from 'react';
import { Text, View } from 'react-native';
import { ICoffeShop } from '../../types/data/ICoffeShop';

export function CoffePreview({ image }: ICoffeShop) {
  return (
    <View style={{width: '100%', height: 130, backgroundColor: 'lightgray', marginVertical: 4}}>
      <Text>Aloha!</Text>
    </View>
  );
}