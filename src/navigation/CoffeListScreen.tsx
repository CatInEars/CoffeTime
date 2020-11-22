import React, { useEffect } from 'react';
import { MapScreen } from '../core/CoffeList/MapScreen';
import { useNavigation } from '@react-navigation/native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CoffeListTabBar } from './CoffeListTabBar';
import { CoffeTimeStackHeader } from './CoffeTimeHeader/CoffeTimeStackHeader';
// import { HeaderBackButton } from './CoffeTimeHeader/HeaderBackButton';

const Tab = createBottomTabNavigator();

export function CoffeListScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <CoffeTimeStackHeader />,
      // TODO
      // headerLeft: () => <HeaderBackButton />,
    })
  }, []);
  
  return (
    <>
      <Tab.Navigator
        tabBar={() => <CoffeListTabBar />}
      >
        <Tab.Screen name='MapScreen' component={MapScreen} />
        <Tab.Screen name='home' component={() => <></>} />
      </Tab.Navigator>
      <ExpoStatusBar style='dark' />
    </>
  );
}