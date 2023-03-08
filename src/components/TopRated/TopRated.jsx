import { useEffect, useState } from 'react';
import HeaderTopRated from './HeaderTopRated';
import Movie from '../Movie';
import headers from '../../common/Headers'
import { Link } from 'react-router-dom';

const TopRated = () => {

    const [topRated, setTopRated] = useState('')
    const [topRatedSearch, setTopRatedSearch] = useState('movie')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/${topRatedSearch}/top_rated`, headers)
            const data = await response.json()
            setTopRated(data.results)
            console.log(data);
        }

        fetchData()

    }, [topRatedSearch])

    const topRatedToSearch = (search) => {
        setTopRatedSearch(search);
    }

    return (
        <div>
            <HeaderTopRated optionOnClick={topRatedToSearch} trendingSearch={topRatedSearch} />

            {topRated === '' ? '' : topRated.map(movie => (
                <Link to={`../movie/${movie.id}`}>
                    <Movie
                        key={movie.id}
                        title={topRatedSearch === 'movie' ? movie.title : movie.name}
                        id={movie.id}
                        imgUrl={movie.backdrop_path}
                        vote_avg={movie.vote_average}
                    />
                </Link>
            ))}
        </div>
    )
}

export default TopRated