import SearchBar from "../SearchBar"
import Header from "../Header"
import Movie from "../Movie/Movie"
import headers from "../../common/Headers"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Discover = () => {

    const [discovery, setDiscovery] = useState('')
    const [search, setSearch] = useState('movie')
    const [genre, setGenre] = useState('ss')
    const [region, setRegion] = useState('')
    const [year, setYear] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/${search}?region=${region}&with_genres=${genre}&year=${year}`,
                headers)
            console.log(`https://api.themoviedb.org/3/discover/${search}?region=${region}&with_genres=${genre}&year=${year}`)
            const data = await response.json()
            setDiscovery(data.results)
            console.log(data);
        }

        fetchData()
        console.log('genre', genre)

    }, [search, genre, region, year])

    const toSearch = (search) => {
        setSearch(search);
    }

    return (
        <div>
            <Header optionOnClick={toSearch} search={search} />
            <SearchBar
                genre={genre}
                onChangeGenre={setGenre}
                region={region}
                onChangeRegion={setRegion}
                year={year}
                onChangeYear={setYear} />
            <h2>Popular</h2>
            {discovery === '' ? '' :

                discovery.map((movie) =>
                    <Link to={`../${search}/${movie.id}`} key={movie.id}>
                        <Movie
                            title={search === 'movie' ? movie.title : movie.name}
                            id={movie.id}
                            imgUrl={movie.backdrop_path}
                            vote_avg={movie.vote_average}
                        />
                    </Link>
                )}
        </div>
    )
}

export default Discover