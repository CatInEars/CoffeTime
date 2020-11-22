import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { View, Animated } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { commonStyles } from '../common/commonStyles';
import { CoffeListTabIcon } from '../core/svg/CoffeListTabIcon';
import { MapTabIcon } from '../core/svg/MapTabIcon';

export function CoffeListTabBar() {
  const navigation = useNavigation();
  const leftPosition = useRef(new Animated.Value(0)).current;

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
            Animated.timing(leftPosition, {
              toValue: 0,
              duration: 250,
              useNativeDriver: false 
            }).start();
            navigation.navigate('MapScreen');
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
            Animated.timing(leftPosition, {
              toValue: 1,
              duration: 250,
              useNativeDriver: false 
            }).start();
            navigation.navigate('home');
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