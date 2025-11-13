import { Navigate } from "react-router-dom";
import Loader from "../Loader";

import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";

import Carousel from "../Carousel";
import Header from "../Header";
import RestaurantCard from "../RestaurantCard";

import { SlArrowLeftCircle } from "react-icons/sl";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { MdOutlineSort } from "react-icons/md";

import "./index.css";

const Home = () => {
  const [gettingCarousels, setCarouselLoading] = useState(false);
  const [restaurantCount, setRestaurantCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [gettingRestaurantDetails, setRestaurantsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [carouselData, setCarouselData] = useState([]);
  const [popularRestaurantsList, setPopularRestaurantList] = useState([]);
  const [sortOption, setSortOption] = useState("Lowest");

  const jwtToken = Cookies.get("jwt_token");

  const totalPages = Math.ceil(restaurantCount / 9);

  const getPopularRestaurants = useCallback(async () => {
    const offset = (currentPage - 1) * 9;
    setRestaurantsLoading(true);
    const api = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=9&sort_by_rating=${sortOption}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(api, options);
    const result = await response.json();
    try {
      if (response.ok === true) {
        setRestaurantsLoading(false);
        setRestaurantCount(result.total);
        const data = result.restaurants;
        const updatedData = data.map((eachRestaurant) => ({
          hasonlineDelivery: eachRestaurant.has_online_delivery,
          ratingText: eachRestaurant.user_rating.rating_text,
          ratingColor: eachRestaurant.user_rating.rating_color,
          totalReviews: eachRestaurant.user_rating.total_reviews,
          rating: eachRestaurant.user_rating.rating,
          name: eachRestaurant.name,
          hasTableBooking: eachRestaurant.has_table_booking,
          isDeliveringNow: eachRestaurant.is_delivering_now,
          costForTwo: eachRestaurant.cost_for_two,
          cuisine: eachRestaurant.cuisine,
          imageUrl: eachRestaurant.image_url,
          id: eachRestaurant.id,
          menuType: eachRestaurant.menu_type,
          location: eachRestaurant.location,
          opensAt: eachRestaurant.opens_at,
        }));

        setPopularRestaurantList(updatedData);
      }
    } catch (err) {
      console.log("Something Went Wrong");
    }
  }, [jwtToken, currentPage, sortOption]);

  useEffect(() => {
    const getCarouselImages = async () => {
      setCarouselLoading(true);
      const api = "https://apis.ccbp.in/restaurants-list/offers";
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      const response = await fetch(api, options);
      const data = await response.json();
      if (response.ok === true) {
        const updatedData = data.offers.map((each) => ({
          imageUrl: each.image_url,
          id: each.id,
        }));
        setCarouselLoading(false);
        setCarouselData(updatedData);
      } else {
        setCarouselLoading(false);
        setErrMsg(data.err_msg);
      }
    };
    getCarouselImages();
  }, [jwtToken]);

  useEffect(() => {
    getPopularRestaurants();
  }, [getPopularRestaurants]);

  if (jwtToken === undefined) {
    return <Navigate to="/login" replace />;
  }

  const getPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const getNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const updateSortOption = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <section className="home-section">
      <Header />
      {gettingCarousels && <Loader />}
      {errMsg && <p>Something Went Wrong</p>}
      <Carousel carouselData={carouselData} />
      <div className="restaurant-list-section">
        <div className="restaurant-details">
          <div className="restaurant-content-container">
            <h1>Popular Restaurants</h1>
            <p>
              Select Your favourite restaurant special dish and make your day
              happy...
            </p>
          </div>
          <div className="filter-container">
            <MdOutlineSort />
            <select onChange={updateSortOption}>
              <option value="Lowest">Sort by Lowest Rating</option>
              <option value="Highest">Sort by Highest Rating</option>
            </select>
          </div>
        </div>
        <hr className="home-section-divider" />
        <div className="popular-restaurnats">
          {gettingRestaurantDetails && <Loader />}

          {popularRestaurantsList.map((each) => (
            <RestaurantCard restaurantDetails={each} />
          ))}
        </div>
        <div className="pagination-section">
          <SlArrowLeftCircle onClick={getPrevPage} />
          <p>
            {currentPage} of {totalPages}
          </p>
          <HiOutlineArrowRightCircle onClick={getNextPage} />
        </div>
      </div>
    </section>
  );
};

export default Home;
