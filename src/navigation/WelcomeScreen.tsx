import React, { useEffect } from 'react';
import { Welcome } from '../core/Welcome/Welcome';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { useNavigation } from '@react-navigation/native';

export function WelcomeScreen() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  });

  return (
    <>
      <Welcome />
      <ExpoStatusBar style='light' />
    </>
  );
}