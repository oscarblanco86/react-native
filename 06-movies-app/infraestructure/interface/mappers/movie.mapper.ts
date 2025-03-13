import { CastResponse } from "../cast-response"
import { CastInterface } from "../cast.interface"
import { CompleteMovie, Movie } from "../movie.interface"
import { MovieDBMovieResponse } from "../moviedb-movie.response"
import { Result } from "../moviedb-response"

export class MovieMapper {
    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
        }
    }
    static fromTheMovieDBToCompleteMovie = ( movie: MovieDBMovieResponse ): CompleteMovie => {
        const baseMovie = this.fromTheMovieDBToMovie(movie as Result);
        return {
            // ...this.fromTheMovieDBToMovie,
            // id: movie.id,
            // title: movie.title,
            // description: movie.overview,
            // releaseDate: new Date(movie.release_date),
            // poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            // backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            ...baseMovie,
            rating: movie.vote_average,
            budget: movie.budget,
            duration: movie.runtime,
            genres: movie.genres.map( idG => idG.name),
            orignalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(idC => idC.name)
        }
    }
}
