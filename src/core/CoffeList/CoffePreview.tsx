import React from 'react';
import { Image, Text, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { ICoffeShop } from '../../types/data/ICoffeShop';

export function CoffePreview({ image, name }: ICoffeShop) {
  return (
    <View
      style={commonStyles.coffePreviewContainer}
    >

      <Image source={image} style={commonStyles.coffePreviewImage} />

      <View style={commonStyles.coffePreviewInfoContainer}>
      <Text style={{fontFamily: 'SFUITextRegular'}}>{name}</Text>
      </View>
    </View>
  );
}