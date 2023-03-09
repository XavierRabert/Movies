import { useEffect, useState } from 'react';
import Header from './Header';
import Trending from './Trending/Trending';
import Popular from './Popular/Popular';
import headers from '../common/Headers'

const Home = () => {

    const [trending, setTrending] = useState('')
    const [popular, setPopular] = useState('')
    const [search, setSearch] = useState('movie')

    useEffect(() => {
        const fetchData = async () => {
            const responseTrending = await fetch(`https://api.themoviedb.org/3/trending/${search}/day`, headers)
            const dataTrending = await responseTrending.json()
            setTrending(dataTrending)


            const responsePopular = await fetch(`https://api.themoviedb.org/3/${search}/popular`, headers)
            const dataPopular = await responsePopular.json()
            setPopular(dataPopular.results)
        }

        fetchData()
    }, [search])

    const ToSearch = (search) => {
        setSearch(search);
    }

    return (
        <div>
            <Header optionOnClick={ToSearch} search={search} />
            {trending === '' ? '' : <Trending moviesTrending={trending} search={search} />}
            {popular === '' ? '' : <Popular moviesPopular={popular} search={search} />}

        </div>
    )
}

export default Home