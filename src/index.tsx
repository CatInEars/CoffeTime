import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from './navigation/WelcomeScreen';
import { IAppState } from './types/redux/state/IAppState';
import { connect } from 'react-redux';
import { CoffeAppNavigation } from './navigation/CoffeAppNavigation';

const Stack = createStackNavigator();

interface IProps {
  userIsLogin: boolean
}

function app({ userIsLogin }: IProps) {
  const [loaded] = useFonts({
    'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'),
    'SFUITextLight': require('../assets/fonts/SF-UI-Text-Light.otf'),
    'SFUITextRegular': require('../assets/fonts/SF-UI-Text-Regular.otf'),
    'SFUITextBold': require('../assets/fonts/SF-UI-Text-Bold.otf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* {
          userIsLogin ?
            <Stack.Screen name='CoffeList' component={CoffeListScreen} />
          :
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
        } */}
        {
          <Stack.Screen name='CoffeAppNavigation' component={CoffeAppNavigation} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const App = connect(
  (state: IAppState) => ({
    userIsLogin: state.login
  }),
)(app);

// TODO 
// npm remove safe-area-view