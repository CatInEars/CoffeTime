import React, { useState } from 'react';
import { Image, View, TouchableHighlight } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import * as ImagePicker from 'expo-image-picker';

export function SelectPhoto() {
  const [image, setImage] = useState<null | string>(null);
  const plusIcon = require('../../../images/plus.png');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={commonStyles.selectPhotoContainer}>
      {
        image 
        ? 
          <>
            <Image source={{uri: image}} style={commonStyles.selectedPhoto} />
            <View style={commonStyles.selectedPhotoCircle} />
          </>
        :
          <TouchableHighlight onPress={pickImage}>
            <Image source={plusIcon} style={commonStyles.selectPhotoPlusIcon} />
          </TouchableHighlight>
      }
    </View>
  )
}