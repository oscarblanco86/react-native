import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infraestructure/interface/movie.interface'
import MoviePoster from './MoviePoster'

interface Props {
  title: string
  movies: Movie[]
  className?: string
  loadNextPage?: () => void  
}
const MovieHorizontalList = ({ movies, title, className, loadNextPage}: Props) => {
  const isLoading = useRef(false)
  
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width

    if (!isEndReached) return

    isLoading.current = true

    console.log('Cargar siguientes peliculas')

    loadNextPage && loadNextPage()
    
  }
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
        onScroll={onScroll}
      />
    </View>
  )
}

export default MovieHorizontalList