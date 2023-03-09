// import { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
// import headers from '../../common/Headers'
// import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';

const Popular = ({ moviesPopular, search }) => {

    // const [popular, setPopular] = useState('')
    // const [popularSearch, setPopularSearch] = useState('movie')

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`https://api.themoviedb.org/3/${popularSearch}/popular`, headers)
    //         const data = await response.json()
    //         setPopular(data.results)
    //         console.log(data);
    //     }

    //     fetchData()

    // }, [popularSearch])

    // const popularToSearch = (search) => {
    //     setPopularSearch(search);
    // }

    return (
        <div>
            <h2>Popular</h2>

            {moviesPopular === '' ? '' :
                moviesPopular.map(movie => (
                    <Link to={`../${search}/${movie.id}`} key={movie.id}>
                        <Movie
                            title={search === 'movie' ? movie.title : movie.name}
                            id={movie.id}
                            imgUrl={movie.backdrop_path}
                            vote_avg={movie.vote_average}
                        />
                    </Link>
                ))}
        </div>
    )
}

export default Popular