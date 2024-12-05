import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerMode: true,
  centerPadding: "150px", 
};

    return (
      <>
        <div className="testimonial-custom-box">
          <div className="services-content-custom flex items-center mb-8">
            <h1 className="text-3xl font-bold">Our Working Process</h1>
            <p className="mt-4 text-gray-600">
              Step-by-Step Guide to Achieving Your Business Goals
            </p>
          </div>
        </div>
        <div className="testimonial-container">
          <Slider {...settings}>
            {/* Testimonial 1 */}
            <div className="testimonial-slide">
              <div className="testimonial-box">
                <p>
                  "We have been working with Positivus for the past year and
                  have seen a significant increase in website traffic and leads
                  as a result of their efforts. The team is professional,
                  responsive, and truly cares about the success of our
                  business."
                </p>
                <div className="testimonial-arrow"></div>
              </div>
              <div className="testimonial-author">
                <h4>John Smith</h4>
                <p>Marketing Director at XYZ Corp</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-slide">
              <div className="testimonial-box">
                <p>
                  "Their expertise in digital marketing has helped us grow our
                  business tremendously. We couldn't be happier with the results
                  and highly recommend them."
                </p>
                <div className="testimonial-arrow"></div>
              </div>
              <div className="testimonial-author">
                <h4>Emily Brown</h4>
                <p>CEO at ABC Solutions</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-slide">
              <div className="testimonial-box">
                <p>
                  "Exceptional service and results! Their team is highly
                  professional, and they deliver what they promise."
                </p>
                <div className="testimonial-arrow"></div>
              </div>
              <div className="testimonial-author">
                <h4>Michael Lee</h4>
                <p>CTO at Tech Innovators</p>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next`}
      style={{ ...style }}
      onClick={onClick}
    ></div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev`}
      style={{ ...style }}
      onClick={onClick}
    ></div>
  );
};

export default Testimonial;
