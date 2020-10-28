import React from 'react';
import { Text, Image, ToastAndroid } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { IButtons } from '../../types/data/IButtons';

export function Buttons(
  { 
    item, 
    index,
    onLoginClick
  }: {
    item: IButtons,
    index: number,
    onLoginClick: () => void
  }
) {
  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <TouchableHighlight
      onPress={() => {
        if (!item.activateLogin) {
          return showToast('Войдите через CoffeTime');
        }
        onLoginClick();
      }}
      style={
        {
          ...commonStyles._button,
          ...commonStyles.buttonSwiperButton,
          backgroundColor: item.backgroundColor
        }
      }
      underlayColor={item.onPressBackgroundColor}
      key={index.toString()}
    >
      <>
        {
          item.image !== null && 
          <Image 
            source={item.image} 
            style={
              {
                width: item.imageWidth, 
                height: item.imageHeight
              }
            } 
          />
        }

        <Text
          style={
            {
              ...commonStyles.facebookButtonText,
              color: item.textColor
            }
          }
        >
          {item.title}
        </Text>
      </>
    </TouchableHighlight>
  );
}