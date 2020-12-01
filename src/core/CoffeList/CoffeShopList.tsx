import React from 'react';
import { LogBox, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { CoffeShopsDataList } from '../../modules/data/CoffeShopsDataList';
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
          data={CoffeShopsDataList}
          renderItem={({item}) => <CoffePreview {...item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </ScrollView>
    </View>
  )
}