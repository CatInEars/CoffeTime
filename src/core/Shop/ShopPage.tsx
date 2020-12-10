import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ICoffeShop } from '../../types/data/ICoffeShop';
import { ShopBanner } from './ShopBanner';

interface IRoute {
  params: ICoffeShop,
  key: string,
  name: string
}

export function Shop() {
  const route: IRoute = useRoute();

  return (
    <View>
      <ShopBanner {...route.params} />
    </View>
  )
}