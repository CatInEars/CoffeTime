import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { commonStyles } from '../../../common/commonStyles';
import { IDrink } from '../../../types/data/IDrink';

interface IRoute {
  key: any,
  name: any,
  params: IDrink
}

export function DrinkPage() {

  const { params: drinkItem }: IRoute = useRoute();

  return (
    <ScrollView style={commonStyles.drinkScreenContainer}>
      <Image 
        source={drinkItem.image} 
        style={{
          ...commonStyles._banerImage,
          resizeMode: 'center'
        }}
      />

      <View style={commonStyles.drinkScreenInfoContainer}>
        <Text style={commonStyles.drinkScreenName}>
          {drinkItem.name}
        </Text>

        <Text style={commonStyles.drinkScreenDescription}>
          {drinkItem.description}
        </Text>

        <View style={commonStyles.drinkScreenBuyContainer}>
          <Text style={commonStyles.drinkScreenPrice}>{drinkItem.price} ₽</Text>

          <TouchableHighlight style={commonStyles.drinkScreenButton}>
            <Text style={commonStyles.drinkScreenButtonText}>заказать</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
}