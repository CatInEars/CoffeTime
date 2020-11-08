import React from 'react';
import { Welcome } from '../core/Welcome/Welcome';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export function WelcomeScreen({ navigation }: any) {
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