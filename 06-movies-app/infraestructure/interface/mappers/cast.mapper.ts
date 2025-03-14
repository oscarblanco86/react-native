import { CastElement, CastResponse } from "../cast-response"
import { CastInterface } from "../cast.interface"

export class CastMapper {
    static fromTheMovieDBToMovieCast = ( actor: CastElement ): CastInterface => {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : 'https://i.stack.imgur.com/l60Hf.png',

        }
    }
}