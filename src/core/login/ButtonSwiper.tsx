import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, PanResponder, Text, Image} from 'react-native';
import { SwiperText } from './SwiperText';
import { SwipersButton } from './SwipersButton';
import { commonStyles } from '../../common/commonStyles';
import { buttonsArr } from '../../modules/data/buttonsArr';
import { IButtons } from '../../types/data/IButtons';

export function ButtonSwiper() {
  const [bottomChecker, setBottomChecker] = useState(true);
  const [swipeControll, setSwipeControll] = useState(false);

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
        
        if (dy >= 200) {

          setSwipeControll(true);
          Animated.timing(fadeOut, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false
          }).start();
          Animated.spring(buttonContainerScroll, {
            toValue: 1,
            useNativeDriver: false,
            bounciness: 10
          }).start();

        } else if (dy > 100 && vy > 0.3) {

          setSwipeControll(true);
          Animated.timing(fadeOut, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false
          }).start();
          Animated.spring(buttonContainerScroll, {
            toValue: 1,
            useNativeDriver: false,
            bounciness: 9
          }).start();
          
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

    return () => {
      //TODO
    }
  }, [bottomChecker]);

  return (
    <View style={commonStyles.buttonSwiper}>
      <SwiperText 
        fadeOut={fadeOut}
        panResponder={panResponder}
        swipeControll={swipeControll}
        bottomInterval={bottomInterval} 
        pan={pan}
      />

      {
        buttonsArr.map((item: IButtons, index: number) => {
          return (
            <SwipersButton 
              item={item}
              index={index}
              buttonContainerScroll={buttonContainerScroll}
            />
          );
        })
      }
    </View>
  );
}