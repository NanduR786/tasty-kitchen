import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import Cookies from "js-cookie";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "../Loader";
import MenuItem from '../MenuItem'

const RestaurantDetails = () => {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [foodItemsList, setFoodItems] = useState([]);

  const jwtToken = Cookies.get("jwt_token");

  useEffect(() => {
    const getMenuItems = async () => {
    setLoading(true);
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response.ok === true) {
        const updatedData = {
          ...data,
          imageUrl: data.image_url,
          reviewsCount: data.reviews_count,
          opensAt: data.opens_at,
          itemsCount: data.items_count,
          costForTwo: data.cost_for_two,
        };
        const foodItemsListData = data.food_items.map((each) => ({
          name: each.name,
          cost: each.cost,
          type: each.food_type,
          image: each.image_url,
          id: each.id,
        }));
        setRestaurantInfo(updatedData);
        setFoodItems(foodItemsListData);
        setLoading(false);
      }
    } catch (err) {
      console.log("Something went wrong");
    }
  };
    getMenuItems();
  }, [jwtToken, id]);

  return (
    <section className="restaurant-details-section">
      <Header />
      {isLoading && <Loader />}
      <div className="rest-full-data">
      <div className="restaurant-info-bg-container">
        <div className="restaurant-info">
          <img src={restaurantInfo.imageUrl} alt={restaurantInfo.name} />
          <div className="details-section">
            <h1>{restaurantInfo.name}</h1>
            <p>{restaurantInfo.cuisine}</p>
            <p>{restaurantInfo.location}</p>
            <div className="review-cost-section">
              <div className="review-details">
                <p>🤍{restaurantInfo.rating}</p>
                <p>{restaurantInfo.reviewsCount}+ Ratings</p>
              </div>
              <div className="vertical-divider-line"></div>
              <div className="cost-details">
                <p>Rs {restaurantInfo.costForTwo}</p>
                <p>Cost for two</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="items-section">
        {foodItemsList.map((each)=>(
        <MenuItem itemDetails={each} key={each.id}/>
      ))}
      </div>

      <Footer />
    </section>
  );
};

export default RestaurantDetails;
