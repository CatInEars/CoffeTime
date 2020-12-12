import React from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ICoffeShop } from '../../types/data/ICoffeShop';
import { ShopBanner } from './ShopBanner';
import { DrinksList } from './DrinksList';

interface IRoute {
  params: ICoffeShop,
  key: string,
  name: string
}

export function Shop() {
  const route: IRoute = useRoute();

  return (
    <ScrollView>
      <ShopBanner {...route.params} />
      <DrinksList />
    </ScrollView>
  )
}