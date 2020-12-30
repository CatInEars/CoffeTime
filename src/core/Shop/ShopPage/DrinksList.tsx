import React from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { commonStyles } from '../../../common/commonStyles';
import { ICoffeShop } from '../../../types/data/ICoffeShop';
import { HeartIcon } from './HeartIcon';
import { IDrink } from '../../../types/data/IDrink';

export function DrinksList({ assortment, id }: ICoffeShop) {
  const navigation = useNavigation();

  function handlePress(drink: IDrink): void {
    navigation.navigate('DrinkScreen', drink);
  }

  return (
    <View style={commonStyles.drinksContainer}>
      {
        assortment.map((item, index) => (

            <View style={commonStyles.drinkBlock} key={index}>
              <TouchableWithoutFeedback
                onPress={() => handlePress(item)}
              >
                <Text style={commonStyles.drinkName}>{item.name}</Text>
                <Text style={commonStyles.drinkType}>{item.type}</Text>

                <Image 
                  source={item.image} 
                  style={commonStyles.drinkImage}
                />

              </TouchableWithoutFeedback>

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