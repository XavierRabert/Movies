import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import headers from "../../common/Headers"
import Movie from "./Movie"

const Similar = ({ id, type }) => {

    console.log('id', { id })
    const [movies, setMovies] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/similar`, headers)
            const data = await response.json()

            console.log('similar', data)
            setMovies(data.results.slice(0, 5))

        }

        fetchData()
    }, [id])



    return (
        <div className="similarMovies">
            <h2>Similar</h2>
            <div className='contentMovies'>
                {movies === '' ? '' :
                    movies.map(movie => (
                        // <Link to={`../${type}/${movie.id}`} key={movie.id}>
                        <Movie
                            key={movie.id}
                            title={type === 'movie' ? movie.title : movie.name}
                            id={movie.id}
                            imgUrl={movie.backdrop_path}
                            vote_avg={movie.vote_average}
                            type={type}
                        />
                        // </Link>
                    ))}
            </div>
        </div>
    )
}

export default Similar