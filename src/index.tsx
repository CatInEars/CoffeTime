import React from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from './navigation/WelcomeScreen';
import { globalState } from './modules/redux/state/globalState';
import { CoffeListScreen } from './navigation/CoffeListScreen';

const Stack = createStackNavigator();

export function App() {
  const [loaded] = useFonts({
    'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'),
    'SFUITextLight': require('../assets/fonts/SF-UI-Text-Light.otf'),
    'SFUITextRegular': require('../assets/fonts/SF-UI-Text-Regular.otf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={globalState}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='CoffeList' component={CoffeListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// TODO 
// npm remove safe-area-view