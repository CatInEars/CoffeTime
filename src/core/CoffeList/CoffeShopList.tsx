import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { CoffeShopsDataList } from '../../modules/data/CoffeShopsDataList';
import { CoffePreview } from './CoffePreview';

export function CoffeShopList() {
  return (
    <View style={{paddingTop: 60}}>
      <FlatList 
        data={CoffeShopsDataList}
        renderItem={({item}) => <CoffePreview {...item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}