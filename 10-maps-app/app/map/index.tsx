import { ThemedText } from '@/presentation/components/shared/ThemedText'
import React from 'react'
import { View } from 'react-native'

const MapScreen = () => {
  return (
    <View style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ThemedText>MapScreen</ThemedText>
    </View>
  )
}

export default MapScreen