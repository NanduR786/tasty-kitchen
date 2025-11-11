// import {Link, useNavigate} from 'react-router-dom'
// import image from "../../assets/images/image (28).png";
// import Cookies from 'js-cookie';

// import Home from '../Home';
// import Cart from '../Cart'

// import "./index.css";


// const Header = () => {
//     const navigate = useNavigate()
//     const onLogout = () => {
//         Cookies.remove('jwt_token')
//         navigate('/login', {replace:true})
//     }
//     return(
//         <div className="nav-container">
//             <diV className="brand-container">
//                 <img src={image} alt="brand-logo"/>
//                 <h1>Vivaha Bojanambu</h1>
//             </diV>
//             <div className="nav-items-container">
//                 <Link to="/" component={Home}>Home</Link>
//                 <Link to="/cart" component={Cart}>Cart</Link>
//                 <button type='button' onClick={onLogout}>Logout</button>
//             </div>
//         </div>
//     )
// }

// export default Header