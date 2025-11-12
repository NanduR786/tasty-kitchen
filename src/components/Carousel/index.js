import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const Carousel = (props) => {
  const { carouselData } = props;
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <Slider {...settings}>
          {carouselData.map((eachImage) => (
            <img src={eachImage.imageUrl} alt={eachImage.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
