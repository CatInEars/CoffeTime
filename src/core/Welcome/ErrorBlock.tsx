import React, { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

interface IProps {
  errorType: string,
  setError: (error: string) => void
}

export function ErrorBlock({ errorType, setError }: IProps ) {
  const bottom = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(bottom, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false
    }).start(() => {
      setTimeout(() => {
        Animated.timing(bottom, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false
        }).start(() => setError(''));
      }, 1500);
    });
  });

  return (
    <Animated.View style={
      {
        ...commonStyles.errorContainer,
        bottom: bottom.interpolate({
          inputRange: [0, 1],
          outputRange: [-60, 0]
        })
      }
    }>
      <Text style={
        {
          ...commonStyles.errorText,
          fontFamily: 'SFUITextRegular'
        }
      }>
        {
          errorType === 'EMPTY' ? 'Введите ваше имя' : 'Имя слишком короткое'
        }
      </Text>
    </Animated.View>
  );
}