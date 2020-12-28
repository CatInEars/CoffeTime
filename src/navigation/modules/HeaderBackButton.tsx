import React from 'react';
import { View } from 'react-native';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { commonStyles } from '../../common/commonStyles';
import { BackButton } from '../../core/svg/BackButton';

export function HeaderBackButton() {
  return (
    <View style={{width: 30, height: 25, position: 'absolute', left: 0}}>
      <BackButton />
    </View>
  );
}