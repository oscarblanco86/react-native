import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const StackLayout = () => {
  return (
    <><StatusBar style='dark'></StatusBar>
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        }
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