import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name='home/index'
        options={{
          title: 'Inicio'
        }}
      />
      <Stack.Screen 
        name='products/index'
        options={{
          title: 'Productos'
        }}
      />
      <Stack.Screen 
        name='profile/index'
        options={{
          title: 'Perfil'
        }}
      />
      <Stack.Screen 
        name='settings/index'
        options={{
          title: 'Ajustes'
        }}
      />
    </Stack>
  )
}

export default StackLayout