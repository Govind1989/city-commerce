import React, { useState } from "react";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoStar,
  IoStarOutline,
  IoStarHalf,
} from "react-icons/io5";

import Link from "next/link";
import { BiDish, BiSolidDish } from "react-icons/bi";
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
      <div className="w-full h-50 md:p-6 flex flex-wrap px-4 relative">
        {/* <div className="w-full md:w-1/3 xl:w-1/4 md:p-6 flex px-4 relative"> */}
        <Link href={`/products/product1`}>
          <img
            className="hover:grow hover:shadow-lg w-full h-25"
            src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          {Discount && (
            <div className="absolute top-6 right-4 bg-gray-800 text-white py-1 px-2 rounded-tr-md rounded-bl-md font-bold">
              20% off
            </div>
          )}

          <div className="pt-3 flex items-center justify-between">
            <p>Product Name</p>
            <div className="flex gap-2">
              <div onClick={toggleWishState} className="cursor-pointer">
                {addToWishlist ? (
                  <IoHeartSharp className="w-6 h-auto" />
                ) : (
                  <IoHeartOutline className="w-6 h-auto" />
                )}
              </div>

              <div onClick={toggleBagState} className="cursor-pointer">
                {addtoCart ? (
                  <BiSolidDish className="w-6 h-auto" />
                ) : (
                  <BiDish className="w-6 h-auto" />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="pt-1">
              <span className="text-2xl font-bold text-slate-600 mr-2">
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
