

const TrendingMovie = ({ title, id, imgUrl, vote_avg }) => {
    return (
        <div className="trendingMovie">
            <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} alt={title} />
            <span className="movieName">{title}</span>
            <span className="movieVoteAvg">{vote_avg}</span>
        </div>
    )
}

export default TrendingMovie