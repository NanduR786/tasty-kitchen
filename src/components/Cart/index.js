import { useContext } from "react";

import Header from "../Header"
import Footer from '../Footer'
import MenuItem from "../MenuItem";
import { CartContext } from "../../Context/CartContext";

import emptyViewImage from '../../assets/images/cooking 1.png'

import './index.css'
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    const renderCartEmptyView = () => {
      return(
        <div className="empty-cart-container">
          <img src={emptyViewImage} alt="cart-empty-view" className="empty-cart--img"/>
          <h1>No Orders Yet!</h1>
          <p>Your cart is empty. Add something from the menu.</p>
          <Link to="/"><button type="button" className="order-now-btn">Order Now</button></Link>
        </div>
      )
    }
    return(
        <>
        <Header />
        {cartItems.length === 0 ? (
       renderCartEmptyView()
      ) : (
        cartItems.map((each) => (
          <MenuItem itemDetails={each} key={each.id} />
        ))
      )}
        <Footer />
        </>
    )
}

export default Cart