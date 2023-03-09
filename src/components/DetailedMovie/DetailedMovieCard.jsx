import defaultimage from '../../img/defaultposter.png'

export const DetailedMovieCard = ({movie}) => {

    return(
        <div>
            <img src={!movie.poster_path ? defaultimage : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} width='300'/>
            <div>
                <h1>{movie.title} {movie.release_date && (<span>({movie.release_date.substring(0, 4)})</span>)}</h1>
                <p>User score: {Math.round(movie.vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h2>Genres</h2>
                <p>{movie.genres?.length > 0 ? (movie.genres.map(genre => genre.name).join(', ')) : 'There is no information about genres'}</p>
            </div>
        </div>
    )
}