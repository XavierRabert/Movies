
import { Link } from 'react-router-dom'
import { faHome, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from '../images/TBS.png'
import { useState } from 'react';

const Options = () => {

    const [location, setLocation] = useState('')

    const handleLocation = (value) => {
        setLocation(value)
    }

    return (

        <header>
            <Link to={'/'}>
                <img src={image}
                    className={'logo'}
                    alt="The Big Screen" />
            </Link>
            <ul>
                <li className={location === 'home' ? 'menuListActive' : ''}>
                    <Link to='/' onClick={() => handleLocation('home')}><FontAwesomeIcon icon={faHome} /> Home</Link>
                </li>
                <li className={location === 'discover' ? 'menuListActive' : ''}>
                    <Link to='/discover' onClick={() => handleLocation('discover')}><FontAwesomeIcon icon={faCrosshairs} /> Discover</Link>
                </li>
                <li className={location === 'topRated' ? 'menuListActive' : ''}>
                    <Link to='/toprated' onClick={() => handleLocation('topRated')}><FontAwesomeIcon icon={faStar} /> Top rated</Link>
                </li>
            </ul>
        </header>
    )
}

export default Options