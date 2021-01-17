import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { activeButtonColor } from '../../common/colors';
import { googleMapsStyle } from '../../modules/data/googleMapsStyle';

export function MapScreen() {
  const [region, setRegion] = useState<any>(undefined);
  const image = require('../../../images/location.png');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setRegion(e.coords);
    });
  }, [])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {
        region ?
          <MapView
            style={{width: '100%', height: '100%'}}
            customMapStyle={googleMapsStyle}
            showsUserLocation={true}
            region={{
              latitude: region.latitude,
              longitude: region.longitude,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02
            }}
          />
        :
        <ActivityIndicator color={activeButtonColor} size={64} />
      }
    </View>
  );
}