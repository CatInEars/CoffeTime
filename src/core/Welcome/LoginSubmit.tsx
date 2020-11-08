import React, { Dispatch, useRef } from 'react';
import { TextInput, View, Text, Animated, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { activeButtonColor } from '../../common/colors';
import { commonStyles } from '../../common/commonStyles';
import { connect } from 'react-redux';
import { IAppState } from '../../types/redux/state/IAppState';
import { IUserLoginAction, IUserNameAction } from '../../types/redux/actions';

interface IProps {
  setError: (errorType: string) => void,
  onLogin: () => void,
  onChangeName: Dispatch<string>,
  userName: string
}

function loginSubmit({ setError, onLogin, onChangeName, userName }: IProps) {
  const errorIndicator = useRef(new Animated.Value(0)).current;
  const EMPTY = 'EMPTY';
  const LOW_LENGTH = 'LOW_LENGTH';
  let animationWent = false;

  function startAnimation(): void {
    if ( animationWent ) return;
    Animated.timing(errorIndicator, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start(() => {
      setTimeout(() => {
        Animated.timing(errorIndicator, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        }).start();
      }, 1300)
    });
  }

  function validError(typeError: string): void {
    if(typeError === EMPTY) {
      startAnimation();
      setError(EMPTY);
      animationWent = true;
    } else if (typeError === LOW_LENGTH) {
      startAnimation();
      setError(LOW_LENGTH);
      animationWent = true;
    } 
  }

  function handleSubmit() {
    const replacedValue = userName.replace(/\s/g, '');
    if (replacedValue === '') return validError(EMPTY);
    if (replacedValue.length < 2) return validError(LOW_LENGTH);

    onLogin();
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
          value={userName}
          onChangeText={newName => onChangeName(newName)}
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

export const LoginSubmit = connect(
  (state: IAppState) => ({
    userName: state.user.name
  }),
  (dispatch: Dispatch<IUserLoginAction | IUserNameAction>) => ({
    onLogin: () => dispatch({type: 'USER_LOGIN', login: true}),
    onChangeName: (name: string) => dispatch({type: 'CHANGE_NAME', name})
  })
)(loginSubmit);