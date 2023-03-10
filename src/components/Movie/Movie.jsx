import { Link } from "react-router-dom"
import no_image from '../../images/no_image.jpg'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Movie = ({ title, id, imgUrl, vote_avg, type }) => {

    const [like, setLike] = useState('')
    let likeList = localStorage.getItem(type) ? JSON.parse(localStorage.getItem(type)) : []

    const inLikesList = likeList.includes(id)

    useEffect(() => {
        setLike(inLikesList)
    }, [inLikesList])


    const toggleLike = () => {

        // Search Local Storage
        likeList = localStorage.getItem(type) ? JSON.parse(localStorage.getItem(type)) : []

        if (like) {
            const index = likeList.indexOf(id);
            if (index > -1) {
                likeList.splice(index, 1);
            }
        } else {
            likeList = [...likeList, id]
        }

        localStorage.setItem(type, JSON.stringify(likeList))

        setLike(!like)
    }
    return (
        <div className="movie">
            {likeList}
            <span className={like ? "movieLike movieLikeActive" : "movieLike"} onClick={toggleLike}><FontAwesomeIcon icon={faHeart} className='iconHeart' /></span>

            <Link to={`../${type}/${id}`} className={"linkMovie"}>
                <img src={imgUrl ? `https://image.tmdb.org/t/p/w300/${imgUrl}` : no_image} alt={title} />
                <span className="movieName">{title}</span>
                <span className="movieVoteAvg">{vote_avg}</span>
            </Link>
        </div>
    )
}

export default Movie