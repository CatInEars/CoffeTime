import React from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './navigation/LoginScreen';
import { globalState } from './modules/redux/state/globalState';

const Stack = createStackNavigator();

export function App() {
  const [loaded] = useFonts({
    'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'),
    'SFUITextLight': require('../assets/fonts/SF-UI-Text-Light.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={globalState}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// TODO 
// npm remove safe-area-view