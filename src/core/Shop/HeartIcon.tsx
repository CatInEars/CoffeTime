import React, { useRef, useState } from 'react';
import { TouchableWithoutFeedback, Animated, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { HeartActive } from '../svg/HeartActive';
import { HeartEmpty } from '../svg/HeartEmpty';
import { ICoffeShop } from '../../types/data/ICoffeShop';
import { IChangeFavoriteAction } from '../../types/redux/actions';
import { IAppState } from '../../types/redux/state/IAppState';
import { commonStyles } from '../../common/commonStyles';

interface IProps {
  shopIndex: number,
  drinkIndex: number,
  shopsArr: ICoffeShop[],
  onChangeFavorite: any
}

function heartIcon({ 
  shopIndex, 
  drinkIndex, 
  shopsArr, 
  onChangeFavorite 
}: IProps) {

  const [isFavorite, setFavorite] = 
    useState(shopsArr[shopIndex].assortment[drinkIndex].favorite);
  const animateProps = useRef(new Animated.Value(0)).current;

  const widthHeigthInterpolate = animateProps.interpolate({
    inputRange: [0, 1],
    outputRange: [30, 33]
  });

  function handlePress() {
    Animated.timing(animateProps, {
      toValue: 1,
      duration: 120,
      useNativeDriver: false
    }).start(() => {
      Animated.timing(animateProps, {
        toValue: 0,
        duration: 120,
        useNativeDriver: false
      }).start();
    });

    onChangeFavorite(shopIndex, drinkIndex, !isFavorite);
    setFavorite(!isFavorite);
  }
  
  return (
    <View style={commonStyles.heartIconContainer}>
      <TouchableWithoutFeedback
        onPress={handlePress}
      >
        {
          isFavorite ?
          <Animated.View 
            style={{
              width: widthHeigthInterpolate, 
              height: widthHeigthInterpolate
            }}
          >

            <HeartActive style={commonStyles.heartIcon} />
          </Animated.View>
          :
          <Animated.View 
            style={{
              width: widthHeigthInterpolate, 
              height: widthHeigthInterpolate
            }}
          >
            <HeartEmpty style={commonStyles.heartIcon} />
          </Animated.View>
        }
      </TouchableWithoutFeedback>
    </View>
  )
}

export const HeartIcon = connect(
  (state: IAppState) => ({
    shopsArr: state.coffeShopsData
  }),
  (dispatch: Dispatch<IChangeFavoriteAction>) => ({
    onChangeFavorite: (shopIndex: number, drinkIndex: number, newValue: boolean) => 
      dispatch({type: 'CHANGE_FAVORITE', drinkIndex, newValue, shopIndex})
  })
)(heartIcon);