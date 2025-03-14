import { movieApi } from "../movies/api/movie-api"
import { CastMapper } from "@/infraestructure/interface/mappers/cast.mapper"
import { CastResponse } from "@/infraestructure/interface/cast-response"
import { CastInterface } from "@/infraestructure/interface/cast.interface"

export const getMovieCastAction = async(movieId: number): Promise<CastInterface> => {
    try {
        const {data} = await movieApi.get<CastResponse>(`/${movieId}/credits`)
        // console.log('in get movie cast action')
        // console.log(data)
        return CastMapper.fromTheMovieDBToMovieCast(data)
    } catch(error) {
        console.log(error)
        throw 'Cannot load cast now'
    }
}