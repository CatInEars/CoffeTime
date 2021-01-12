import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { commonStyles } from '../../../common/commonStyles';
import { IStructure } from '../../../types/data/IStructure';
import { CoffeBeans } from '../../svg/DrinkComponents/CoffeBeans';
import { Milk } from '../../svg/DrinkComponents/Milk';
import { Temperature } from '../../svg/DrinkComponents/Temperature';
import { Time } from '../../svg/DrinkComponents/Time';

interface IProps {
  structure: IStructure
}

export function DrinkStructure({ structure }: IProps) {
  const time = (new Date).getTime();
  return (
    <View>
      <FlatList
          data={[structure]}
          renderItem={({ item, index }: any) => {
  
            const arr = [];
  
            for (let key in item) {
              
              if ( key === 'milk' ) {
                arr.push(
                  <Milk
                    style={commonStyles.drinkScreenStructureIcon}
                    key={index}
                  />
                );
  
              } else if ( key === 'coffe') {
                arr.push(
                  <CoffeBeans
                    style={commonStyles.drinkScreenStructureIcon}
                    key={index + 1}
                  />
                );
  
              } else if ( key === 'time') {
                arr.push(
                  <Time
                    style={commonStyles.drinkScreenStructureIcon}
                    key={index + 2}
                  />
                );
  
              } else if ( key === 'temperature') {
                arr.push(
                  <Temperature
                    style={commonStyles.drinkScreenStructureIcon}
                    key={index + 3}
                  />
                );
  
              } else {
                throw new Error(`Undefined structure name; ${key}`);
              }
  
            }
  
            return (
              <View style={commonStyles.drinkScreenStructureContainer}>
                {arr}
              </View>
            );
  
          }}
          keyExtractor={item => time.toString()}
        />
    </View>
  );
} 