import React, { useState } from 'react';
import { Button, NativeModules, View } from 'react-native';
import { commonStyles } from '../../common/commonStyles';

export function SelectPhoto() {
  const ImagePicker = NativeModules.ImageCropPicker;
  const [imageSrc, setImageSrc] = useState('');

  function showImage() {
    ImagePicker.openPicker({
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    }).then((image: any) => {
      setImageSrc(image);
    });
    return '';
  }

  return (
    <View style={commonStyles.selectPhotoContainer}>
      <Button 
        title='CLICK'
        onPress={showImage}
      />
    </View>
  )
}