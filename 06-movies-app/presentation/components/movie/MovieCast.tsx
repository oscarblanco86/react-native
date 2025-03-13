import { View, Text } from 'react-native'
import React from 'react'
import { Cast } from '@/infraestructure/interface/cast-response'

interface Props {
    cast: Cast
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View>
      <Text>MovieCast</Text>
      {/* <Text>{cast.}</Text> */}
    </View>
  )
}

export default MovieCast