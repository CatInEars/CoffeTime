import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { commonStyles } from '../../common/commonStyles';
import { ICoffeShop } from '../../types/data/ICoffeShop';
import { LinearGradient } from 'expo-linear-gradient';

interface IRoute {
  params: ICoffeShop,
  key: string,
  name: string
}

export function Shop() {
  const route: IRoute = useRoute();
  const { coffeOutsideImage, name } = route.params

  return (
    <View>

      <View>
        <LinearGradient
          colors={['transparent', '#F7ECDA']}
          locations={[0.6, 1]}
          style={{...commonStyles.linearGradient, opacity: 1, height: 310}}
        >
          <Image source={coffeOutsideImage} style={commonStyles.shopImage} />
        </LinearGradient>
        <Text>{name}</Text>
      </View>

    </View>
  )
}