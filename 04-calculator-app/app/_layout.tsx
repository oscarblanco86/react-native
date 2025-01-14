import { Slot } from 'expo-router';
import { View, Text } from 'react-native'
import React from 'react'

const RootLayout = () => {
  return (
    <View>
      <Text>RootLayout</Text>
      <Slot />
    </View>
  )
}

export default RootLayout