import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { commonStyles } from '../../../common/commonStyles';
import { structureBGCObj } from '../../../modules/data/coffeShops/objs/structureBGCObj';
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
                  <View key={index} style={commonStyles._structureContainer}>
                    <View
                      style={
                        {
                          ...commonStyles._structureItem,
                          backgroundColor: structureBGCObj[key]
                        }
                      }
                    >
                      <Milk
                        style={commonStyles.drinkScreenStructureIcon}
                      />
                    </View>
                    <Text>{item[key]}мл</Text>
                  </View>
                );
  
              } else if ( key === 'coffe') {
                arr.push(
                  <View key={index + 1} style={commonStyles._structureContainer}>
                    <View 
                      style={
                        {
                          ...commonStyles._structureItem,
                          backgroundColor: structureBGCObj[key]
                        }
                      }
                    >
                      <CoffeBeans
                        style={commonStyles.drinkScreenStructureIcon}
                      />
                    </View>
                    <Text>{item[key]}%</Text>
                  </View>
                );
  
              } else if ( key === 'time') {
                arr.push(
                  <View key={index + 2} style={commonStyles._structureContainer}>
                    <View 
                      style={
                        {
                          ...commonStyles._structureItem,
                          backgroundColor: structureBGCObj[key]
                        }
                      }
                    >
                      <Time
                        style={commonStyles.drinkScreenStructureIcon}
                      />
                    </View>
                    <Text>{item[key]}</Text>
                  </View>
                );
  
              } else if ( key === 'temperature') {
                arr.push(
                  <View key={index + 3} style={commonStyles._structureContainer}>
                    <View 
                      style={
                        {
                          ...commonStyles._structureItem,
                          backgroundColor: structureBGCObj[key]
                        }
                      }
                    >
                      <Temperature
                        style={commonStyles.drinkScreenStructureIcon}

                      />
                    </View>
                    <Text>{item[key]} °C</Text>
                  </View>
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