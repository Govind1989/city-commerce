import React, { useState } from "react";
import Link from "next/link";
import { MdCalendarMonth, MdOutlineAddHome } from "react-icons/md";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";
const CardService = ({ Discount }) => {
  const [addtoCart, setIAddToCart] = useState(false);
  const [addToWishlist, setAddToWishlist] = useState(false);

  const toggleBagState = (e) => {
    e.preventDefault();
    setIAddToCart(!addtoCart);
  };
  const toggleWishState = (e) => {
    e.preventDefault();
    setAddToWishlist(!addToWishlist);
  };
  return (
    <>
      <div className="max-h-[300px] h-auto sm:py-1 flex flex-wrap relative mb-2">
        <div className="relative group rounded-lg">
          <img
            className="object-cover max-h-[300px] w-full rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1682484702193-cc4716620801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlJTIwcHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww"
            alt="Service"
          />
          <div className="flex flex-col justify-end absolute inset-0 bg-black bg-opacity-50 opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
            <div className="py-2 flex justify-between">
              <Link
                href={`/products/product1`}
                className="leading-4 text-sm text-white sm:text-lg"
              >
                Service Name
              </Link>
              <div className="sm:gap-2 gap-1 text-white">
                <div onClick={toggleBagState} className="cursor-pointer">
                  <MdCalendarMonth className="w-6 h-6 text-gray-200" />
                </div>
              </div>
            </div>
            <Link href={`/elegant-apparel`} className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <MdOutlineAddHome className="text-white" />
                <p className="leading-4 text-sm text-white">Elegant Apparel</p>
              </div>
              <div className="absolute bottom-3 right-4 flex rounded-lg bg-gray-200 px-2 py-1 shadow-md">
                <div className="inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-800 ml-1 text-sm font-bold">
                    4.9
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="absolute top-3 left-4 flex rounded-lg bg-gray-200 px-2 py-1 shadow-md font-bold">
            <button className="inline-flex items-center">
              <span className="ml-1 text-sm text-black">Electrical</span>
            </button>
          </div>
          {Discount && (
            <div className="text-sm absolute top-3 right-0 flex bg-gray-800 text-white py-1 px-2 rounded-tr-md rounded-bl-md font-bold">
              20% off
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardService;
