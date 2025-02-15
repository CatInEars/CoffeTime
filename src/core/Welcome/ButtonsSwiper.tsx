import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, PanResponder } from 'react-native';
import { DragText } from './DragText';
import { Buttons } from './Buttons';
import { commonStyles } from '../../common/commonStyles';
import { buttonsArr } from '../../modules/data/buttonsArr';
import { IButtons } from '../../types/data/IButtons';

export function ButtonsSwiper(
  {
  onLoginClick
  }
  : {
    onLoginClick: () => void
  }
) {
  const [bottomChecker, setBottomChecker] = useState(true);
  const [isButtonsOpen, setButtonsOpen] = useState(false);

  const bottomInterval = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;
  const fadeOut = useRef(new Animated.Value(0)).current;
  const buttonContainerScroll = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dy: pan.y }
      ],
      {useNativeDriver: false}
      ),
      onPanResponderRelease: (_, {vy, dy}) => {
        vy = vy * -1;
        dy = dy * -1;
        
        if ((dy > 100 && vy > 0.3) || dy > 200) {
          
          Animated.timing(fadeOut, {
            toValue: 1,
            duration: 120,
            useNativeDriver: false
          }).start();
          Animated.spring(buttonContainerScroll, {
            toValue: 1,
            useNativeDriver: false,
            friction: 5
          }).start(() => {
            setButtonsOpen(true);
          });
          
        } else {

          Animated.spring(pan, { 
            toValue: { x: 0, y: 0 }, 
            useNativeDriver: false 
          }).start();

        }
      }
    })
  ).current;

  useEffect(() => {
    if ( isButtonsOpen ) return;

    if (bottomChecker) {
      Animated.timing(bottomInterval, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: false
      }).start(() => setBottomChecker(false) );
    } else {
      Animated.timing(bottomInterval, {
        toValue: 0,
        duration: 2500,
        useNativeDriver: false
      }).start(() => setBottomChecker(true));
    }
  }, [bottomChecker, isButtonsOpen]);

  return (
    <View style={commonStyles.swiperElementsContainer}>
      {
        !isButtonsOpen &&
        <DragText 
          fadeOut={fadeOut}
          panResponder={panResponder}
          bottomInterval={bottomInterval} 
          pan={pan}
        />
      }

      <Animated.View
        style={
          {
            ...commonStyles.swiperElementsButtonsContainer,
            bottom: buttonContainerScroll.interpolate({
              inputRange: [0, 1],
              outputRange: [-200, 100]
            })
          }
        }
      >
        {
          buttonsArr.map((item: IButtons, index: number) => {
            return (
              <Buttons 
                item={item}
                index={index}
                key={index.toString()}
                onLoginClick={onLoginClick}
              />
            );
          })
        }
      </Animated.View>
    </View>
  );
}