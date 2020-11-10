import React, { useEffect, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { ErrorBlock } from './ErrorBlock';
import { LoginSubmit } from './LoginSubmit';
import { SelectPhoto } from './SelectPhoto';

export function Login() {
  const [needShow, setNeedShow] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setNeedShow(false);
    });

    Keyboard.addListener("keyboardDidHide", () => {
      setNeedShow(true);
    });
  });

  return (
    <View style={commonStyles.loginSection}>
      {
        needShow &&
        <SelectPhoto />
      }
      <LoginSubmit setError={setError} />
      {
        !!error && 
        <ErrorBlock errorType={error} setError={setError} />
      }
    </View>
  );
}