import React from 'react';
import { LogBox, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { coffeShopsData } from '../../modules/data/coffeShops/coffeShopsData';
import { CoffePreview } from './CoffePreview';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

export function CoffeShopList() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView
        pagingEnabled={false}
        showsVerticalScrollIndicator={false}
        style={commonStyles.coffeShopListScreen}
      >
        <FlatList 
          data={coffeShopsData}
          renderItem={({item, index}) => <CoffePreview {...item} id={index + 1} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </ScrollView>
    </View>
  )
}