import { Link } from "react-router-dom"

const Movie = ({ title, id, imgUrl, vote_avg, type }) => {
    return (
        <div className="movie">
            <Link to={`../${type}/${id}`} className={"linkMovie"}>
                <img src={`https://image.tmdb.org/t/p/w300/${imgUrl}`} alt={title} />
                <span className="movieName">{title}</span>
                <span className="movieVoteAvg">{vote_avg}</span>
            </Link>
        </div>
    )
}

export default Movie