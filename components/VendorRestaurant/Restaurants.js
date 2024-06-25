import React, { useState, useEffect } from "react";
import {
  foodCategory,
  shopDiscounts,
  shopCampaigns,
  CampaignCardsContent,
  FeaturedProductMenu,
  responsive,
  foodOrderTypes,
  foodMenuItems,
} from "@/data.js";
import { BiDish } from "react-icons/bi";
import { IoStar, IoStarOutline, IoStarHalf } from "react-icons/io5";

import { FaPhone, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CampaignCard from "../VendorCommon/CampaignCard.js";
import CardCarousel from "../VendorCommon/CardCarousel.js";

import { MdDelete } from "react-icons/md";
import MenuCard from "../Common/CardMenu.js";
import NavBar from "../Common/NavBar.js";
const Restaurants = ({ shopName }) => {
  const [item, setItem] = useState("Appetizer");
  const [active, setActive] = useState(0);
  const [rating, setRating] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState("Appetizer");
  const [activeIndex, setActiveIndex] = useState(null);
  const [reservationForm, setReservationForm] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");
  const [guestNumber, setGuestNumber] = useState("");

  const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
  };
  const handleGuestChange = (e) => {
    setGuestNumber(e.target.value);
  };

  const handleToggleForm = (e) => {
    e.preventDefault();
    setReservationForm(!reservationForm);
  };

  const handleCategoryChange = (e, category, index) => {
    e.preventDefault();
    setSelectedCategory(category);
    setActiveIndex(index);
  };

  const filteredProducts = foodMenuItems.filter(
    (product) => product.category === selectedCategory
  );

  const categories = [
    ...new Set(foodMenuItems.map((product) => product.category)),
  ];
  const handleClick = (e, index) => {
    e.preventDefault();
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<IoStar key={i} className="text-gray-800 w-6 h-6" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<IoStarHalf key={i} className="text-gray-800 w-6 h-6" />);
      } else {
        stars.push(<IoStarOutline key={i} className="text-gray-800 w-6 h-6" />);
      }
    }
    return stars;
  };
  return (
    <div>
      <NavBar shopName={shopName} />
      {/* carousel */}
      <div
        className="carousel relative container mx-auto"
        style={{ maxWidth: "1600px" }}
      >
        <div className="carousel-inner relative overflow-hidden w-full">
          {/* First carousel item */}
          <input
            className="carousel-open hidden"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "50vh" }}
          >
            <div
              className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right "
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1526234362653-3b75a0c07438?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            >
              <div className="absolute inset-0 bg-gray-800 opacity-10"></div>
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-white text-2xl my-4">
                    Stripy Zig Zag Jigsaw Pillow and Duvet Set
                  </p>
                  <Link
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed text-white hover:text-gray-400 hover:border-black"
                    href="#"
                  >
                    view product
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Previous button for first carousel item */}
          <label
            htmlFor="carousel-3"
            className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-white rounded-full bg-transparent hover:bg-gray-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>

          {/* Next button for first carousel item */}
          <label
            htmlFor="carousel-2"
            className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-white rounded-full bg-transparent hover:bg-gray-400 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>

          {/* Second carousel item */}
          <input
            className="carousel-open hidden"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            className="carousel-item absolute opacity-0 bg-cover bg-right"
            style={{ height: "50vh" }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1553852056-0ca90e897efa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            >
              <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-white text-2xl my-4">
                    Real Bamboo Wall Clock
                  </p>
                  <Link
                    className="text-xl inline-block no-underline border-b border-gray-600 text-white leading-relaxed hover:text-gray-400 hover:border-black"
                    href="#"
                  >
                    view product
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Previous button for second carousel item */}
          <label
            htmlFor="carousel-1"
            className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-white rounded-full bg-transparent hover:bg-gray-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>

          {/* Next button for second carousel item */}
          <label
            htmlFor="carousel-3"
            className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold ttext-white hover:text-white rounded-full bg-transparent hover:bg-gray-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ›
          </label>

          <ol className="carousel-indicators">
            {/* Indicator for first carousel item */}
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >
                •
              </label>
            </li>
            {/* Indicator for second carousel item */}
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>

      {/* products */}
      <div className="bg-white py-8 px-2">
        <div className="container mx-auto flex items-center flex-wrap pt-4 ">
          <div id="store" className="w-full top-0 sm:px-4 sm:py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <div
                className="uppercase  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Menu Categories
              </div>
              <div className="flex items-center" id="store-nav-content">
                <Link
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </Link>
                <Link
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-4 ">
          <div className="grid grid-cols-12 gap-4">
            {/* menu categotries */}
            <div className="md:col-span-2 col-span-12 py-0 md:order-first ">
              <div className="flex flex-row md:flex-col md:overflow-hidden overflow-scroll gap-2 md:gap-1 mx-5 custom-scrollbar ">
                {categories.map((category, index) => {
                  return (
                    <div
                      onClick={(e) => handleCategoryChange(e, category, index)}
                      className="cursor-pointer shadow-xs capitalize text-gray-400 rounded-md"
                      key={index}
                    >
                      <div
                        className={`bg-white w-full cursor-pointer capitalize py-0 rounded-md text-gray-900 text-sm font-medium shadow-xs ${
                          activeIndex === index ? "shadow-xl" : ""
                        }`}
                      >
                        <Link
                          href="#"
                          aria-current="true"
                          className={`block px-2 py-2 rounded-md md:rounded-xs cursor-pointer hover:shadow-lg whitespace-nowrap border md:border-none border-gray-200 ${
                            activeIndex === index
                              ? "border-b-2 border-b-gray-500 text-gray-500 "
                              : "text-gray-800"
                          }`}
                        >
                          {category}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr className="w-full h-1 mt-4 text-gray-400 block md:hidden" />
            </div>
            {/* food menu */}
            <div className="md:col-span-6 col-span-12   bg-white mx-4 p-4 order-3 md:order-2">
              {filteredProducts.map((product) => (
                <MenuCard key={product.id} product={product} />
              ))}
            </div>
            {/* Addtocart */}
            <div className="md:col-span-4 col-span-12 px-2 order-first md:order-3 shadow-sm bg-white rounded-sm ">
              <div className="border rounded-md ">
                <ul className=" flex justify-between items-center w-full p-4 gap-4">
                  {foodOrderTypes.map((item, index) => {
                    return (
                      <li
                        onClick={(e) => {
                          handleClick(e, index);
                        }}
                        className={`w-full cursor-pointer shadow-xs border capitalize px-3 py-1 text-gray-400 rounded-md ${
                          active === index ? "shadow-md bg-gray-200" : ""
                        }`}
                        key={index}
                      >
                        <span
                          className={`${
                            active === index ? "text-gray-800" : ""
                          }`}
                        >
                          {item.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <hr className="w-full h-1  text-gray-400 " />
                {/* this two div hidden */}
                <div className="flex gap-4 items-center justify-between w-full p-4 ">
                  <div className="w-full flex gap-4 justify-between">
                    <div className="flex gap-4">
                      <div className="text-bold text-gray-800 ">3</div>
                      <p className="text-gray-400">X</p>
                      <div className="text-md text-gray-800">Puff Puff</div>
                    </div>
                    <div className="">Rs.1500</div>
                  </div>
                  <div>
                    <MdDelete />
                  </div>
                </div>
                <hr className="w-full h-1  text-gray-400 " />
                <div className="flex gap-4 items-center justify-between w-full p-4 ">
                  <div className="w-full flex gap-4 justify-between">
                    <div className="flex gap-4">
                      <div className="text-bold text-gray-800 ">3</div>
                      <p className="text-gray-400">X</p>
                      <div className="text-md text-gray-800">Puff Puff</div>
                    </div>
                    <div className="">Rs.1500</div>
                  </div>
                  <div>
                    <MdDelete />
                  </div>
                </div>
                <hr className="w-full h-1  text-gray-400 " />

                <div className="flex gap-4 items-center justify-between w-full p-4 ">
                  <div className="w-full flex gap-4 justify-between">
                    <div className="flex gap-4">
                      <div className="text-bold text-gray-800 ">3</div>
                      <p className="text-gray-400">X</p>
                      <div className="text-md text-gray-800">Puff Puff</div>
                    </div>
                    <div className="">Rs.1500</div>
                  </div>
                  <div>
                    <MdDelete />
                  </div>
                </div>
                <hr className="w-full h-1  text-gray-400 " />

                <div className="flex flex-col gap-0 items-center justify-between w-full p-4 ">
                  <div className="w-full tezt-sm flex justify-between">
                    <h3 className=" text-gray-400">SubTotal</h3>
                    <div className="text-gray-400">Rs.1500</div>
                  </div>
                  <div className="w-full text-sm flex justify-between">
                    <h3 className=" text-gray-400">Delivery Charge</h3>
                    <div className="text-gray-400">Rs.100</div>
                  </div>
                  <div className="w-full flex justify-between mt-4">
                    <h3 className="text-md text-gray-800">Total Amount</h3>
                    <div className="text-gray-800">Rs.1600</div>
                  </div>
                </div>
                <hr className="w-full h-1  text-gray-400 " />
                <button
                  className=" w-full bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer "
                  onClick=""
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Home Specials */}
      <div className="bg-white py-8 px-2">
        <div className="container mx-auto flex items-center flex-wrap pt-4 ">
          <div id="store" className="w-full top-0 sm:px-4 sm:py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <div
                className="uppercase  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Our Cuisine
              </div>
            </div>
          </div>

          <div className="container flex items-center justify-center flex-wrap pb-0">
            <nav className="w-full">
              <div className="">
                <ul className="flex flex-wrap justify-evenly items-center w-full">
                  {FeaturedProductMenu.map((item, index) => {
                    return (
                      <li
                        onClick={(e) => {
                          handleClick(e, index);
                        }}
                        className={`cursor-pointer shadow-xs capitalize px-3 py-1 text-gray-400 rounded-md ${
                          active === index ? " shadow-md bg-gray-200" : ""
                        }`}
                        key={index}
                      >
                        <span
                          className={`${
                            active === index ? "text-gray-800" : ""
                          }`}
                        >
                          {item.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>

          <CardCarousel />
        </div>
      </div>

      {/* Campaigns */}
      <div className="bg-white py-8 px-2">
        <div className="container mx-auto flex items-center flex-wrap pt-4 ">
          <div id="store" className="w-full top-0 sm:px-4 sm:py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <div
                className="uppercase  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Campaigns
              </div>
              <div className="flex items-center" id="store-nav-content">
                <Link
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </Link>
                <Link
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="container flex items-center justify-center flex-wrap pb-0">
            <nav className="w-full">
              <div className="">
                <ul className="flex flex-wrap justify-evenly items-center w-full">
                  {shopCampaigns.map((item, index) => {
                    return (
                      <li
                        onClick={(e) => {
                          handleClick(e, index);
                        }}
                        className={`cursor-pointer shadow-xs capitalize px-3 py-1 text-gray-400 rounded-md ${
                          active === index ? " shadow-md bg-gray-200" : ""
                        }`}
                        key={index}
                      >
                        <span
                          className={`${
                            active === index ? "text-gray-800" : ""
                          }`}
                        >
                          {item.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>

          <div className="container mx-auto mt-4  ">
            <div className="px-4">
              <Carousel
                responsive={responsive}
                containerclassName="-mx-[10px]"
                itemclassName="px-[10px]"
              >
                {CampaignCardsContent.map((card, index) => (
                  <CampaignCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    earning={card.earning}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* sales and offers */}
      <div className="bg-white py-8 px-2">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-4">
          <div id="store" className="w-full top-0 sm:px-4 sm:py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <div
                className="uppercase  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Discounts and Sales
              </div>
              <div
                className="items-center hidden md:flex"
                id="store-nav-content"
              >
                <Link
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </Link>
                <Link
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex items-center justify-center flex-wrap pb-0">
          <nav className="w-full">
            <div className=" px-0 sm:pl-32 pr-0">
              <ul className="flex flex-wrap justify-evenly items-center w-full">
                {shopDiscounts.map((item, index) => {
                  return (
                    <li
                      onClick={(e) => {
                        handleClick(e, index);
                      }}
                      className={`cursor-pointer shadow-xs capitalize px-3 py-1 text-gray-400 rounded-md ${
                        active === index ? " shadow-md bg-gray-200" : ""
                      }`}
                      key={index}
                    >
                      <span
                        className={`${active === index ? "text-gray-800" : ""}`}
                      >
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>

        <CardCarousel />
      </div>

      {/* about */}
      <div id="about" className="bg-white py-8 px-2">
        <div className="container mx-auto flex items-center flex-wrap pt-4 ">
          <div id="store" className="w-full top-0 sm:px-4 sm:py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <div
                className="uppercase  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                About
              </div>
              <div
                className="flex gap-8 mt-4 items-center"
                id="store-nav-content"
              >
                <div className="flex gap-1 items-center order-2 md:order-1">
                  {renderStars()}
                </div>
                <p className="text-gray-100 text-sm text-bold shadow-xs px-3 py-2 bg-gray-800 rounded-md">
                  Avg. Rating: <span className="text-white">4/30</span>
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-2">
              <div className="col-span-2 lg:col-span-2 p-4">
                <p className="mb-6 font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a bibendum ante. Morbi scelerisque posuere enim, at dignissim
                  eros semper vitae. Integer justo purus, elementum in hendrerit
                  eu, ornare nec erat. Quisque quis ultrices orci, id mattis
                  eros. Aenean urna augue, congue vel turpis ut, vestibulum
                  blandit arcu.
                  <br /> <br />
                  Quisque quis ultrices orci, id mattis eros. Aenean urna augue,
                  congue vel turpis ut, vestibulum blandit arcu.
                </p>
                <div className="flex space-x-4 ">
                  <button
                    className=" w-full bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer "
                    onClick={(e) => handleToggleForm(e)}
                  >
                    Reserve Table
                  </button>
                </div>
                <div className="flex space-x-4 mt-4">
                  <button className=" text-sm w-full bg-gray-800 text-white px-4 py-0 md:py-2 rounded-md cursor-pointer ">
                    Send Message
                  </button>
                  <div className="w-full bg-gray-100 text-gray-800 items-center rounded-md justify-center flex">
                    <FaPhone className="w-8 h-8 py-2 px-1" />
                    <button className="text-sm px-2  py-1 md:py-2 rounded-md hover:shadow-md">
                      +123 456 7890
                    </button>
                  </div>
                </div>
              </div>

              {reservationForm ? (
                <div className="col-span-2 lg:col-span-2 bg-white rounded-md shadow-md">
                  <div className="flip-container">
                    {/* Reservation Form */}
                    <div className="px-4 py-2">
                      <h2 className="text-xl justify-center font-semibold text-gray-800 mb-4">
                        Reserve Table
                      </h2>

                      <div className="flex justify-between mb-4">
                        <div className="w-1/2 mr-2">
                          <label
                            for="name"
                            className="block text-sm font-medium text-gray-400"
                          >
                            Name:
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full h-8  rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
                          />
                        </div>
                        <div className="w-1/2 ml-2">
                          <label
                            for="email"
                            className="block text-sm font-medium text-gray-400"
                          >
                            Email:
                          </label>
                          <input
                            type="text"
                            id="email"
                            name="email"
                            className="mt-1 block w-full h-8  rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
                          />
                        </div>
                      </div>

                      <div className="flex justify-between mb-4">
                        <div className="w-1/2 mr-2">
                          <label
                            htmlFor="table"
                            className="block text-sm font-medium text-gray-400"
                          >
                            Table No:
                          </label>
                          <select
                            id="table"
                            name="table"
                            value={selectedTable}
                            onChange={handleTableChange}
                            className="mt-1 block w-full h-8 rounded-md bg-gray-100 shadow-sm focus:border-gray-400"
                          >
                            <option value="1" className="text-gray-400">
                              Table 1
                            </option>
                            <option value="2" className="text-gray-400">
                              Table 2
                            </option>
                          </select>
                        </div>
                        <div className="w-1/2 ml-2">
                          <label
                            htmlFor="guests"
                            className="block text-sm font-medium text-gray-400"
                          >
                            Number of Guests:
                          </label>
                          <select
                            id="guests"
                            name="guests"
                            value={guestNumber}
                            onChange={handleGuestChange}
                            className="mt-1 block w-full h-8  rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
                          >
                            <option value="1" className="text-gray-400">
                              1
                            </option>
                            <option value="2" className="text-gray-400">
                              2
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="flex justify-between mb-4">
                        <div className="w-1/2 mr-2">
                          <label
                            for="date"
                            className="block text-sm font-medium text-gray-400"
                          >
                            Date:
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            className="mt-1 block w-full h-8  rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
                          />
                        </div>
                        <div className="w-1/2 mr-2">
                          <label
                            for="time"
                            className="block text-sm font-medium text-gray-400"
                          >
                            Time:
                          </label>
                          <input
                            type="time"
                            id="time"
                            name="time"
                            className="mt-1 block w-full h-8  rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label
                          for="message"
                          className="block text-sm font-medium text-gray-400"
                        >
                          Any Message:
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="3"
                          className="mt-1 block w-full rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
                        ></textarea>
                      </div>

                      <div className="flex space-x-4">
                        <button
                          className="w-full bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer "
                          onClick={(e) => handleToggleForm(e)}
                        >
                          Submit
                        </button>
                        <button
                          className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md cursor-pointer"
                          onClick={(e) => handleToggleForm(e)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-span-2 h-[68vh] lg:col-span-2 bg-gray-300  rounded-md shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image One"
                    className="w-full h-[100%] md:h-[100%] object-cover rounded-md shadow-md"
                  />
                </div>
              )}

              <div className="col-span-2 h-[68vh] lg:col-span-2 bg-gray-300 mb-4 sm:mb-0 rounded-md shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image One"
                  className="w-full h-[100%] md:h-[100%] object-cover rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="container mx-auto bg-white py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8 ">
          <div className="w-full mx-auto flex flex-wrap">
            {/* Map Section */}
            <div className="flex w-full lg:w-3/4">
              <div className="w-full px-3 md:px-0">
                <h3 className="font-bold uppercase text-gray-900">Find Us</h3>
                <div className="py-4  ">
                  <iframe
                    className="rounded-2xl shadow-md "
                    title="Google Maps Location"
                    width="100%"
                    height="250"
                    loading="lazy"
                    allowFullScreen
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1316762062283!2d-86.1348954857093!3d39.77807437944789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50f17baf14cb%3A0x68b4c144ed06cd64!2sIndianapolis%2C%20IN%2C%20USA!5e0!3m2!1sen!2sin!4v1622730871727!5m2!1sen!2sin"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="flex w-full lg:w-1/4 lg:justify-end items-center lg:text-right mt-6 md:mt-0">
              <div className="px-3 md:px-0">
                <div className="py-2">
                  <h3 className="uppercase text-left lg:text-right font-bold text-gray-900">
                    Address
                  </h3>
                  <p className="text-gray-700">
                    1234 Main St, Suite 100
                    <br />
                    Springfield, IL 62704
                    <br />
                    USA
                  </p>
                </div>

                <div className="w-full flex items-center justify-start lg:justify-end py-4 mt-0 gap-4">
                  <FaFacebook className="w-7 h-7" />
                  <FaInstagram className="w-7 h-7" />
                  <FaYoutube className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
