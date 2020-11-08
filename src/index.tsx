import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from './navigation/WelcomeScreen';
import { CoffeListScreen } from './navigation/CoffeListScreen';
import { IAppState, IUserState } from './types/redux/state/IAppState';
import { connect } from 'react-redux';

const Stack = createStackNavigator();

interface IProps {
  userIsLogin: boolean
}

function app({ userIsLogin }: IProps) {
  const [loaded] = useFonts({
    'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'),
    'SFUITextLight': require('../assets/fonts/SF-UI-Text-Light.otf'),
    'SFUITextRegular': require('../assets/fonts/SF-UI-Text-Regular.otf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          userIsLogin ?
            <Stack.Screen name='CoffeList' component={CoffeListScreen} />
          :
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
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