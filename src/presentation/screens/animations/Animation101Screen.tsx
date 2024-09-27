/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';
import {ThemeContext} from '../../context/ThemeContext';
import {CustomView} from '../../components/ui/CustomView';
import {Button} from '../../components/ui/Button';

export const Animation101Screen = () => {
  const {colors} = useContext(ThemeContext);
  const {animateTop, animateOpacity, fadeIn, fadeOut, startMovingTopPosition} =
    useAnimation();

  return (
    <CustomView style={styles.constainer}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
          },
          {
            opacity: animateOpacity,
            transform: [
              {
                translateY: animateTop,
              },
            ],
          },
        ]}
      />

      <Button
        text="FadeIn"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            duration: 750,
            easing: Easing.elastic(1),
          });
        }}
        style={{marginTop: 10}}
      />

      <Button
        text="FadeOut"
        onPress={() => fadeOut({})}
        style={{marginTop: 10}}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
