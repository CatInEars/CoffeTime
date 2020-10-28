import React from 'react';
import { View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { LoginSubmit } from './LoginSubmit';

export function Login() {
  return (
    <View style={commonStyles.loginSection}>
      <View 
        style={
          {
            width: 150,
            height: 150,
            backgroundColor: 'skyblue',
            marginTop: '10%'
          }
        }
      >

      </View>

      <LoginSubmit />
    </View>
  );
}