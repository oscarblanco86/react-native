import { useRef } from 'react';
import { View, Text, Dimensions, useWindowDimensions } from 'react-native'

import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { Movie } from '@/infraestructure/interface/movie.interface'
import MoviePoster from './MoviePoster';


interface Props {
  movies: Movie[]
}

const MainSlideshow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null)
  const width = useWindowDimensions().width
  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) =>
          <MoviePoster
            id={item.id}
            poster={item.poster}
            title={item.title}
            imgClassName='shadow-lg rounded-2xl w-full h-full' />}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  )
}

export default MainSlideshow