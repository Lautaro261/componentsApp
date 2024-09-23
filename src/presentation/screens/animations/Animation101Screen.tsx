/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Pressable, Animated, Easing} from 'react-native';
import { colors } from '../../../config/theme/globalTheme';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {
    const { animateTop, animateOpacity, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();

  return (
    <View style={styles.constainer}>
        <Animated.View
        style={[
            styles.purpleBox,
            {
                opacity: animateOpacity,
                transform:[{
                    translateY: animateTop,
                }],
            },
        ]}
        />

        <Pressable
        onPress={()=>{
            fadeIn({});
            startMovingTopPosition({
                initialPosition:-100,
                duration:750,
                easing: Easing.elastic(1),
            });
        }}
        style={{marginTop:10}}
        >
            <Text>FadeIn</Text>
        </Pressable>

        <Pressable
        onPress={()=>fadeOut({})}
        style={{marginTop:10}}
        >
            <Text>FadeOut</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    purpleBox:{
        backgroundColor: colors.primary,
        width: 150,
        height:150,
    },
});

