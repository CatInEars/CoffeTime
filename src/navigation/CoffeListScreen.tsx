import React, { useEffect } from 'react';
import { CoffeList } from '../core/CoffeList/CoffeList';
import { useNavigation } from '@react-navigation/native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export function CoffeListScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  });

  navigation.setOptions({
    headerShown: false
  });
  
  return (
    <>
      <CoffeList />
      <ExpoStatusBar style='dark' />
    </>
  );
}