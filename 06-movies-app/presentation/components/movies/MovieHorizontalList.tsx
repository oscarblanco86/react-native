import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/infraestructure/interface/movie.interface'
import MoviePoster from './MoviePoster'

interface Props {
  title: string
  movies: Movie[]
  className?: string
}
const MovieHorizontalList = ({ movies, title, className }: Props) => {
  return (
    <View className={`${className}`}>
      <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) =>
          <MoviePoster
            id={item.id}
            poster={item.poster}
            smallPoster
          />
        }
      />
    </View>
  )
}

export default MovieHorizontalList