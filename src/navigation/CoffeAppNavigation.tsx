import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SelectShopScreen } from './SelectShopScreen';
import { ShopScreen } from './ShopScreen';
import { useNavigation } from '@react-navigation/native';
import { CoffeTimeStackHeader } from './CoffeTimeHeader/CoffeTimeStackHeader';

const Stack = createStackNavigator();

export function CoffeAppNavigation() {

  const navigation = useNavigation();
  
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <CoffeTimeStackHeader />,
      // TODO
      // headerLeft: () => <HeaderBackButton />,
    })
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name='SelectShopScreen' component={SelectShopScreen} />
      <Stack.Screen name='ShopScreen' component={ShopScreen} />
    </Stack.Navigator>
  )
}