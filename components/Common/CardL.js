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

import { FaPlusSquare } from "react-icons/fa";
import { MdOutlineAddHome } from "react-icons/md";
const CardL = ({ Discount, vendor, section }) => {
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
    <div className="break-inside mb-4">
      {/* <div className="max-w-[320px] w-full h-auto sm:py-0 flex-col sm:px-0 relative mb-2 "> */}
      <div
        className={`max-w-[320px] w-full ${
          section === "flashDeal" ? "max-h-100 " : "h-auto"
        } sm:py-0 flex-col sm:px-0 relative mb-2`}
      >
        {/* <div className="w-full md:w-1/3 xl:w-1/4 md:p-6 flex px-4 relative"> */}
        <div className="inline-block">
          <img
            className="hover:grow hover:shadow-lg"
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          />

          {/*  */}
          {Discount && (
            <div className="absolute top-6 right-4 bg-gray-800 text-white py-1 px-2 rounded-tr-md rounded-bl-md font-bold">
              20% off
            </div>
          )}
          <div className="pt-1 flex items-center justify-between">
            <Link href={`/products/product1`} className="text-sm sm:text-lg">
              Product Name
            </Link>
            <div className="flex sm:gap-2 gap-1">
              <div onClick={toggleWishState} className="cursor-pointer">
                {addToWishlist ? (
                  <IoHeartSharp className="sm:w-6 w-6 h-auto" />
                ) : (
                  <IoHeartOutline className="sm:w-6 w-6 h-auto" />
                )}
              </div>

              <div onClick={toggleBagState} className="cursor-pointer">
                {addtoCart ? (
                  <FaPlusSquare className="w-6 h-6 text-gray-400" />
                ) : (
                  <FaPlusSquare className="w-6 h-6 text-gray-400" />
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
            {/* <div className="flex gap-1 items-center">{renderStars()}</div> */}
          </div>
          {vendor && (
            <div className="flex justify-between flex-col sm:flex-row ">
              <div className="mt-1 flex gap-1 ">
                <MdOutlineAddHome className="text-gray-600" />
                <Link
                  href={`/urban-furnishings`}
                  className="text-gray-600 text-sm sm:text-md font-normal"
                >
                  Urban Furnishings
                </Link>
              </div>
              <div className="flex gap-1 items-center">{renderStars()}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardL;
