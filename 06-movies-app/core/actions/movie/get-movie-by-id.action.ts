import { movieApi } from "../movies/api/movie-api"
import { MovieMapper } from "@/infraestructure/interface/mappers/movie.mapper"
import { CompleteMovie } from "@/infraestructure/interface/movie.interface"
import { MovieDBMovieResponse } from "@/infraestructure/interface/moviedb-movie.response"

export const getMovieByIdAction = async(id: number): Promise<CompleteMovie> => {

    try {
        const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`)
        console.log('Pelicula Cargada')
        return MovieMapper.fromTheMovieDBToCompleteMovie(data)
    } catch(error) {
        console.log(error)
        throw 'Cannot load now playin movies'
    }

}