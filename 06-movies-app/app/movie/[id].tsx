import { useLocalSearchParams } from 'expo-router'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useMovie } from '@/presentation/hooks/useMovie';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieCast from '@/presentation/components/movie/MovieCast';
import { useMovieCast } from '@/presentation/hooks/useMovieCast';

const MovieScreen = () => {
  const { id } = useLocalSearchParams()
  const { movieQuery } = useMovie(+id)
  const { movieCastQuery } = useMovieCast(+id)
  // for (const key in movieQuery.data ) {
  //   if (movieQuery.data.hasOwnProperty(key)) {
  //     console.log(`${key}: ${movieQuery.data[key]}`)
  //   }
  // }
  // console.log(movieQuery)
  console.log("in id",movieCastQuery)
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
      <Text>movie id: {id}</Text>
      <MovieDescription movie={movieQuery.data}/>
      {/* <MovieCast cast={movieQuery.data}/> */}
      {/* <Text>{ movieQuery.data.orignalTitle}</Text> */}
    </ScrollView>
  )
}

export default MovieScreen