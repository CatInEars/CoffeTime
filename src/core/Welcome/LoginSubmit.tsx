import React, { useRef, useState } from 'react';
import { TextInput, View, Text, Animated, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { activeButtonColor } from '../../common/colors';
import { commonStyles } from '../../common/commonStyles';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  setError: (errorType: string) => void
}

export function LoginSubmit({ setError }: IProps) {
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation();
  const errorIndicator = useRef(new Animated.Value(0)).current;
  const EMPTY = 'EMPTY';
  const LOW_LENGTH = 'LOW_LENGTH';

  function startAnimation(): void {
    Animated.timing(errorIndicator, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start(() => {
      Animated.timing(errorIndicator, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start();
    });
  }

  function validError(typeError: string): void {
    if(typeError === EMPTY) {
      startAnimation();
      setError(EMPTY);
    } else if (typeError === LOW_LENGTH) {
      startAnimation();
      setError(LOW_LENGTH);
    } 
  }

  function handleSubmit() {
    const replacedValue = inputValue.replace(/\s/g, '');
    if (replacedValue === '') return validError(EMPTY);
    if (replacedValue.length < 2) return validError(LOW_LENGTH);

    navigation.navigate('CoffeList');
  }
  
  return (
    <View style={commonStyles.loginSubmitContainer}>
      <Animated.View 
        style={
          {
            ...commonStyles.loginInputContainer,
            borderBottomColor: errorIndicator.interpolate({
              inputRange: [0, 1],
              outputRange: ['rgba(255, 255, 255, 0.5)', 'red']
            })
          }
        }
      >
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
        <Image source={require('../../../images/icon_pencil.png')} />
      </Animated.View>
      <TouchableHighlight
        onPress={handleSubmit}
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