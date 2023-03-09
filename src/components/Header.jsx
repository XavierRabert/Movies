import React from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ optionOnClick, search }) => {
    return (
        <div className='header'>
            <span
                onClick={() => optionOnClick('movie')}
                className={(search === 'movie') ? 'headerMenuButton headerMenuActive' : 'headerMenuButton'}
            >Movie</span>
            <span
                onClick={() => optionOnClick('tv')}
                className={(search === 'tv') ? 'headerMenuButton headerMenuActive' : 'headerMenuButton'}
            >TV Show</span>

            <div className='searchContainer'>
                <FontAwesomeIcon icon={faSearch} className='iconSearch' />
                <input type="text" className='headerMenuText' />
            </div>
        </div>
    )
}

export default Header