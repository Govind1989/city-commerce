import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardL from "../Common/CardL.js";
import CardService from "../Common/CardService.js";
import CardM from "../Common/CardM.js";

const CardCarouselCurated = ({ category }) => {
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
  // Determine which card component to use based on the category prop
  const renderCard = () => {
    if (category === "services") {
      return <CardService />;
    } else {
      return <CardL />; // Default case, you can handle other categories here
    }
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
          {renderCard()}
          {renderCard()}
          {renderCard()}
          {renderCard()}
          {renderCard()}
          {/* ))} */}
        </Carousel>
      </div>
    </div>
  );
};

export default CardCarouselCurated;
