import React from 'react';
import { Login } from '../core/Login/Login';
import { useNavigation } from '@react-navigation/native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export function LoginScreen() {
  const navigation = useNavigation(); 

  navigation.setOptions({
    headerShown: false
  });

  return (
    <>
      <Login />
      <ExpoStatusBar style='light' />
    </>
  );
}