import React from 'react';
import { Image, Text, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { ICoffeShop } from '../../types/data/ICoffeShop';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export function CoffePreview({ image, name }: ICoffeShop) {
  const readMoreImage = require('../../../images/icon_read_more.png');
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      style={commonStyles.coffePreviewContainer}
      onPress={() => navigation.navigate('ShopInfoScreen')}
    >

      <Image source={image} style={commonStyles.coffePreviewImage} />

      <View>
        <View style={commonStyles.coffePreviewNameContainer}>

          <Text 
            style={{
              ...commonStyles.coffePreviewCoffeName, 
              fontFamily: 'SFUITextBold'
            }}
          >
            {name}
            </Text>

        </View>

        <View style={commonStyles.coffePreviewDescribeContainer}>
          <Text 
            style={{
              ...commonStyles.coffePreviewDescribeText, 
              fontFamily: 'SFUITextLight'
            }}
          >
            Мы находимся: 
          </Text>

          <Text 
            style={{
              ...commonStyles.coffePreviewDescribeText, 
              fontFamily: 'SFUITextRegular', 
              fontSize: 16
            }}
          >
            ул. Юности д. 120
          </Text>
        </View>

      </View>

      <View style={commonStyles.coffePreviewButtonContainer}>
        <Text style={commonStyles.coffePreviewButtonText}>Подробнее</Text>
        <Image source={readMoreImage} style={{width: 22, height: 22}}/>
      </View>
    </TouchableWithoutFeedback>
  );
}