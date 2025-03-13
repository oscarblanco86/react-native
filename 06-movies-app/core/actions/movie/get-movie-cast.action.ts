import { Cast } from "@/infraestructure/interface/cast-response"
import { movieApi } from "../movies/api/movie-api"

export const getMovieCastAction = async(movieId: number) => {
    const {data} = await movieApi.get<Cast>(`/${movieId}/credits`)
}