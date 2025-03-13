import { getMovieCastAction } from '@/core/actions/movie/get-movie-cast.action'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useMovieCast = (id: number) => {
    const movieCastQuery = useQuery({
        queryKey: ['movie',id],
        queryFn: () => getMovieCastAction(id),
        staleTime: 100 * 60 * 500 * 24
    })
    console.log("use movie cast query",movieCastQuery)
  return {movieCastQuery}
}
