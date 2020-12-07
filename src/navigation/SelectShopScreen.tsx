import React from 'react';
import { MapScreen } from '../core/SelectShop/MapScreen';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CoffeListTabBar } from './modules/CoffeListTabBar';
import { CoffeShopList } from '../core/SelectShop/CoffeShopsList';

const Tab = createBottomTabNavigator();

export function SelectShopScreen() {
  return (
    <>
      <Tab.Navigator
        tabBar={() => <CoffeListTabBar />}
      >
        <Tab.Screen name='MapScreen' component={MapScreen} />
        <Tab.Screen name='CoffeShopList' component={CoffeShopList} />
      </Tab.Navigator>
      <ExpoStatusBar style='dark' />
    </>
  );
}