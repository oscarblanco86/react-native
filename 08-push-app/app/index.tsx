import { ThemedText } from '@/components/ThemedText'
import { usePuchNotifications } from '@/hooks/usePuchNotifications'
import React from 'react'
import { View } from 'react-native'

const PushApp = () => {
    const {} = usePuchNotifications()
  return (
    <View style= {{ marginHorizontal: 10, marginTop: 5}}>
      <ThemedText>Token: </ThemedText>
    </View>
  )
}

export default PushApp  