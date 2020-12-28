import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { View, Animated, BackHandler } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { CoffeListTabIcon } from '../../core/svg/CoffeListTabIcon';
import { MapTabIcon } from '../../core/svg/MapTabIcon';

export function CoffeListTabBar() {
  const navigation = useNavigation();
  const leftPosition = useRef(new Animated.Value(0)).current;
  const [screenNow, setScreenNow] = useState('MapScreen'); 
  
  BackHandler.addEventListener('hardwareBackPress', () => {
    alert('Jeasas')
    return null
  });

  function handleAnimate(toValue: number) {
    setTimeout(() => {
      Animated.timing(leftPosition, {
        toValue: toValue,
        duration: 180,
        useNativeDriver: false
      }).start();
    }, 0)
  }

  return (
    <View style={commonStyles.coffeTabNavigatorContainer}>
      <View style={commonStyles.coffeTabNavigator} 
      >
        <TouchableWithoutFeedback 
          style={{
            ...commonStyles.coffeTabNavigatorButtonBlock,
            left: 0, 
            borderTopLeftRadius: 100, 
            borderBottomLeftRadius: 100
          }}
          onPress={() => {
            handleAnimate(0);
            navigation.navigate('MapScreen');
            setScreenNow('CoffeShopList');
          }}
        >
          <MapTabIcon />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback  
          style={{
            ...commonStyles.coffeTabNavigatorButtonBlock,
            right: 0, 
            borderTopRightRadius: 100, 
            borderBottomRightRadius: 100
          }}
          onPress={() => {
            handleAnimate(1);
            navigation.navigate('CoffeShopList');
            setScreenNow('MapScreen');
          }}
        >
          <CoffeListTabIcon />
        </TouchableWithoutFeedback>
        <Animated.View 
          style={{
            ...commonStyles.coffeTabNavigatorBackground,
            left: leftPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [2, 73]
            })
          }} 
        />
      </View>
    </View>
  );
}