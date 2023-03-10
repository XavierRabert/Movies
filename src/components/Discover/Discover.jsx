import SearchBar from "../SearchBar"
import OptionsBar from "../OptionsBar"
import Movie from "../Movie/Movie"
import headers from "../../common/Headers"
import { useEffect, useState } from "react"

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
            const data = await response.json()
            setDiscovery(data.results)
        }

        fetchData()

    }, [search, genre, region, year])

    const toSearch = (search) => {
        setSearch(search);
    }

    return (
        <div>
            <OptionsBar optionOnClick={toSearch} search={search} />
            <SearchBar
                genre={genre}
                onChangeGenre={setGenre}
                region={region}
                onChangeRegion={setRegion}
                year={year}
                onChangeYear={setYear} />
            <h2>Popular</h2>
            <div className='contentMovies'>
                {discovery === '' ? '' :

                    discovery.map((movie) =>

                        <Movie
                            key={movie.id}
                            title={search === 'movie' ? movie.title : movie.name}
                            id={movie.id}
                            imgUrl={movie.backdrop_path}
                            vote_avg={movie.vote_average}
                            type={search}
                        />
                    )}
            </div>
        </div>
    )
}

export default Discover