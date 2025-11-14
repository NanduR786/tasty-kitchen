import { useState } from "react";
import "./index.css";

const MenuItem = ({ itemDetails }) => {
    const [itemCount, setItemCount] = useState(0)
  const { name, cost, image } = itemDetails;

  const onIncreaseCount = () => {
    setItemCount(prev=>prev+1)
  }

  const onDecreaseCount = () => {
    if(itemCount>1){
    setItemCount(prev=>prev-1)
    }else{
        setItemCount(0)
    }
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