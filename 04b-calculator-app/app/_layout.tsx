import { Slot } from 'expo-router';

import { View, Text } from 'react-native'
import React from 'react'

const RootLayout = () => {
  return (
    <View>
      <Text>Header</Text>

      <Slot />
      <Text>Footer</Text>
    </View>
  )
}

export default RootLayout