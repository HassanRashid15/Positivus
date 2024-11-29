import React from "react";
import Slider from "react-slick";

// Import your images
import amazon from "../assets/image/amazon.png";
import dribble from "../assets/image/dribble.png";
import hubspot from "../assets/image/hubspot.png";
import zoom from "../assets/image/zoom.png";
import netflix from "../assets/image/netflix.png";
import notion from "../assets/image/notion.png";

const Marquee = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: true,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slick-slider-container">
      <Slider {...settings}>
        <div>
          <img src={amazon} alt="Amazon" className="h-16 object-contain" />
        </div>
        <div>
          <img src={dribble} alt="Dribble" className="h-16 object-contain" />
        </div>
        <div>
          <img src={hubspot} alt="Hubspot" className="h-16 object-contain" />
        </div>
        <div>
          <img src={zoom} alt="Zoom" className="h-16 object-contain" />
        </div>
        <div>
          <img src={netflix} alt="Netflix" className="h-16 object-contain" />
        </div>
        <div>
          <img src={notion} alt="Notion" className="h-16 object-contain" />
        </div>
      </Slider>
    </div>
  );
};

export default Marquee;
