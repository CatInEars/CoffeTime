import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export function CoffeListScreen() {
  const navigation = useNavigation(); 

  navigation.setOptions({
    headerShown: false
  });
  
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>CoffeList Screen</Text>
      </View>
      <ExpoStatusBar style='dark' />
    </>
  );
}