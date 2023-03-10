import image from '../images/TMDB.svg'

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer>
            <div className='footerReferences'>
                <a href="https://www.themoviedb.org/"><img src={image} alt="The Movie DB" /></a>
            </div>
            <div className='footerSocial'>
                <a href="https://linkedin.com/in/xavier-rabert-916b8114a" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/XavierRabert" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:xrabert@gmail.com" >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>

        </footer>
    )
}

export default Footer