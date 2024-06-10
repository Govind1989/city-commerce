import React, { useState } from "react";
import {
  MdCalendarMonth,
  MdOutlineArrowBack,
  MdOutlineLanguage,
  MdOutlinePerson,
} from "react-icons/md";
import Link from "next/link";
import { categoryPages } from "@/data";
const NavBar = () => {
  const [item, setItem] = useState(1);
  const [active, setActive] = useState(0);
  const [isLanguage, setIsLanguage] = useState(false);

  const toggleLanguage = () => {
    setIsLanguage(!isLanguage);
  };
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <nav id="header" className="bg-white sticky w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <div className="order-2 md:order-2 flex flex-row ">
            <div className="p-2 hidden sm:block ">
              <MdOutlineArrowBack className="w-4 h-auto " />
            </div>
            <Link
              className="flex  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              href="#"
            >
              <svg
                className="fill-current text-gray-800 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
              </svg>
              <div className="mt-0 ">City Commerce</div>
            </Link>
          </div>

          <div className="order-1 md:order-2">
            <div className=" relative w-[90vw] md:w-[20vw] md:mr-0 mb-2 md:mb-0 md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
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
                placeholder="I am looking for . . ."
              />
            </div>
          </div>
          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            <div className="flex justify-evenly ">
              <div className="items-center">
                <button
                  className="pl-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Calendar"
                >
                  <MdCalendarMonth className="w-6 h-auto" />
                  <span className="absolute inset-0 object-right-top -mt-3 -mr-5">
                    <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-gray-600 text-white">
                      6
                    </div>
                  </span>
                </button>
                <button
                  className="pl-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Cart"
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
                  <span className="absolute inset-0 object-right-top -mt-3 -mr-5">
                    <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-gray-600 text-white">
                      6
                    </div>
                  </span>
                </button>
                <button
                  className="pl-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="profile"
                >
                  <MdOutlinePerson className="w-7 h-auto" />
                </button>

                <div className="relative inline-block">
                  <button
                    onClick={toggleLanguage}
                    className="pl-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="profile"
                  >
                    <MdOutlineLanguage className="w-7 h-auto" />
                  </button>

                  {/* Dropdown menu */}
                  {isLanguage && (
                    <div
                      onClick={() => setIsLanguage(false)}
                      className="absolute right-0 z-20 w-28 py-0 mt-0 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition transform ease-out duration-100 scale-90"
                    >
                      <Link
                        href="#"
                        className="block px-8 py-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        English
                      </Link>

                      <hr className="border-gray-200 dark:border-gray-700" />

                      <Link
                        href="#"
                        className="block px-8 py-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        नेपाली
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-white ">
        <div className="w-full container mx-auto flex gap-2 flex-wrap items-center justify-evenly mt-0 px-6 py-0">
          <div
            className="md:flex md:items-center md:w-auto w-full order-3 md:order-1 "
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-1 md:pt-0 flex  flex-wrap pb-0">
                {categoryPages.map((item, index) => {
                  return (
                    <li
                      onClick={(e) => {
                        handleClick(e, index);
                      }}
                      className={`cursor-pointer inline-block
                      no-underline
                      text-gray-400
                      hover:text-black
                      py-2
                      px-4   ${active === index ? "underline" : ""}`}
                      key={index}
                    >
                      <Link
                        href={`/category/${item.name}`}
                        className={`${active === index ? " text-black" : ""}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
