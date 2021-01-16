import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { commonStyles } from '../../../common/commonStyles';
import { IDrink } from '../../../types/data/IDrink';
import { HeartActive } from '../../svg/HeartActive';
import { DrinkStructure } from './DrinkStructure';
import { Popular } from './Popular';

interface IRoute {
  key: any,
  name: any,
  params: IDrink
}

export function DrinkPage() {

  const { params: drinkItem }: IRoute = useRoute();

  return (
    <View style={commonStyles.drinkScreenContainer}>
      {
        drinkItem.popular ?
          <Popular />
        :
          null
      }

      <Image 
        source={drinkItem.image} 
        style={{
          ...commonStyles._banerImage,
          resizeMode: 'center'
        }}
      />


      <View style={commonStyles.drinkScreenInfoContainer}>

        <DrinkStructure structure={drinkItem.structure} />
        
        <View style={commonStyles.drinkScreenNameContainer}>
          <Text style={commonStyles.drinkScreenName}>
            {drinkItem.name}
          </Text>

          {
            drinkItem.favorite ?
              <HeartActive style={{
                ...commonStyles.heartIcon,
                ...commonStyles.drinkScreenHeartIcon
              }} />
            :
              null
          }
        </View>

        <Text style={commonStyles.drinkScreenDescription}>
          {drinkItem.description}
        </Text>
      </View>

      <View style={commonStyles.drinkScreenBuyContainer}>
        <Text style={commonStyles.drinkScreenPrice}>{drinkItem.price} ₽</Text>

        <TouchableHighlight style={commonStyles.drinkScreenButton}>
          <Text style={commonStyles.drinkScreenButtonText}>заказать</Text>
        </TouchableHighlight>
      </View>

    </View>
  );
}