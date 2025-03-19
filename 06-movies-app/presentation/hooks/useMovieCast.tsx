import { getMovieCastAction } from '@/core/actions/movie/get-movie-cast.action'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useMovieCast = (id: number) => {
    const movieCastQuery = useQuery({
        queryKey: ['cast',id],
        queryFn: () => getMovieCastAction(id),
        staleTime: 1000 * 60 * 60 * 24
    })
    const cast = movieCastQuery.data || []
  return {cast}
}
