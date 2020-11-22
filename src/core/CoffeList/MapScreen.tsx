import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { googleMapsStyle } from '../../modules/data/googleMapsStyle';

export function MapScreen() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const navigation = useNavigation();

  navigation.setOptions({
    animationTypeForReplace: 'push'
  })

  const image = require('../../../images/coffeList.png');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setY(e.coords.latitude);
      setX(e.coords.longitude);
    });

    navigation.setOptions({
      tabBarIcon: () => (<Image style={{width: 24, height: 24}} source={image} />)
    })
  }, [])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <MapView
          style={{width: '100%', height: '100%'}}
          customMapStyle={googleMapsStyle}
          showsUserLocation={true}
        >
          {/* <Marker 
            coordinate={{
              longitude: x,
              latitude: y
            }}
          /> */}
        </MapView>
    </View>
  );
}