import { useLocalSearchParams } from 'expo-router'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useMovie } from '@/presentation/hooks/useMovie';
import MovieHeader from '@/presentation/components/movie/MovieHeader';

const MovieScreen = () => {
  const { id } = useLocalSearchParams()
  const { movieQuery } = useMovie(+id)
  // for (const key in movieQuery.data ) {
  //   if (movieQuery.data.hasOwnProperty(key)) {
  //     console.log(`${key}: ${movieQuery.data[key]}`)
  //   }
  // }
  console.log(movieQuery)
  if ( movieQuery.isLoading || !movieQuery.data ) {
  return (
    <View className='flex flex-1 justify-center items-center'>
      <Text className='mb-4'>Espere por favor</Text>
      <ActivityIndicator color="teal" size={30} />
    </View>
  )
}
  return (
    <ScrollView>
      <MovieHeader 
        originalTitle={movieQuery.data.orignalTitle}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />

      {/* <Text>{ movieQuery.data.orignalTitle}</Text> */}
    </ScrollView>
  )
}

export default MovieScreen