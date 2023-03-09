import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import headers from '../../common/Headers'


const DetailMovie = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState('')
    const [movieImgs, setMovieImgs] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, headers)
            const data = await response.json()
            setMovie(data)
            //console.log(data)
            const responseImages = await fetch(`https://api.themoviedb.org/3/movie/${id}/images`, headers)
            const dataImages = await responseImages.json()
            setMovieImgs(dataImages.backdrops.sort((a, b) => (b.vote_average - a.vote_average)).slice(0, 6))

        }

        fetchData()
    }, [id])

    if (!movie) return ('')
    return (
        <div className="detailMovie">
            <div className='moviePosters'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.original_title}
                    className="moviePoster" />
                {movieImgs ?
                    <div className='movieImages'>
                        {movieImgs.map(img => (
                            <img src={`https://image.tmdb.org/t/p/w500/${img.file_path}`}
                                alt={movie.name}
                                key={img.file_path}
                                className="movieImg"
                            />
                        ))}

                    </div>
                    : ''}
            </div>
            <div className="descMovie">
                <div className="movieTitle">
                    <h3>{movie.original_title}</h3>
                    <h4>{movie.tagline}</h4>
                </div>
                <span className='descMovieTitle'>Release: </span><span className='descMovieValue'>{movie.release_date}</span>
                {movie.genres ?
                    <div className="genresMovie">
                        <span className='descMovieTitle'>Generes: </span>
                        {movie.genres.map(gen => (
                            <span className='descMovieValue' key={gen.name}>{gen.name}</span>
                        ))}
                    </div>
                    : ''}
                {movie.spoken_languages ?
                    <div className="genresMovie">
                        <span className='descMovieTitle'>Languages: </span>
                        {movie.spoken_languages.map(lang => (
                            <span className='descMovieValue' key={lang.english_name}>{lang.english_name}</span>
                        ))}
                    </div>
                    : ''}
                <span className='descMovieTitle'>Duration: </span><span className='descMovieValue'>{movie.runtime}</span><br />
                <span className='descMovieTitle'>Rate: </span><span className='descMovieValue'>{movie.vote_average}</span>
                <span className='descMovieTitle'>Votes: </span><span className='descMovieValue'>{movie.vote_count}</span><br />
                <span className='descMovieTitle'>Popularity: </span><span className='descMovieValue'>{movie.popularity}</span>

                {movie.belongs_to_collection ?
                    <div className="collectionMovie">
                        <div>
                            <span className='descMovieTitle'>Collection: </span>
                            <span className='descMovieValue'>{movie.belongs_to_collection.name}</span>
                        </div>
                        {movie.belongs_to_collection.poster_path ?
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.belongs_to_collection.poster_path}`}
                                alt={movie.belongs_to_collection.name} className="imgCompMovie" />
                            : ''
                        }
                    </div>
                    : ''}

                {movie.production_companies.length > 0 ?
                    <div className="companiesMovie">
                        <span className='descMovieTitle'>Companies: </span>
                        {movie.production_companies.map(comp => (
                            <div className="companiMovie" key={comp.id}>
                                {comp.logo_path ?
                                    <img src={`https://image.tmdb.org/t/p/w200/${comp.logo_path}`} alt={comp.name} className="imgCompMovie" />
                                    : ''
                                }
                                <span className='descMovieValue'>{comp.name}</span>
                            </div>
                        ))}
                    </div>
                    : ''}
                <div className="movieOverview">
                    <span className='descMovieTitle'>Overview:</span>
                    <p className='descMovieOverview'>{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailMovie