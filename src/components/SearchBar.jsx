import { useEffect, useState } from "react"
import headers from "../common/Headers"

const SearchBar = ({ genre, onChangeGenre, region, onChangeRegion, year, onChangeYear }) => {

    // const [genre, setGenre] = useState('')
    const [genreList, setGenreList] = useState('')
    // const [region, setRegion] = useState('')
    const [regionList, setRegionList] = useState('')
    // const [year, setYear] = useState('')
    const [yearList, setYearList] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            const responseGenre = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, headers)
            const dataGenre = await responseGenre.json()
            setGenreList(dataGenre)

            const responseRegion = await fetch(`https://api.themoviedb.org/3/watch/providers/regions`, headers)
            const dataRegion = await responseRegion.json()
            setRegionList(dataRegion)

            const today = new Date()
            var years = [], i = 1950, len = today.getFullYear();
            while (++i <= len) years.push(i);
            setYearList(years)
        }

        fetchData()
    }, [])



    return (
        <nav>
            <ul className="searchListItems">
                <li>
                    <select value={genre} onChange={(e) => onChangeGenre(e.target.value)} className='headerMenuSelect'>
                        <option value='' >Genre</option>
                        {genreList ?
                            genreList.genres.map(gen => (
                                <option value={gen.id} key={gen.id}>{gen.name}{gen.id}</option>
                            ))
                            : ''}


                    </select>
                </li>
                <li>
                    <select value={region} onChange={(e) => onChangeRegion(e.target.value)} className='headerMenuSelect'>
                        <option value='' >Region</option>
                        {regionList ?
                            regionList.results.map(reg => (
                                <option value={reg.iso_3166_1} key={reg.iso_3166_1}>{reg.english_name}</option>
                            ))
                            : ''}
                    </select>
                </li>
                <li>
                    <select value={year} onChange={(e) => onChangeYear(e.target.value)} className='headerMenuSelect'>
                        <option value='' >Year</option>
                        {yearList ?
                            yearList.map(year => (
                                <option value={year} key={year}>{year}</option>
                            ))
                            : ''}

                    </select>
                </li>
            </ul>
        </nav>
    )
}

export default SearchBar