import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { googleMapsStyle } from '../../modules/data/googleMapsStyle';

export function CoffeList() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <MapView
          onRegionChange={(e) => {
            setY(+e.latitude.toFixed(5));
            setX(+e.longitude.toFixed(5));
          }}
          style={{width: '100%', height: '100%'}}
          customMapStyle={googleMapsStyle}
         
        />
        <View style={{position: 'absolute', bottom: 50 ,backgroundColor: 'rgba(211, 211, 211, 0.6)', paddingHorizontal: 35, paddingVertical: 15, borderRadius: 20, width: 300, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 14}}>{x}; {y}</Text>
        </View>
    </View>
  );
}