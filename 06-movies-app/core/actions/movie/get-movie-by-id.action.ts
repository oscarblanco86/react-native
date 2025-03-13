import { movieApi } from "../movies/api/movie-api"
import { MovieMapper } from "@/infraestructure/interface/mappers/movie.mapper"
import { CompleteMovie } from "@/infraestructure/interface/movie.interface"
import { MovieDBMovieResponse } from "@/infraestructure/interface/moviedb-movie.response"

export const getMovieByIdAction = async(id: number): Promise<CompleteMovie> => {
    try {
        const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`)
        // const movie = await movieApi.get<MovieDBMovieResponse>(`/${id}`)
        console.log('ingetmoviebyidaction')
        console.log(data)
        // console.log("movie",movie)
        return MovieMapper.fromTheMovieDBToCompleteMovie(data)
    } catch(error) {
        console.log(error)
        throw 'Cannot load now playing movies'
    }

}