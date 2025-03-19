import { useLocalSearchParams } from 'expo-router'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useMovie } from '@/presentation/hooks/useMovie';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieCast from '@/presentation/components/movie/MovieCast';

const MovieScreen = () => {
  const { id } = useLocalSearchParams()
  const { movieQuery } = useMovie(+id)
  if (movieQuery.isLoading || !movieQuery.data) {
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
      <MovieDescription movie={movieQuery.data} />
      <MovieCast movieId={id} />
    </ScrollView>
  )
}

export default MovieScreen