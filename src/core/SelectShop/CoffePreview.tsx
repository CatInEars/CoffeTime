import React from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { ICoffeShop } from '../../types/data/ICoffeShop';
import { useNavigation } from '@react-navigation/native';

export function CoffePreview(props: ICoffeShop) {
  const readMoreImage = require('../../../images/icon_read_more.png');
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={commonStyles.coffePreviewContainer}
      onPress={() => navigation.navigate('ShopScreen', props)}
      underlayColor='#E7E7E7'
    >
      <>

        <Image source={props.coffePreviewImage} style={commonStyles.coffePreviewImage} />

        <View>
          <View style={commonStyles.coffePreviewNameContainer}>

            <Text 
              style={{
                ...commonStyles.coffePreviewCoffeName, 
                fontFamily: 'SFUITextBold'
              }}
            >
              {props.name}
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
              {props.address}
            </Text>
          </View>

        </View>

        <View style={commonStyles.coffePreviewButtonContainer}>
          <Text style={commonStyles.coffePreviewButtonText}>Подробнее</Text>
          <Image source={readMoreImage} style={{width: 22, height: 22}}/>
        </View>
      </>

    </TouchableHighlight>
  );
}