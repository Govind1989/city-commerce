import React, { useState, useEffect } from "react";
import {
  shopCategory,
  shopDiscounts,
  shopCampaigns,
  CampaignCardsContent,
  FeaturedProductMenu,
  responsive,
} from "../../data.js";
import { IoStar, IoStarOutline, IoStarHalf } from "react-icons/io5";
import { FaPhone, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import { GrNext, GrPrevious } from "react-icons/gr";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import CampaignCard from "../VendorCommon/CampaignCard.js";
import CardCarousel from "../VendorCommon/CardCarousel.js";
const Products = ({ shopName }) => {
  const [item, setItem] = useState(0);
  const [active, setActive] = useState(0);
  const [rating, setRating] = useState(4);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<IoStar key={i} className="text-gray-400 w-6 h-6" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<IoStarHalf key={i} className="text-gray-400 w-6 h-6" />);
      } else {
        stars.push(<IoStarOutline key={i} className="text-gray-400 w-6 h-6" />);
      }
    }
    return stars;
  };

  return (
    <div>
      <nav id="header" className="bg-white sticky w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label for="menu-toggle" className="cursor-pointer md:hidden block">
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li>
                  <a
                    className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                    href="#"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                    href="#"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="order-1 md:order-2">
            <a
              className="flex  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              href="#"
            >
              <svg
                className="fill-current text-gray-800 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
              </svg>
              <div className="mt-0">{shopName}</div>
            </a>
          </div>

          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            <a className="inline-block no-underline hover:text-black" href="#">
              <svg
                className="fill-current hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <circle fill="none" cx="12" cy="7" r="3" />
                <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
              </svg>
            </a>

            <a
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
                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
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
              className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gray-800 opacity-10"></div>
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-white text-2xl my-4">
                    Stripy Zig Zag Jigsaw Pillow and Duvet Set
                  </p>
                  <a
                    className="text-xl text-white inline-block no-underline border-b border-gray-200 leading-relaxed hover:text-black hover:border-black"
                    href="#"
                  >
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Previous button for first carousel item */}
          <label
            htmlFor="carousel-3"
            className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>

          {/* Next button for first carousel item */}
          <label
            htmlFor="carousel-2"
            className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
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
                  "url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gray-800 opacity-10"></div>
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-white text-2xl my-4">
                    Real Bamboo Wall Clock
                  </p>
                  <a
                    className="text-xl text-white inline-block no-underline border-b border-gray-200 leading-relaxed hover:text-black hover:border-black"
                    href="#"
                  >
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Previous button for second carousel item */}
          <label
            htmlFor="carousel-1"
            className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>

          {/* Next button for second carousel item */}
          <label
            htmlFor="carousel-3"
            className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
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
      <div className="bg-white py-8 ">
        <div className="container mx-auto flex items-center flex-wrap pt-4 ">
          <div id="store" className="w-full  top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Products
              </a>
              <div className="flex items-center" id="store-nav-content">
                <a
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
                </a>
                <a
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
                </a>
              </div>
            </div>
          </div>

          <div className="container flex items-center justify-center flex-wrap pb-0">
            <nav className="w-full">
              <div className="text-center">
                <h2 className="text-gray-400 text-lg  mb-4 relative inline-block">
                  Our Categories
                  <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gray-700 transform -translate-y-1/2"></span>
                </h2>
              </div>
              <div className="">
                <ul className="flex flex-wrap justify-evenly items-center w-full">
                  {shopCategory.map((item, index) => {
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
          {/* <div className="w-full  md:p-6 flex flex-row px-4 relative"> */}
          <div className="w-full md:w-1/3 xl:w-1/4">
            <Card Discount={false} />
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4">
            <Card Discount={false} />
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4">
            <Card Discount={false} />
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4">
            <Card Discount={false} />
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4">
            <Card Discount={false} />
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4">
            <Card Discount={false} />
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4">
            <Card Discount={false} />
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4">
            <Card Discount={false} />
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4">
            <Card Discount={false} />
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4">
            <Card Discount={false} />
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4">
            <Card Discount={false} />
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4">
            <Card Discount={false} />
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* best sellers */}
      <div className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 ">
          <div id="store" className="w-full  top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Featured
              </a>
              {/* <div
                className="flex items-center text-gray-400  gap-8"
                id="store-nav-content"
              >
                <GrPrevious className="w-4 h-auto cursor-pointer" />
                <GrNext className="w-4 h-auto cursor-pointer" />
              </div> */}
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
      <div className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 ">
          <div id="store" className="w-full  top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Campaigns
              </a>
              <div className="flex items-center" id="store-nav-content">
                <a
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
                </a>
                <a
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
                </a>
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
                containerClass="-mx-[10px]"
                itemClass="px-[10px]"
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
      <div className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-4">
          <div id="store" className="w-full top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Discounts and Sales
              </a>
              <div
                className="items-center hidden md:flex"
                id="store-nav-content"
              >
                <a
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
                </a>
                <a
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
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex items-center justify-center flex-wrap pb-0">
          <nav className="w-full">
            <div className="px-12 sm:pl-32 pr-0">
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
      <div className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 ">
          <div id="store" className="w-full top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                About
              </a>
              <div className="flex gap-8 items-center" id="store-nav-content">
                <div className="flex gap-1 items-center">{renderStars()}</div>
                <p className="text-gray-100 text-sm text-bold shadow-xs px-3 py-2 bg-gray-400 rounded-md">
                  Avg. Rating: <span className="text-white">4/30</span>
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto p-4">
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
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer ">
                    Send Message
                  </button>
                  <div className=" bg-gray-100 text-gray-800 items-center rounded-md justify-center flex">
                    <FaPhone className="w-8 h-8 py-2 px-2" />
                    <button className=" px-2 py-2 rounded-md hover:shadow-md">
                      +123 456 7890
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-2 bg-gray-300 mb-4 sm:mb-0 rounded-md shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlJTIwZGVzaWdufGVufDB8fDB8fHww"
                  alt="Image One"
                  className="w-full h-full object-cover rounded-md shadow-md"
                />
              </div>

              <div className="col-span-2 lg:col-span-2 bg-gray-300  rounded-md shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlJTIwZGVzaWdufGVufDB8fDB8fHww"
                  alt="Image One"
                  className="w-full h-full object-cover rounded-md shadow-md"
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

export default Products;