

const Movie = ({ title, id, imgUrl, vote_avg }) => {
    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w300/${imgUrl}`} alt={title} />
            <span className="movieName">{title}</span>
            <span className="movieVoteAvg">{vote_avg}</span>
        </div>
    )
}

export default Movie