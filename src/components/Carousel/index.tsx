// slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import {ReactNode} from "react";
// declare module "react-slick" {
//   export {Slider, Settings};
// }
import Slider from "react-slick";
const Carousel = ({children}: {children: ReactNode}) => {
  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    width: "100%",
    arrows: true,
    // infinite: false,
    margin: 10,
    autoplay: true,
  };
  return <Slider {...sliderSettings}>{children}</Slider>;
};

export default Carousel;
