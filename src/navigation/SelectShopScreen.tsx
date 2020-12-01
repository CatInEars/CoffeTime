import React, { useEffect } from 'react';
import { MapScreen } from '../core/CoffeList/MapScreen';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CoffeListTabBar } from './modules/CoffeListTabBar';
import { CoffeShopList } from '../core/CoffeList/CoffeShopList';

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