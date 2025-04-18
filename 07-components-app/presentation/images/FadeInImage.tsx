import { View, Text, ActivityIndicator, Image, StyleProp, ImageStyle } from 'react-native'
import React, { useState } from 'react'
import { useAnimations } from '@/hooks/useAnimations';

interface Props {
  uri: string,
  // style:
  style: StyleProp<ImageStyle>;
}
const FadeInImages = ({uri, style}:Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const {animatedOpacity, fadeIn } = useAnimations()
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {
        isLoading && (
          <ActivityIndicator 
            style={{position: 'absolute'}}
            color='grey'
            size={30}
          />
        )
      }
      {/* <Text>FadeInImages</Text> */}
      <Image 
        source={{uri}} 
        style={[style]} 
        onLoadEnd={() => {
          fadeIn({}),
          setIsLoading(false)
        }}
      />

    </View>
  )
}

export default FadeInImages