import NavBar from "@/components/Common/NavBar";
import React, { useState } from "react";

import Link from "next/link";

import {
  MdOutlineAddHome,
  MdOutlineSkipNext,
  MdOutlineSkipPrevious,
  MdOutlineSort,
} from "react-icons/md";
import CardL from "@/components/Common/CardL";

import CardCarouselCurated from "@/components/VendorCommon/CardCarouselCurated";
import VendorCard from "@/components/Common/VendorCard";
import ReelsCarousel from "@/components/VendorCommon/ReelsCarousel";
import CountDownTimer from "@/components/Common/CountDownTimer";
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
      <div className="bg-white py-8">
        <div className="container mx-auto  px-8  ">
          <div className="grid grid-cols-6 gap-2">
            <div className="lg:col-span-2 col-span-6 py-0 md:order-first ">
              <div className="md:p-8  rounded-xl">
                <div className="">
                  <h1 className="text-sm font-bold text-gray-400 ">
                    #Electronics
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

          {/* products */}
          <div className="flex sm:flex-row flex-col sm:pt-8  md:pb-4">
            <div className="flex-shrink-0 sm:w-56 w-full">
              <div className="rounded-md shadow-md py-4 px-4 ">
                <div className="pt-1">
                  <div className="block border-b border-gray-300  pb-2 ">
                    <h3 className="text-heading sm:block  md:text-base  font-bold text-gray-400 text-sm">
                      Category
                    </h3>

                    <div className="mt-2 flex flex-row  md:flex-col md:overflow-hidden overflow-scroll gap-2 md:gap-2  custom-scrollbar">
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading active"
                          name="woman"
                          value="woman"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Home Appliances
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="man"
                          value="man"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Office Appliances
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="watch"
                          value="watch"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Washing Machine
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="kids"
                          value="kids"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          A/C & Coolers
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="sports"
                          value="sports"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Accessories & Parts
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="sports"
                          value="sports"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Sound & Speakers
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="sports"
                          value="sports"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Kitchen Appliances
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="sports"
                          value="sports"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Television
                        </span>
                      </label>
                      <label className="group flex items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="sports"
                          value="sports"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Freezer
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-1">
                  <div className="block border-b border-gray-300  pb-2 ">
                    <h3 className="text-heading sm:block  md:text-base  font-bold text-gray-400 text-sm">
                      Vendors
                    </h3>

                    <div className="mt-2 flex flex-row  md:flex-col md:overflow-hidden overflow-scroll gap-2 md:gap-2  custom-scrollbar">
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading active"
                          name="woman"
                          value="woman"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Electronics Bazar
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="man"
                          value="man"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Akon Electonics
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="watch"
                          value="watch"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Digital Electronics
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="kids"
                          value="kids"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Home Electronics
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-1">
                  <div className="block border-b border-gray-300  pb-2 ">
                    <h3 className="text-heading sm:block  md:text-base  font-bold text-gray-400 text-sm">
                      Brands
                    </h3>

                    <div className="mt-2 flex flex-row sm:grid sm:grid-cols-2 md:flex-col md:overflow-hidden overflow-scroll gap-2 md:gap-2  custom-scrollbar">
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="adidas"
                          value="adidas"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          LG
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="Nike"
                          value="Nike"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Samsung
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="handm"
                          value="handm"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          Baltra
                        </span>
                      </label>
                      <label className="group flex whitespace-nowrap items-center text-heading text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                          name="easy"
                          value="easy"
                        />
                        <span className="ms-2 sm:ms-4 -mt-0.5 text-gray-600">
                          CG
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-1">
                  <div className="block  border-b border-gray-300 pb-2 ">
                    <h3 className="text-heading sm:block  md:text-base  font-bold text-gray-400 text-sm">
                      Price
                    </h3>

                    <div className="mt-1 flex flex-col  md:overflow-hidden overflow-scroll gap-2 md:gap-2  custom-scrollbar">
                      <input
                        type="range"
                        id="price-range"
                        className="w-full text-gray-400 "
                        min="0"
                        max="1000"
                        value={price}
                        onChange={(e) => updatePrice(e.target.value)}
                      />
                      <div className="flex justify-between text-gray-500 text-sm -mt-2">
                        <span id="minPrice">${price}</span>
                        <span id="maxPrice">$1000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-1">
                  <div className="block   pb-2 ">
                    <h3 className="text-heading sm:block  md:text-base   font-bold text-gray-400 text-sm">
                      Related Hastags (#)
                    </h3>
                    <div class="flex justify-start text-xs font-semibold text-gray-600 gap-2 flex-wrap">
                      <span class="bg-gray-100 rounded-full px-3 py-1 ">
                        #Men&apos;s Clothings
                      </span>
                      <span class="bg-gray-100 rounded-full px-3 py-1 ">
                        #Formal Men&apos;s Wear
                      </span>
                      <span class="bg-gray-100 rounded-full px-3 py-1 ">
                        #Sports Wear
                      </span>
                      <span class="bg-gray-100 rounded-full px-3 py-1 ">
                        #Kid&apos;s Shoes
                      </span>
                      <span class="bg-gray-100 rounded-full px-3 py-1 ">
                        #Bridal Dresses
                      </span>
                      <span class="bg-gray-100 rounded-full px-3 py-1 ">
                        #Ethnic Wear for Men
                      </span>
                      <span class="bg-gray-100 rounded-full px-3 py-1 ">
                        #Ethnic Wear for Women
                      </span>
                    </div>
                  </div>
                </div>

                {/* <div className="pt-1">
                  <div className="block   pb-2 ">
                    <h3 className="text-heading sm:block  md:text-base   font-bold text-gray-400 text-sm">
                      Color
                    </h3>

                    <div className="mt-1 flex flex-col  md:overflow-hidden overflow-scroll gap-2 md:gap-2  custom-scrollbar">
                      <div className="color_selector flex gap-3 items-center">
                        <div className="single_size_opt">
                          <input
                            type="radio"
                            name="color"
                            className="size_inp"
                            id="color-red"
                            hidden
                          />
                          <label
                            htmlFor="color-red"
                            className="w-6 h-6 bg-red-500 border-2 border-transparent rounded-full cursor-pointer inline-block"
                            data-bs-toggle="tooltip"
                            title="Red"
                            aria-label="Red"
                          ></label>
                        </div>
                        <div className="single_size_opt ms-2">
                          <input
                            type="radio"
                            name="color"
                            className="size_inp"
                            id="color-white"
                            hidden
                          />
                          <label
                            htmlFor="color-white"
                            className="w-6 h-6 bg-white border-2 border-transparent rounded-full cursor-pointer inline-block"
                            data-bs-toggle="tooltip"
                            title="White"
                            aria-label="White"
                          ></label>
                        </div>
                        <div className="single_size_opt ms-2">
                          <input
                            type="radio"
                            name="color"
                            className="size_inp"
                            id="color-black"
                            hidden
                          />
                          <label
                            htmlFor="color-black"
                            className="w-6 h-6 bg-black border-2 border-transparent rounded-full cursor-pointer inline-block"
                            data-bs-toggle="tooltip"
                            title="Black"
                            aria-label="Black"
                          ></label>
                        </div>
                        <div className="single_size_opt ms-2">
                          <input
                            type="radio"
                            name="color"
                            className="size_inp"
                            id="color-purple"
                            hidden
                          />
                          <label
                            htmlFor="color-purple"
                            className="w-6 h-6 bg-purple-500 border-2 border-transparent rounded-full cursor-pointer inline-block"
                            data-bs-toggle="tooltip"
                            title="Purple"
                            aria-label="Purple"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="w-full  px-0 sm:px-4 sm:py-0">
              <div className="flex py-4 justify-between">
                <form className="sm:px-6 flex w-full items-center">
                  <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="email-adress-icon"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 px-2 py-1"
                      placeholder='"Television 24 Inch", "Washing Machines", "Sound System" . . .'
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center py-1 px-3 ml-2 text-sm font-medium text-white bg-gray-400 border border-gray-400 hover:bg-gray-800 "
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span className="hidden sm:block">Search</span>
                  </button>
                </form>

                <div className=" ">
                  <button
                    className="p-2 sm:block"
                    onClick={(e) => {
                      toggleSortMenu(e);
                    }}
                  >
                    <MdOutlineSort className="w=4 sm:w-5 h-auto" />
                  </button>
                  {isSortMenu && (
                    <div
                      onClick={() => setIsSortMenu(false)}
                      className="absolute right-0 z-20 w-38 py-0 mt-0 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition transform ease-out duration-100 scale-90"
                    >
                      <Link
                        href="#"
                        className="block px-2 py-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Price: Low-High
                      </Link>

                      <hr className="border-gray-200 dark:border-gray-700" />

                      <Link
                        href="#"
                        className="block px-2 py-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Price: High-Low
                      </Link>

                      <hr className="border-gray-200 dark:border-gray-700" />

                      <Link
                        href="#"
                        className="block px-2 py-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Ratings: High-Low
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full py-0 relative pb-0 sm:mb-4">
                <div className="columns-2 md:columns-2 xl:columns-3 gap-2">
                  <div className="mb-1 sm:mb-0 ">
                    <CardL Discount={false} vendor={true} section="products" />
                  </div>
                  <div className="mb-1 ">
                    <CardL Discount={false} vendor={true} section="products" />
                  </div>
                  <div className="mb-1 ">
                    <CardL Discount={false} vendor={true} section="products" />
                  </div>
                  <div className="mb-1 ">
                    <CardL Discount={false} vendor={true} section="products" />
                  </div>
                  <div className="mb-1 ">
                    <CardL Discount={false} vendor={true} section="products" />
                  </div>
                  <div className="mb-1 ">
                    <CardL Discount={false} vendor={true} section="products" />
                  </div>
                  <div className="mb-1 ">
                    <CardL Discount={false} vendor={true} section="products" />
                  </div>
                  <div className="mb-1 break-inside">
                    <CardL Discount={false} vendor={true} section="products" />
                  </div>
                  <div className="mb-1 ">
                    <CardL Discount={false} vendor={true} section="products" />
                  </div>
                </div>

                <div className="flex items-center justify-center py-2 mx-auto">
                  <div className="flex select-none space-x-1 text-gray-700">
                    <Link
                      href="#"
                      className="rounded-md bg-gray-200 px-3 sm:px-4 py-2 transition duration-300 hover:bg-gray-400"
                    >
                      <MdOutlineSkipPrevious className="mt-1" />
                    </Link>
                    <Link
                      href="#"
                      className="rounded-md bg-gray-200 px-3 sm:px-4 py-2 transition duration-300 hover:bg-gray-400"
                    >
                      <span className="text-xs">1</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-md bg-gray-200 px-3 sm:px-4 py-2 transition duration-300 hover:bg-gray-400"
                    >
                      <span className="text-xs">2</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-md bg-gray-200 px-3 sm:px-4 py-2 transition duration-300 hover:bg-gray-400"
                    >
                      <span className="text-xs">3</span>
                    </Link>
                    <span className="rounded-md px-3 sm:px-4 py-2">
                      {" "}
                      . . .{" "}
                    </span>
                    <Link
                      href="#"
                      className="rounded-md bg-gray-200 px-3 sm:px-4 py-2 transition duration-300 hover:bg-gray-400"
                    >
                      <span className="text-xs">10</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-md bg-gray-200 px-3 sm:px-4 py-2 transition duration-300 hover:bg-gray-400"
                    >
                      <MdOutlineSkipNext className="mt-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FlashDeal */}
          <div className="container mx-auto flex items-center flex-wrap sm:pt-4 ">
            <div id="store" className="w-full  top-0  sm:py-1">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 sm:px-2 py-3">
                <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                  Deals of the Month
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <CountDownTimer Duration="Monthly" />
                </div>
              </div>
              <ul
                className="px-2 flex  gap-2 sm:gap-8 justify-start overflow-x-scroll custom-scrollbar pb-2"
                id="myproTab"
              >
                <li className="inline-block align-top text-[14px] text-gray-800 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] ">
                  <Link
                    className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                    href="#all"
                  >
                    All
                  </Link>
                </li>
                <li className="inline-block align-top text-[14px] text-gray-400 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] ">
                  <Link
                    className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                    href="#snack"
                  >
                    Home Furnitures
                  </Link>
                </li>
                <li className="inline-block align-top text-[14px] text-gray-400 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] ">
                  <Link
                    className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                    href="#snack"
                  >
                    Office Furnitures
                  </Link>
                </li>
                <li className="inline-block align-top text-[14px] text-gray-400 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] ">
                  <Link
                    className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                    href="#snack"
                  >
                    Bathroom Furnitures
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-screen sm:mt-4 flex gap-2 relative mb-4 sm:mb-4  overflow-x-scroll custom-hr-scroll">
              <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4 ">
                <CardL Discount={true} section="flashDeal" />
              </div>
              <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
                <CardL Discount={true} section="flashDeal" />
              </div>
              <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
                <CardL Discount={true} section="flashDeal" />
              </div>
              <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
                <CardL Discount={true} section="flashDeal" />
              </div>
              <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
                <CardL Discount={true} section="flashDeal" />
              </div>
              <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
                <CardL Discount={true} section="flashDeal" />
              </div>
              <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
                <CardL Discount={true} section="flashDeal" />
              </div>
            </div>
          </div>
          {/* banners */}
          <div className="lg:flex flex-wrap pt-4 ">
            <div className="w-full lg:w-3/12 lg:px-2 mb-4 ">
              <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between px-8 py-6 bg-gray-200">
                <div>
                  <h3 className="text-lg leading-4 mb-2 text-[#FD3D57]">
                    50% off
                  </h3>
                  <h4 className="text-[22px] leading-[26px] text-secondary mb-2">
                    Huge Offer
                  </h4>
                  <div className="flex gap-1">
                    <MdOutlineAddHome className="text-gray-600" />
                    <p className="text-[15px] leading-4 text-xs text-[#464545] mb-5">
                      Urban Furnishings
                    </p>
                  </div>
                  <Link href="#" className="primary-btn min-w-[80px]">
                    Shop Now
                  </Link>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://themes.rslahmed.dev/rafcart-tailwind/assets/images/sofa-2.png"
                    className="w-[100px] h-[150px] lg:h-[180px] object-contain flex-shrink-0 hover:scale-105 transition-all duration-300"
                    alt="product"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-6/12 lg:px-2 mb-4">
              <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between px-8 py-6 bg-gray-200">
                <div>
                  <h3 className="text-lg leading-4 mb-2 text-[#FD3D57]">
                    {/* 50% off */}
                  </h3>
                  <h4 className="text-[22px] leading-[26px] text-secondary mb-2">
                    Free Shipping
                  </h4>
                  <div className="flex gap-1">
                    <MdOutlineAddHome className="text-gray-600" />
                    <p className="text-[15px] leading-4 text-xs text-[#464545] mb-5">
                      Urban Furnishings
                    </p>
                  </div>
                  <Link href="#" className="primary-btn min-w-[80px]">
                    Shop Now
                  </Link>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://themes.rslahmed.dev/rafcart-tailwind/assets/images/sofa-2.png"
                    className="w-[200px] h-[150px] lg:h-[180px] object-contain flex-shrink-0 hover:scale-105 transition-all duration-300"
                    alt="product"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/12 lg:px-2 ">
              <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-0 lg:items-center justify-between px-8 py-6 bg-gray-200">
                <div>
                  <h3 className="text-lg leading-4 mb-2 text-[#FD3D57]">
                    30% off
                  </h3>
                  <h4 className="text-[22px] leading-[26px] text-secondary mb-2">
                    Flash Sale
                  </h4>
                  <div className="flex gap-1">
                    <MdOutlineAddHome className="text-gray-600" />
                    <p className="text-[15px] leading-4 text-xs text-[#464545] mb-5">
                      Urban Furnishings
                    </p>
                  </div>
                  <Link href="#" className="primary-btn min-w-[80px]">
                    Shop Now
                  </Link>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://themes.rslahmed.dev/rafcart-tailwind/assets/images/sofa-2.png"
                    className="w-[100px] h-[150px] lg:h-[180px] object-contain flex-shrink-0 hover:scale-105 transition-all duration-300"
                    alt="product"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Curated */}
          <div className=" items-center pt-4 h-auto">
            <div id="store" className="w-full top-0 sm:px-4 sm:py-1">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <div
                  className="uppercase  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                  href="#"
                >
                  Curated For You
                </div>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-4">
              <div className="md:col-span-2 col-span-6 py-0 md:order-first ">
                <div className="md:p-8 md:bg-gray-100 rounded-xl">
                  <div className="hidden md:block mb-4">
                    <h1 className="text-sm font-bold text-gray-400 text-center lg:text-start ">
                      #Explore
                    </h1>
                    <p className="text-gray-700 lg:block hidden">
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate velit imperdiet dolor
                      tempor tristique.
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col md:overflow-hidden overflow-scroll gap-4 mx-5 custom-scrollbar">
                    {curatedCategories.map((category, index) => (
                      <button
                        key={index}
                        onClick={(e) => handleCuratedCategoryChange(e, index)}
                        className={`capitalize py-3 px-4 rounded-md text-sm  font-medium whitespace-nowrap shadow-md transition-transform transform hover:scale-105 ${
                          activeIndex === index
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-800"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                <hr className="w-full h-1 mt-4 text-gray-400 block md:hidden" />
              </div>
              <div className="md:col-span-4 col-span-6 md:order-last">
                <CardCarouselCurated category="furnitures" />
              </div>
            </div>
          </div>
          {/* sale banners */}
          <div className="-mx-2 flex flex-wrap mt-8 ">
            <div className="w-full px-2 sm:px-4 lg:w-8/12">
              <div className="w-full md:flex gap-4">
                <div className="w-full md:w-1/2 flex-1 relative mb-4 md:mr-2 sm:mb-8 h-[370px] md:h-[462px]">
                  <img
                    src="https://themes.rslahmed.dev/rafcart-tailwind/assets/images/banner-1.jpg"
                    alt="Furniture-one"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12">
                    <div className="max-w-[420px] w-[200px] sm:w-full">
                      <span className="mb-3 block text-base font-medium text-body-color">
                        #Clearance Sale
                      </span>
                      <h3>
                        <Link
                          href="javascript:void(0)"
                          className="mb-5 block text-2xl font-bold text-dark hover:text-primary sm:text-4xl"
                        >
                          Elegant sofa&apos;s collection
                        </Link>
                      </h3>
                      <p className="mb-9 text-base text-body-color">
                        Home is where comfort is. Explore our exquisite
                        collections
                      </p>
                      <button
                        type="button"
                        className="py-1 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex-1 relative mb-4 md:ml-2 sm:mb-8 h-[370px] md:h-[462px]">
                  <img
                    src="https://themes.rslahmed.dev/rafcart-tailwind/assets/images/banner-1.jpg"
                    alt="Furniture-one"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12">
                    <div className="max-w-[420px] w-[200px] sm:w-full">
                      <span className="mb-3 block text-base font-medium text-body-color">
                        #Grand Sale
                      </span>
                      <h3>
                        <Link
                          href="javascript:void(0)"
                          className="mb-5 block text-2xl font-bold text-dark hover:text-primary sm:text-4xl"
                        >
                          Elegant sofa&apos;s collection
                        </Link>
                      </h3>
                      <p className="mb-9 text-base text-body-color">
                        Home is where comfort is. Explore our exquisite
                        collections
                      </p>
                      <button
                        type="button"
                        className="py-1 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="-mx-6 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2 lg:w-full">
                  <div className="relative mb-4 h-[223px]">
                    <img
                      src="https://themes.rslahmed.dev/rafcart-tailwind/assets/images/category-3.jpg"
                      alt="Furniture Two"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                      <div className="max-w-[180px] text-right">
                        <span className="mb-3 block text-base font-medium text-body-color">
                          #Grand Sale
                        </span>
                        <h3>
                          <Link
                            href="javascript:void(0)"
                            className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl"
                          >
                            We design your space
                          </Link>
                        </h3>
                        <button
                          type="button"
                          className="py-1 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-full">
                  <div className="relative mb-8 h-[223px]">
                    <img
                      src="https://themes.rslahmed.dev/rafcart-tailwind/assets/images/category-1.jpg"
                      alt="Furniture Three"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                      <div className="max-w-[180px] text-right">
                        <span className="mb-3 block text-base font-medium text-body-color">
                          #Grand Sale
                        </span>
                        <h3>
                          <Link
                            href="javascript:void(0)"
                            className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl"
                          >
                            Home is what we must br proud of
                          </Link>
                        </h3>
                        <button
                          type="button"
                          className="py-1 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* vendors*/}
          <div className="container mx-auto flex items-center flex-wrap sm:pt-4 ">
            <div id="store" className="w-full  top-0  sm:py-1">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 sm:px-2 py-3">
                <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                  Our Vendors
                </div>
                <div className=" ">
                  <button
                    className="p-2 sm:block"
                    onClick={(e) => {
                      toggleSortMenu(e);
                    }}
                  >
                    <MdOutlineSort className="w=4 sm:w-5 h-auto" />
                  </button>
                  {isSortMenu && (
                    <div
                      onClick={() => setIsSortMenu(false)}
                      className="absolute right-0 z-20 w-38 py-0 mt-0 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition transform ease-out duration-100 scale-90"
                    >
                      <Link
                        href="#"
                        className="block px-2 py-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Ratings: High-Low
                      </Link>

                      <hr className="border-gray-200 dark:border-gray-700" />

                      <Link
                        href="#"
                        className="block px-2 py-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Discounts: High-Low
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <ul
                className="px-2 flex  gap-6 sm:gap-8 whitespace-nowrap justify-start overflow-x-scroll custom-scrollbar pb-2"
                id="myproTab"
              >
                <li className="inline-block align-top text-[14px] text-gray-800 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] ">
                  <Link
                    className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                    href="#all"
                  >
                    All Vendors
                  </Link>
                </li>

                <li className="inline-block align-top text-[14px] text-gray-400 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px]">
                  <Link
                    className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                    href="#veg"
                  >
                    Your Vendors
                  </Link>
                </li>

                <li className="inline-block align-top text-[14px] text-gray-400 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] ">
                  <Link
                    className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                    href="#snack"
                  >
                    With Campaigns
                  </Link>
                </li>
                <li className="inline-block align-top text-[14px] text-gray-400 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px]  active">
                  <Link
                    className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                    href="#fruit"
                  >
                    With Free Shippings
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-screen sm:py-4 flex gap-2 relative mb-4 sm:mb-4 overflow-x-scroll custom-hr-scroll">
              <div className="flex-shrink-0 w-full md:w-1/2 xl:w-1/4">
                <VendorCard />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/2 xl:w-1/4">
                <VendorCard />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/2 xl:w-1/4">
                <VendorCard />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/2 xl:w-1/4">
                <VendorCard />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/2 xl:w-1/4">
                <VendorCard />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/2 xl:w-1/4">
                <VendorCard />
              </div>
              <div className="flex-shrink-0 w-full md:w-1/2 xl:w-1/4">
                <VendorCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
