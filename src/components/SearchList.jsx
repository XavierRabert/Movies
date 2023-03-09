import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import headers from "../common/Headers"
import OptionsBar from "./OptionsBar"
import Movie from "./Movie/Movie"


const SearchList = () => {
    let { type, item } = useParams()
    const [movies, setMovies] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/${type}?query=${item}`, headers)
            const data = await response.json()
            setMovies(data.results)
        }
        fetchData()
    }, [type, item])


    const typeToSearch = (search) => {
        navigate(`/search/${search}/${item}`);
    }

    return (
        <div>
            <OptionsBar optionOnClick={typeToSearch} search={type} />
            <h2>Search</h2>
            <div>
                {movies === '' ? '' :
                    movies.map(movie => (
                        <Link to={`../${type}/${movie.id}`} key={movie.id}>
                            <Movie
                                title={type === 'movie' ? movie.title : movie.name}
                                id={movie.id}
                                imgUrl={movie.backdrop_path || movie.poster_path}
                                vote_avg={movie.vote_average}
                            />
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default SearchList