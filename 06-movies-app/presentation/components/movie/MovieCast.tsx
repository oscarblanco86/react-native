import { View, Text } from 'react-native'
import React from 'react'
// import { Cast } from '@/infraestructure/interface/cast-response'
import { CastInterface } from '@/infraestructure/interface/cast.interface'
import { useMovieCast } from '@/presentation/hooks/useMovieCast'

interface Props {
  movieId: number
}

const MovieCast = ({ movieId }: Props) => {
  const { movieCastQuery } = useMovieCast(+movieId)
  console.log("in movie cast")
  console.log(movieCastQuery)
  if (movieCastQuery.isLoading) {
    return (
      <View>
        <Text>Loading Cast...</Text>
      </View>
    )
  }

  if (movieCastQuery.isError) {
    return (
      <View>
        <Text>Error loading cast: {movieCastQuery.error}</Text>
      </View>
    )
  }
  return (
    <View>
      <Text>MovieCast</Text>
      {/* <Text>{cast.}</Text> */}
    </View>
  )
}

export default MovieCast