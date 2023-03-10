import { Link } from "react-router-dom"


const TrendingMovie = ({ title, id, type, imgUrl, vote_avg }) => {
    return (
        <div className="trendingMovie">
            <Link to={`../${type}/${id}`} >
                <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} alt={title} />
                <span className="movieName">{title}</span>
                <span className="movieVoteAvg">{vote_avg}</span>
            </Link>
        </div>
    )
}

export default TrendingMovie