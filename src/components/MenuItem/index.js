import {  useContext } from "react";
import "./index.css";

import { CartContext } from "../../Context/CartContext";

const MenuItem = ({ itemDetails }) => {
  const { name, cost, image,id } = itemDetails;

  const { addCartItem, removeCartItem, getItemQuantity } = useContext(CartContext);
  const itemCount = getItemQuantity(id)


  const onIncreaseCount = () => {
    addCartItem(itemDetails)
  }

  const onDecreaseCount = () => {
    removeCartItem(id)
  }

  return (
    <div className="menu-item-container">
      <img src={image} alt={name} />
      <div className="menu-details">
        <h1>{name}</h1>
        <p>Rs {cost}</p>
        {/* <p>⭐ {rating}</p> */}
        <div className="add-item-container">
            <button type="button" onClick={onIncreaseCount}> + </button>
            <p>{itemCount}</p>
            <button type="button" onClick={onDecreaseCount}> - </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;