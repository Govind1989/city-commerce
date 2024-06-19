import React from "react";
import { BiFoodTag } from "react-icons/bi";
import { FaPlusSquare } from "react-icons/fa";
import { CiGlass } from "react-icons/ci";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import QuantityInput from "../VendorCommon/QuantityInput";
const MenuCard = ({ product }) => {
  return (
    <div className="grid grid-cols-12 gap-2 ">
      <div className="md:col-span-5 col-span-12 md:order-first">
        <img
          className="hover:grow hover:shadow-lg w-full p-2 h-40 "
          //   src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className="md:col-span-7 col-span-12 ">
        <div className="flex flex-col md:flex-row gap-6 py-2 bg-white rounded-lg  ">
          <div className="w-full flex justify-between flex-wrap gap-2">
            <div className="flex gap-2">
              <h1 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h1>
              <div className="flex items-center">
                <div className="items-center justify-center">
                  <BiFoodTag
                    className={`w-6 h-6 ${
                      product.tag === "veg" ? "text-green-900" : "text-red-900"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="md:w-auto flex flex-row items-center gap-2">
              <p className="text-lg font-bold text-gray-800">
                Rs.{product.price}
              </p>
              <FaPlusSquare className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="w-full mb-4">
          <p className="text-gray-400">{product.description}</p>
        </div>
        <div className="w-full mb-4 ">
          <div className="flex justify-between gap-2 items-center">
            <div className="w-full flex flex-row gap-1">
              <div className="m-0">
                <button className=" shadow-md rounded-sm font-semibold tracking-wide text-sm px-2 py-1 focus:outline-none focus:shadow-outline bg-gray-200 text-gray-800 hover:bg-[white] hover:opacity-50 hover:text-black">
                  <CiGlass className="w-7 h-auto text-gray-800" />
                </button>
              </div>
              <div className="m-0">
                <button className=" shadow-md rounded-sm font-semibold tracking-wide text-sm px-2 py-1 focus:outline-none focus:shadow-outline bg-gray-200 text-gray-800 hover:bg-[white] hover:opacity-50 hover:text-black">
                  <MdOutlineEmojiFoodBeverage className="w-7 h-auto text-gray-800" />
                </button>
              </div>
            </div>
            <div>
              <QuantityInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
