import { MovieDBMoviesResponse } from "@/infraestructure/interface/moviedb-response"
import { movieApi } from "./api/movie-api"
import { MovieMapper } from "@/infraestructure/interface/mappers/movie.mapper"

interface Options {
    page?: number
    limit?: number
}

export const topRatedAction = async({page = 1, limit = 10}: Options) => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
            params: {
                page: page
            }
        })
        // console.log(JSON.stringify(data,null,2))
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
        // console.log(movies)
        return movies
    } catch(error) {
        console.log(error)
        throw 'Cannot load now playin movies'
    }
}