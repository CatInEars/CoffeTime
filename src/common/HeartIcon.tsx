import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { HeartActive } from '../core/svg/HeartActive';
import { HeartEmpty } from '../core/svg/HeartEmpty';
import { ICoffeShop } from '../types/data/ICoffeShop';
import { IChangeFavoriteAction } from '../types/redux/actions';
import { IAppState } from '../types/redux/state/IAppState';
import { commonStyles } from './commonStyles';

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

  function handlePress() {
    onChangeFavorite(shopIndex, drinkIndex, !isFavorite);
    setFavorite(!isFavorite);
  }
  
  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
    >
      {
        isFavorite ?
          <HeartActive style={commonStyles.heartIcon} />
        :
          <HeartEmpty style={commonStyles.heartIcon} />
      }
    </TouchableWithoutFeedback>
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