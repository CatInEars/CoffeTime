import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from './navigation/WelcomeScreen';
import { IAppState } from './types/redux/state/IAppState';
import { connect } from 'react-redux';
import { CoffeAppNavigation } from './navigation/CoffeAppNavigation';
import { LogBox } from 'react-native';

const Stack = createStackNavigator();
LogBox.ignoreLogs(["The action 'GO_BACK' was not"]);

interface IProps {
  userIsLogin: boolean
}


function app({ userIsLogin }: IProps) {
  const [loaded] = useFonts({
    'LobsterRegular': require('../assets/fonts/Lobster-Regular.ttf'),
    'SFUITextLight': require('../assets/fonts/SF-UI-Text-Light.otf'),
    'SFUITextRegular': require('../assets/fonts/SF-UI-Text-Regular.otf'),
    'SFUITextBold': require('../assets/fonts/SF-UI-Text-Bold.otf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          userIsLogin ?
            <Stack.Screen name='CoffeAppNavigation' component={CoffeAppNavigation} />
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