import React, { useEffect, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { LoginSubmit } from './LoginSubmit';
import { SelectPhoto } from './SelectPhoto';

export function Login() {
  const [needShow, setNeedShow] = useState(true);

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
      <LoginSubmit />
    </View>
  );
}