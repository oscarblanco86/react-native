import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useMovieCast } from '@/presentation/hooks/useMovieCast'
import CastHorizontalList from '@/presentation/cast/CastHorizontalList'

interface Props {
  movieId: number
}

const MovieCast = ({ movieId }: Props) => {
  // console.log("in movie cast")
  // console.log(useMovieCast(+movieId).cast)

  return (
    <View className='mx-5'>
      <Text
        className={'font-bold text-2xl'}
        style={[styles.heading]}>MovieCast</Text>
      <CastHorizontalList cast = {useMovieCast(+movieId).cast}/>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    textIndent: 3,
    margin: 5
  }
})

export default MovieCast