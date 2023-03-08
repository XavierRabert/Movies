import React from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderTrending = ({ optionOnClick, trendingSearch }) => {
    return (
        <div className='header'>
            <span
                onClick={() => optionOnClick('movie')}
                className={(trendingSearch === 'movie') ? 'headerMenuButton headerMenuActive' : 'headerMenuButton'}
            >Movie</span>
            <span
                onClick={() => optionOnClick('tv')}
                className={(trendingSearch === 'tv') ? 'headerMenuButton headerMenuActive' : 'headerMenuButton'}
            >TV Show</span>

            <div className='searchContainer'>
                <FontAwesomeIcon icon={faSearch} className='iconSearch' />
                <input type="text" className='headerMenuText' />
            </div>
        </div>
    )
}

export default HeaderTrending