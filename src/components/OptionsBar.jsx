import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';

const OptionsBar = ({ optionOnClick, search }) => {
    const navigate = useNavigate();


    const enterSearch = (e) => {
        if (e.key === 'Enter') {
            console.log(e.target.value)
            navigate(`/search/${search}/${e.target.value}`);
        }
    }
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
                <input type="text" className='headerMenuText' onKeyDown={(e) => enterSearch(e)} />
            </div>
        </div>
    )
}

export default OptionsBar