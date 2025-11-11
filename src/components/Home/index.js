import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";
import { useEffect, useState } from "react";
import Carousel from "../Carousel";

// import Spinner from react-loader-spinner

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [carouselData, setCarouselData] = useState([]);

  const jwtToken = Cookies.get("jwt_token");
  useEffect(() => {
    const getCarouselImages = async () => {
    setLoading(true);
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
      setLoading(false);
      setCarouselData(updatedData);
    } else {
      setLoading(false);
      setErrMsg(data.err_msg);
    }
  };
    getCarouselImages();
  }, [jwtToken]);


  if (jwtToken === undefined) {
    return <Navigate to="/login" replace />;
  }


  return (
    <section className="home-section">
      <Header />
        <Carousel carouselData={carouselData} />
      <h1>Home</h1>
      {isLoading && <p>It is Loading</p>}
      {errMsg && <p>{errMsg}</p>}
    </section>
  );
};

export default Home;
