import React, { useEffect } from 'react'

import {useFonts} from 'expo-font'
import {Slot, SplashScreen, Stack} from 'expo-router'
import './global.css'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [ fontsLoaded, error] = useFonts({
        'ubuntu-bold': require('./../assets/fonts/Ubuntu-Bold.ttf'),
        'ubuntu-light': require('./../assets/fonts/Ubuntu-Light.ttf'),
        'ubuntu-medium': require('./../assets/fonts/Ubuntu-Medium.ttf'),
        'ubuntu-regular': require('./../assets/fonts/Ubuntu-Regular.ttf')
    })
    
    useEffect(() => {
        if ( error ) throw error;
        if ( fontsLoaded ) SplashScreen.hideAsync();
    }, [fontsLoaded, error])
    
    if ( !fontsLoaded && !error ) return null;
    
  return <Slot />
    // return <Stack />
}

export default RootLayout