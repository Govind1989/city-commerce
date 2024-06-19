import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardL from "../Common/CardL.js";

const CardCarouselCurated = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
          <CardL />
          <CardL />
          <CardL />
          <CardL />
          <CardL />
          {/* ))} */}
        </Carousel>
      </div>
    </div>
  );
};

export default CardCarouselCurated;
