import {useNavigate} from 'react-router-dom'
import image from '../../assets/images/erroring 1.png'

import './index.css'

const NotFound = () => {
    const navigate = useNavigate()
    return(
        <div className='wrong-route'>
            <div className='not-found-container'>
                <img src={image} alt='not-found-image'/>
                <h1>page Not Found</h1>
                <p>We are sorry, the page you requested could not be found.<br />Please go back to the homepage</p>
                <button type='button' onClick={()=> navigate("/",{replace:true})}>Home Page</button>
            </div>
        </div>
    )
}

export default NotFound