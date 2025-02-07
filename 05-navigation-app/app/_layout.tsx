import { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts } from 'expo-font'
import { Platform, StatusBar } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar';

const isAndroid = Platform.OS === 'android'
if (isAndroid) NavigationBar.setBackgroundColorAsync('black')

import './global.css'

SplashScreen.preventAutoHideAsync()


const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        'ubuntu-bold': require('./../assets/fonts/Ubuntu-Bold.ttf'),
        'ubuntu-light': require('./../assets/fonts/Ubuntu-Light.ttf'),
        'ubuntu-medium': require('./../assets/fonts/Ubuntu-Medium.ttf'),
        'ubuntu-regular': require('./../assets/fonts/Ubuntu-Regular.ttf')
    })

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) return null;



    return <Slot />
    // return <Stack />
}

export default RootLayout