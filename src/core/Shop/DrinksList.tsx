import React from 'react';
import { Image, Text, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { randomMath } from '../../modules/others/randomMath';
import { ICoffeShop } from '../../types/data/ICoffeShop';

export function DrinksList({ assortment }: ICoffeShop) {
  return (
    <View style={commonStyles.drinksContainer}>
      {
        assortment.map((item, index) => (

          <View style={commonStyles.drinkBlock} key={index}>
            <Text style={commonStyles.drinkName}>{item.name}</Text>
            <Text style={commonStyles.drinkType}>{item.type}</Text>

            {/*
              Тут какая то дурка, честно, потратил полчаса, что бы понять почему  
              у меня в исходный обьект не кладется рандомная пикча, так и не понял, 
              но понял, что если на место image класть весь массив, то отсюда уже
              иожно достать рандомную :(
            */}

            <Image 
              source={item.image[randomMath(0, item.image.length - 1)]} 
              style={commonStyles.drinkImage} 
            />
          </View>

        ))
      }
    </View>
  );
}