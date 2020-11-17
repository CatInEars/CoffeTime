import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { commonStyles } from '../common/commonStyles';

export function CoffeListTabBar(props: any) {
  const navigation = useNavigation();
  const coffeListImage = require('../../images/coffeList.png')

  useEffect(() => {
    
  });

  return (
    <View style={commonStyles.coffeTabNavigatorContainer}>
      <View style={commonStyles.coffeTabNavigator} 
      // onPress={() => navigation.navigate('asasas')}
      >
        <View 
          style={{
            ...commonStyles.coffeTabNavigatorButtonBlock,
            left: 0, 
            borderTopLeftRadius: 100, 
            borderBottomLeftRadius: 100
          }} 
        >
          <Image source={coffeListImage} />
        </View>
        <View 
          style={{
            ...commonStyles.coffeTabNavigatorButtonBlock,
            right: 0, 
            borderTopRightRadius: 100, 
            borderBottomRightRadius: 100
          }} 
        >
        </View>
      </View>
    </View>
  );
}