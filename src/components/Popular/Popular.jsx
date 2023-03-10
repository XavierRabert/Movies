import Movie from '../Movie/Movie';

const Popular = ({ moviesPopular, search }) => {

    return (
        <div >
            <h2>Popular</h2>
            <div className='contentMovies'>
                {moviesPopular === '' ? '' :
                    moviesPopular.map(movie => (
                        <Movie
                            key={movie.id}
                            title={search === 'movie' ? movie.title : movie.name}
                            id={movie.id}
                            imgUrl={movie.backdrop_path}
                            vote_avg={movie.vote_average}
                            type={search}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Popular