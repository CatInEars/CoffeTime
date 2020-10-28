import React from 'react';
import { Welcome } from '../core/Welcome/Welcome';
import { useNavigation } from '@react-navigation/native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export function WelcomeScreen() {
  const navigation = useNavigation(); 

  navigation.setOptions({
    headerShown: false
  });

  return (
    <>
      <Welcome />
      <ExpoStatusBar style='light' />
    </>
  );
}