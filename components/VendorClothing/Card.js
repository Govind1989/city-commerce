import React, { useState } from "react";
import {
  IoBagOutline,
  IoBag,
  IoHeartOutline,
  IoHeartSharp,
  IoStar,
  IoStarOutline,
  IoStarHalf,
} from "react-icons/io5";
import Link from "next/link";
const Card = ({ Discount }) => {
  const [addtoCart, setIAddToCart] = useState(false);
  const [addToWishlist, setAddToWishlist] = useState(false);
  const [rating, setRating] = useState(4);
  const toggleBagState = (e) => {
    e.preventDefault();
    setIAddToCart(!addtoCart);
  };
  const toggleWishState = (e) => {
    e.preventDefault();
    setAddToWishlist(!addToWishlist);
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<IoStar key={i} className="text-gray-400 w-4 h-4" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<IoStarHalf key={i} className="text-gray-400 w-4 h-4" />);
      } else {
        stars.push(<IoStarOutline key={i} className="text-gray-400 w-4 h-4" />);
      }
    }
    return stars;
  };
  return (
    <>
      <div className="w-full  flex flex-wrap sm:px-4 relative mb-4 sm:mb-4">
        {/* <div className="w-full md:w-1/3 xl:w-1/4 md:p-6 flex px-4 relative"> */}
        <Link href={`/products/product1`}>
          <img
            className="hover:grow hover:shadow-lg"
            src="https://images.unsplash.com/photo-1562135291-7728cc647783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
          />
          {Discount && (
            <div className="absolute top-0 right-0 bg-gray-600 text-xs text-white py-1 px-2 rounded-tr-md rounded-bl-md font-bold">
              20%
            </div>
          )}

          <div className="pt-3 flex items-center justify-between mr-3 sm:mr-3 ">
            <p className="text-sm sm:text-lg">Product Name</p>
            <div className="flex sm:gap-2 gap-1">
              <div onClick={toggleWishState} className="cursor-pointer">
                {addToWishlist ? (
                  <IoHeartSharp className="sm:w-6 w-4 h-auto" />
                ) : (
                  <IoHeartOutline className="sm:w-6 w-4 h-auto" />
                )}
              </div>

              <div onClick={toggleBagState} className="cursor-pointer">
                {addtoCart ? (
                  <IoBag className="sm:w-6 w-4 h-auto" />
                ) : (
                  <IoBagOutline className="sm:w-6 w-4 h-auto" />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col sm:flex-row">
            <p className="pt-1">
              <span className="sm:text-2xl text-md font-bold text-slate-600 mr-2">
                Rs. 799
              </span>
              <span className="text-xs text-slate-400 line-through">
                Rs. 1150
              </span>
            </p>
            <div className="flex gap-1 items-center">{renderStars()}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
