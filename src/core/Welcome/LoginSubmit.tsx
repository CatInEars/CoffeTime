import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { activeButtonColor } from '../../common/colors';
import { commonStyles } from '../../common/commonStyles';

export function LoginSubmit() {
  const [inputValue, setInputValue] = useState('');
  
  return (
    <View style={{alignItems: 'center', bottom: 100}}>
      <TextInput 
        value={inputValue}
        onChangeText={(newValue: string) => setInputValue(newValue)}
        style={
          {
            ...commonStyles.loginInput,
            fontFamily: 'SFUITextLight'
          }
        }
        placeholder='Введите своё имя'
        placeholderTextColor='white'
      />

      <TouchableHighlight
        onPress={() => alert('Hello')}
        underlayColor={activeButtonColor}
        style={
          {
            ...commonStyles._button,
            marginTop: 22
          }
        }
      >
        <Text style={commonStyles._buttonText}>Войти</Text>
      </TouchableHighlight>
    </View>
  );
}