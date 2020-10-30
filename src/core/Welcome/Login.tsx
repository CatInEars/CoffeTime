import React from 'react';
import { View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { LoginSubmit } from './LoginSubmit';
import { SelectPhoto } from './SelectPhoto';

export function Login() {
  return (
    <View style={commonStyles.loginSection}>
      <SelectPhoto />
      <LoginSubmit />
    </View>
  );
}