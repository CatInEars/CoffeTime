import React from 'react';
import { Image, Text, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { ICoffeShop } from '../../types/data/ICoffeShop';
import { HeartIcon } from './HeartIcon';

export function DrinksList({ assortment, id }: ICoffeShop) {
  return (
    <View style={commonStyles.drinksContainer}>
      {
        assortment.map((item, index) => (
          <View style={commonStyles.drinkBlock} key={index}>
            <Text style={commonStyles.drinkName}>{item.name}</Text>
            <Text style={commonStyles.drinkType}>{item.type}</Text>

            <Image 
              source={item.image} 
              style={commonStyles.drinkImage}
            />

            <View style={commonStyles.drinkBlockBottomInfo}>
              <Text style={commonStyles.drinkPrice}>{item.price} ₽</Text>
              <HeartIcon shopIndex={id} drinkIndex={index} />
            </View>
          </View>
        ))
      }
    </View>
  );
}