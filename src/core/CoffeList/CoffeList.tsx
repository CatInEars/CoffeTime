import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { googleMapsStyle } from '../../modules/data/googleMapsStyle';

export function CoffeList() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setY(e.coords.latitude);
      setX(e.coords.longitude);
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