import React, { useRef } from 'react';
import { Dispatch } from 'redux';
import { Image, View, TouchableHighlight, Animated } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';
import { IAppState } from '../../types/redux/state/IAppState';
import { IUserPhotoAction } from '../../types/redux/actions';

interface IProps {
  photo: any,
  onPickPhoto: (photo: any) => void
}

function selectPhoto({ photo, onPickPhoto}: IProps) {
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
      onPickPhoto(result.uri);
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
        photo 
        ? 
          <>
            <Image source={{uri: photo}} style={commonStyles.selectedPhoto} />
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

export const SelectPhoto = connect(
  (state: IAppState) => ({
    photo: state.user.photo
  }),
  (dispatch: Dispatch<IUserPhotoAction>) => ({
    onPickPhoto: (photo: any) => dispatch({type: 'USER_PHOTO_SELECT', photo}) 
  })
)(selectPhoto)