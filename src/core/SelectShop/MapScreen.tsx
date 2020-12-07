import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { activeButtonColor } from '../../common/colors';
import { googleMapsStyle } from '../../modules/data/googleMapsStyle';

export function MapScreen() {
  const [region, setRegion] = useState<any>(null);
  const [regionGet, setRegionGet] = useState(false);

  const navigation = useNavigation();

  const image = require('../../../images/coffeList.png');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setRegion(e.coords);
      setRegionGet(true);
    });

    navigation.setOptions({
      tabBarIcon: () => (<Image style={{width: 24, height: 24}} source={image} />)
    })
  }, [])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {
        regionGet ?
          <MapView
            style={{width: '100%', height: '100%'}}
            customMapStyle={googleMapsStyle}
            showsUserLocation={true}
            showsMyLocationButton={false}
            region={{
              latitude: region.latitude,
              longitude: region.longitude,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02
            }}
          >
            {/* <Marker 
              coordinate={{
                longitude: x,
                latitude: y
              }}
            /> */}
          </MapView>
        :
        <ActivityIndicator color={activeButtonColor} size='large' />
      }
    </View>
  );
}