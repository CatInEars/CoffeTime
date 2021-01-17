import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TouchableHighlight, ToastAndroid } from 'react-native';
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

  function handlePress(): void {
    ToastAndroid.show('Ну купил, и что?', ToastAndroid.SHORT)
  }

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

        <TouchableHighlight 
          style={commonStyles.drinkScreenButton} 
          onPress={handlePress}
        >
          <Text style={commonStyles.drinkScreenButtonText}>заказать</Text>
        </TouchableHighlight>
      </View>

    </View>
  );
}