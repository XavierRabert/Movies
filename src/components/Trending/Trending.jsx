import TrendingMovie from "./TrendingMovie"
import Slider from 'react-slick'

const Trending = ({ moviesTrending, search }) => {
    console.log(moviesTrending);


    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1775,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1175,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };



    if (!moviesTrending) return (
        <div>No Results</div>
    )

    return (
        <div className="sliderContent">
            <h2>Trending</h2>
            <Slider {...settings}>
                {moviesTrending.results.map((result) =>
                    <TrendingMovie
                        key={result.id}
                        id={result.id}
                        title={search === 'movie' ? result.title : result.name}
                        imgUrl={result.backdrop_path}
                        vote_avg={result.vote_average}
                    />
                )}
            </Slider>
        </div>
    )
}

export default Trending