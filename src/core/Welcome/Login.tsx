import React, { useEffect, useState } from 'react';
import { Keyboard, useWindowDimensions, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { LoginSubmit } from './LoginSubmit';
import { SelectPhoto } from './SelectPhoto';

export function Login() {
  const [needShow, setNeedShow] = useState(true);
  const screenHeight = useWindowDimensions().height;

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      if (screenHeight < 800) {
        setNeedShow(false);
      }
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