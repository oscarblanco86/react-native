import { movieApi } from "../movies/api/movie-api"
import { CastMapper } from "@/infraestructure/interface/mappers/cast.mapper"
import { CastResponse } from "@/infraestructure/interface/cast-response"
import { CastInterface } from "@/infraestructure/interface/cast.interface"

export const getMovieCastAction = async(movieId: number) => {
    try {
        const {data} = await movieApi.get<CastResponse>(`/${movieId}/credits`)
        const mappedCast = data.cast.map((actor) => 
            CastMapper.fromTheMovieDBToMovieCast(actor)
        );
        return mappedCast
    } catch(error) {
        console.log(error)
        throw 'Cannot load cast now'
    }
}