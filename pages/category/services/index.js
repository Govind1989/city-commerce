import NavBar from "@/components/Common/NavBar";
import React, { useState } from "react";

import Link from "next/link";
import Stats from "@/components/VendorCommon/Stats";
import {
  MdOutlineAddHome,
  MdOutlineSkipNext,
  MdOutlineSkipPrevious,
  MdOutlineSort,
} from "react-icons/md";
import CardL from "@/components/Common/CardL";

import CardCarouselCurated from "@/components/VendorCommon/CardCarouselCurated";
import VendorCard from "@/components/Common/VendorCard";
import Reels from "@/components/Common/Reels";
import ReelsCarousel from "@/components/VendorCommon/ReelsCarousel";
const Index = () => {
  const [price, setPrice] = useState(500);
  const [isSortMenu, setIsSortMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const curatedCategories = [
    "Most Selling",
    "New Arrivals",
    "Highly Rated",
    "On Sale",
  ];

  const handleCuratedCategoryChange = (e, curatedCategory, index) => {
    e.preventDefault();
    setActiveIndex(index);
  };
  const toggleSortMenu = (e) => {
    e.preventDefault();
    setIsSortMenu(!isSortMenu);
  };

  const updatePrice = (value) => {
    setPrice(value);
  };
  return (
    <>
      <NavBar />
      <div className="bg-white py-8 px-4">
        <div className=" items-center pt-4 h-auto">
          <div className="grid grid-cols-6 gap-2">
            <div className="lg:col-span-2 col-span-6 py-0 md:order-first ">
              <div className="md:p-8  rounded-xl">
                <div className="">
                  <h1 className="text-sm font-bold text-gray-400 ">
                    #Services
                  </h1>
                  <p className="text-gray-700">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                </div>

                <div className="hidden xl:flex  md:flex-wrap overflow-x-auto md:justify-center custom-hr-scroll">
                  <div className="w-full md:w-1/2 p-2 flex-shrink items-center justify-center whitespace-nowrap">
                    <div className="w-full capitalize py-2 px-2 justify-center rounded-md text-sm font-medium whitespace-nowrap shadow-md text-gray-800  transition-transform transform hover:scale-105 text-center flex flex-col items-center">
                      <label className="group flex flex-col justify-center  items-center text-heading text-sm cursor-pointer">
                        <span className="ms-2  -mt-0.5 text-gray-600">
                          600+
                        </span>
                        <span className="ms-2  -mt-0.5 text-xs text-gray-400">
                          Product Tags
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-2 flex-shrink items-center justify-center">
                    <div className="w-full capitalize py-2 px-2 justify-center rounded-md text-sm font-medium whitespace-nowrap shadow-md text-gray-800 transition-transform transform hover:scale-105 text-center flex flex-col items-center">
                      <label className="group flex flex-col justify-center  items-center text-heading text-sm cursor-pointer">
                        <span className="ms-2 text-sm  -mt-0.5 text-gray-600">
                          400+
                        </span>
                        <span className="ms-2  -mt-0.5 text-xs text-gray-400">
                          Brands
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-2 flex-shrink items-center justify-center">
                    <div className="w-full capitalize py-2 px-2 justify-center rounded-md text-sm font-medium whitespace-nowrap shadow-md text-gray-800 transition-transform transform hover:scale-105 text-center flex flex-col items-center">
                      <label className="group flex flex-col whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        {/* <input
                            type="checkbox"
                            className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading active"
                            name="woman"
                            value="woman"
                          /> */}
                        <span className="ms-2 text-sm  -mt-0.5 text-gray-600">
                          150+
                        </span>
                        <span className="ms-2  -mt-0.5 text-xs text-gray-400">
                          Vendors
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-2 flex-shrink items-center justify-center">
                    <div className="w-full capitalize py-2 px-2 justify-center rounded-md text-sm font-medium whitespace-nowrap shadow-md text-gray-800 transition-transform transform hover:scale-105 text-center flex flex-col items-center">
                      <label className="group flex flex-col justify-center  items-center text-heading text-sm cursor-pointer">
                        <span className="ms-2 text-sm  -mt-0.5 text-gray-600">
                          50+
                        </span>
                        <span className="ms-2  -mt-0.5 text-xs text-gray-400">
                          Campaigns
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="w-full h-1 mt-2 md:mt-4 text-gray-400 block md:hidden" />
            </div>
            <div className="lg:col-span-4 col-span-6 md:order-last">
              <ReelsCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
