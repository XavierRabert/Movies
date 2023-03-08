import { useEffect, useState } from 'react';
import Header from './Trending/HeaderTrending';
import Trending from './Trending/Trending';
import headers from '../common/Headers'

const Home = () => {

    const [trending, setTrending] = useState('')
    const [trendingSearch, setTrendingSearch] = useState('movie')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/trending/${trendingSearch}/day`, headers)
            const data = await response.json()
            setTrending(data)
        }

        fetchData()
        console.log(trendingSearch);
    }, [trendingSearch])

    const trendingToSearch = (search) => {
        setTrendingSearch(search);
    }

    return (
        <div>
            <Header optionOnClick={trendingToSearch} trendingSearch={trendingSearch} />
            {trending === '' ? '' : <Trending moviesTrending={trending} trendingSearch={trendingSearch} />}
        </div>
    )
}

export default Home