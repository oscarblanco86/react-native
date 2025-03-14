import { MovieDBMoviesResponse } from "@/infraestructure/interface/moviedb-response"
import { movieApi } from "./api/movie-api"
import { MovieMapper } from "@/infraestructure/interface/mappers/movie.mapper"

export const nowPlayingAction = async() => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing')
        // console.log(JSON.stringify(data,null,2))
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
        // console.log(movies)
        return movies
    } catch(error) {
        console.log(error)
        throw 'Cannot load now playing movies'
    }
}