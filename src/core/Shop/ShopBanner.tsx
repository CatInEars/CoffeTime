import React, { useState } from 'react';
import { View, Text, Switch, Image } from 'react-native';
import { commonStyles } from '../../common/commonStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { ICoffeShop } from '../../types/data/ICoffeShop';

export function ShopBanner({ coffeOutsideImage, name, address }: ICoffeShop) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View style={commonStyles.shopBannerContainer}>

        <LinearGradient
          colors={['transparent', '#F7ECDA']}
          locations={[0.35, 1]}
          style={{...commonStyles.linearGradient, opacity: 1, height: 310}}
        >

          <Image source={coffeOutsideImage} style={commonStyles.shopImage} />

        </LinearGradient>


        <View style={commonStyles.shopBannerInfoContainer}>

          <View>
            <Text style={commonStyles.shopBannerName}>{name}</Text>
            <Text style={commonStyles.shopBannerAddres}>{address}</Text>  
          </View>

          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

        </View>

      </View>
  );
}