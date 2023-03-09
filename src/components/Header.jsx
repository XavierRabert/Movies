
import { Link } from 'react-router-dom'
import { faHome, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from '../images/TBS.png'

const Options = () => {
    return (

        <header>
            <img src={image}
                className={'logo'}
                alt="The Big Screen" />
            <ul>
                <li>
                    <Link to='/'><FontAwesomeIcon icon={faHome} /> Home</Link>
                </li>
                <li>
                    <Link to='/discover'><FontAwesomeIcon icon={faCrosshairs} /> Discover</Link>
                </li>
                <li>
                    <Link to='/toprated'><FontAwesomeIcon icon={faStar} /> Top rated</Link>
                </li>
            </ul>
        </header>
    )
}

export default Options