import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native';

export const useAnimations = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(-100)).current;

    const fadeIn = ({ 
        duration = 300, 
        toValue = 1, 
        useNativeDriver = true, 
        easing = Easing.linear,
        callback = () => {}
    }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
        }).start(callback)
    }

    const fadeOut = ({ 
        toValue = 0, 
        duration = 300, 
        useNativeDriver = true, 
        easing = Easing.ease,
        callback = () => {}
    }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
            // }).start(() => animatedTop.setValue(-100))
        }).start(callback)
    }

    const startMovingTopPosition = ({ 
        initialPosition = -100,
        toValue = 0, 
        duration = 700, 
        useNativeDriver = true, 
        easing = Easing.bounce,
        callback = () => {}
    }) => {
        animatedTop.setValue(initialPosition)
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
            // easing: Easing.elastic(3)
        }).start(callback)
    }
    return {
        animatedOpacity,
        animatedTop,
        fadeIn,
        fadeOut,
        startMovingTopPosition
    }
}
