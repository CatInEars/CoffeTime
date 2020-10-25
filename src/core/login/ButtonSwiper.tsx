import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, PanResponder, Text, Image} from 'react-native';
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
      <Animated.View
        style={{
          ...commonStyles.buttonSwiperSwiperElement,
          transform: [{translateY: pan.y}],
          opacity: fadeOut.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
          })
        }}

        {...panResponder.panHandlers}
      >
        <Animated.View 
          style={
            {
              ...commonStyles.buttonSwiperTextLineContainer,
              bottom: 
                swipeControll ? 
                    fadeOut.interpolate({
                      inputRange: [0, 1],
                      outputRange: [56, 100]
                    })
                  : bottomInterval.interpolate({
                    inputRange: [0, 1],
                    outputRange: [48, 64]
                  })

            }
          }
        >
          <View style={commonStyles.buttonSwiperTextContainer}>
            <Text style={{
                ...commonStyles.buttonSwiperText,
                fontFamily: 'SFUITextLight'
              }
            }>
              Проведите вверх
            </Text>
          </View>

          <View style={{...commonStyles.buttonSwiperLine}} />
        </Animated.View>
      </Animated.View>

      {
        buttonsArr.map((item: IButtons, index: number) => {
          return (
            <Animated.View
              style={
                {
                  ...commonStyles.buttonSwiper_Buttons,
                  bottom: buttonContainerScroll.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-300, 300]
                  }),
                  backgroundColor: item.backgroundColor
                }
              }
              key={index}
            >
              {item.image !== null && <Image source={item.image} style={{width: item.imageWidth, height: item.imageHeight}} />}
              <Text
                style={
                  {
                    ...commonStyles.facebookButtonText,
                    color: item.textColor
                  }
                }
              >
                {item.title}
              </Text>
            </Animated.View>
          );
        })
      }
    </View>
  );
}