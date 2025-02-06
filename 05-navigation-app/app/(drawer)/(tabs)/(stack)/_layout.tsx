import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useNavigation } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, StackActions } from '@react-navigation/native'

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack:boolean) => {
    if (canGoBack) {
      navigation.dispatch(StackActions.pop(1))
      return
    }
    navigation.dispatch(DrawerActions.toggleDrawer)
  }
  return (
    <><StatusBar style='dark'></StatusBar>
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
        headerLeft: ({ tintColor, canGoBack}) => (
          <Ionicons 
            name={ canGoBack ? 'arrow-back-outline' : 'grid-outline' }
            className='mr-5' 
            size={20}
            onPress={() => onHeaderLeftClick(canGoBack)} 
          />
        ) 
      }}
    >
      <Stack.Screen
        name='home/index'
        options={{
          title: 'Inicio'
        }} />
      <Stack.Screen
        name='products/index'
        options={{
          title: 'Productos',
          // animation: 'ios',
        }} />
      <Stack.Screen
        name='profile/index'
        options={{
          title: 'Perfil'
        }} />
      <Stack.Screen
        name='settings/index'
        options={{
          title: 'Ajustes'
        }} />
    </Stack></>
  )
}

export default StackLayout