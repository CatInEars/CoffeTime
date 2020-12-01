import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SelectShopScreen } from './SelectShopScreen';
import { ShopInfoScreen } from './ShopInfoScreen';

const Stack = createStackNavigator();

export function CoffeAppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SelectShopScreen' component={SelectShopScreen} />
      <Stack.Screen name='ShopInfoScreen' component={ShopInfoScreen} />
    </Stack.Navigator>
  )
}