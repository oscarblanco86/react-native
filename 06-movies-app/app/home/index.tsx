import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
// import { styled } from 'nativewind';

import { useMovies } from '@/presentation/hooks/useMovies'
import MainSlideshow from '@/presentation/components/movies/MainSlideshow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'

const HomeScreen = () => {
  ``
  const safeArea = useSafeAreaInsets()
  const {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery
  } = useMovies()

  if (nowPlayingQuery.isLoading) {

    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='purple' size={30} />
      </View>
    )

  }

  return (
    <ScrollView>
      <View className='mt-2' style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>
        {/* <Text>{JSON.stringify(nowPlayingQuery.data)}</Text> */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />
        <MovieHorizontalList
          title="Peliculas Populares"
          movies={popularQuery.data ?? []}
          className='mb-5'
        />
        <MovieHorizontalList
          title="Mejor calificadas"
          movies={topRatedQuery.data ?? []}
          className='mb-5'
        />
        <MovieHorizontalList
          title="Por estrenar"
          movies={upcomingQuery.data ?? []}
          className='mb-5'
        />
        <MovieHorizontalList
          title="Proximamente"
          movies={upcomingQuery.data ?? []}
          className='mb-5'
        />
        <MovieHorizontalList
          title="Proximamente"
          movies={upcomingQuery.data ?? []}
          className='mb-5'
        />
        <MovieHorizontalList
          title="Proximamente"
          movies={upcomingQuery.data ?? []}
          className='mb-5'
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen