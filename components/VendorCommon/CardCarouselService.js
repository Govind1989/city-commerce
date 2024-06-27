import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardService from "../Common/CardService.js";

const CardCarouselService = () => {
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
          <CardService Discount={true} />
          <CardService Discount={true} />
          <CardService Discount={true} />
          <CardService Discount={true} />
          <CardService Discount={true} />
          {/* ))} */}
        </Carousel>
      </div>
    </div>
  );
};

export default CardCarouselService;
