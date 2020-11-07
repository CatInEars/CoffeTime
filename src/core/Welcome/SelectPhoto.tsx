import React, { useRef, useState } from 'react';
import { Image, View, TouchableHighlight, Animated } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import * as ImagePicker from 'expo-image-picker';

export function SelectPhoto() {
  const [image, setImage] = useState<null | string>(null);
  const plusIcon = require('../../../images/plus.png');
  const widthHeight = useRef(new Animated.Value(0)).current;
  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      Animated.timing(widthHeight, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false,
        delay: 100
      }).start();
    }
  };

  return (
    <View style={commonStyles.selectPhotoContainer}>
      {
        image 
        ? 
          <>
            <Image source={{uri: image}} style={commonStyles.selectedPhoto} />
            <Animated.View style={
              {
                ...commonStyles.selectedPhotoCircle,
                width: widthHeight.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 170]
                }),
                height: widthHeight.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 170]
                })
              } 
            }
            />
          </>
        :
          <TouchableHighlight onPress={pickImage}>
            <Image source={plusIcon} style={commonStyles.selectPhotoPlusIcon} />
          </TouchableHighlight>
      }
    </View>
  )
}