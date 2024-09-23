import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    const animateOpacity = useRef(new Animated.Value(0)).current;
    const animateTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({ toValue = 1, duration = 300, callback = ()=>{} })=>{
/*         Animated.timing(animateTop,{
            toValue:0,
            duration:700,
            useNativeDriver:true,
            easing: Easing.bounce, //Easing.elastic(1),
        }).start(()=>console.log('Animation ended')); */

        Animated.timing(animateOpacity,{
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        }).start(callback);
    };

    const fadeOut = ({ toValue = 0, duration = 300, callback = ()=>{} }) =>{
        Animated.timing(animateOpacity, {
            toValue:toValue,
            duration:duration,
            useNativeDriver:true,
        }).start(callback);


    };

    const startMovingTopPosition = ({
        initialPosition = 0,
        ToValue = 0,
        duration = 300,
        easing = Easing.linear,
        callback = ()=>{},
    }) => {

        animateTop.setValue(initialPosition);
        Animated.timing(animateTop, {
            toValue:ToValue,
            duration:duration,
            useNativeDriver:true,
            easing: easing,
        }).start(callback);
    };

//Se puede crear una o dos interfaces para manejar los argumentos.
  return {
    // Properties
    animateOpacity,
    animateTop,
    // Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
