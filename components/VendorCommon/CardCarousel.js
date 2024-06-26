import React from "react";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import CardM from "../Common/CardM.js";
import CardM from "../Common/CardM";

const CardCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="container mx-auto mt-4">
      <div className="px-1 ">
        <Carousel
          responsive={responsive}
          containerClass=""
          itemClass="px-[2px]"
        >
          {/* {products?.data?.map((product) => ( */}
          <CardM />
          <CardM />
          <CardM />
          <CardM />
          <CardM />
          {/* ))} */}
        </Carousel>
      </div>
    </div>
  );
};

export default CardCarousel;
