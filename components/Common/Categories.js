import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const Categories = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);
  const ulRef = useRef(null);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const ul = ulRef.current;

    const startCarousel = () => {
      intervalIdRef.current = setInterval(() => {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + 1;
          ul.style.transform = `translateX(-${newPosition}px)`;
          if (newPosition >= ul.scrollWidth / 2) {
            ul.style.transform = "translateX(0)";
            return 0;
          }
          return newPosition;
        });
      }, 50);
    };

    if (!isHovered) {
      startCarousel();
    }

    const handleMouseEnter = () => {
      clearInterval(intervalIdRef.current);
      setIsHovered(true);
      carousel.classList.add("custom-hr-scroll");
      carousel.style.overflowX = "scroll";
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      carousel.classList.remove("custom-hr-scroll");
      carousel.style.overflowX = "hidden";
    };

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(intervalIdRef.current);
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full h-full mx-auto">
        <div className="">
          <div
            ref={carouselRef}
            id="logo-carousel"
            className="w-full inline-flex flex-nowrap mt-4 overflow-hidden"
          >
            <ul
              ref={ulRef}
              className="flex gap-4 relative items-start justify-center md:justify-start mb-2"
            >
              <div className="min-w-fit w-full shadow-md rounded-lg flex flex-col md:flex-row justify-between relative">
                <img
                  src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-02.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gray-800 opacity-50 z-5"></div>
                <div className="absolute bottom-16 right-0 z-10  px-8 rounded">
                  <h3>
                    <Link
                      href="#"
                      className="block text-xl font-bold text-white whitespace-wrap hover:text-primary xl:text-2xl" // Changed text color to white
                    >
                      Wearables
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="text-base font-medium text-white hover:text-primary" // Changed text color to white
                  >
                    Shop Now
                  </Link>
                </div>
              </div>

              <div className="min-w-fit w-full shadow-md rounded-lg flex flex-col md:flex-row justify-between relative">
                <img
                  src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-02.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gray-800 opacity-50 z-5"></div>
                <div className="absolute bottom-16 right-0 z-10  px-8 rounded">
                  <h3>
                    <Link
                      href="#"
                      className="block text-xl font-bold text-white whitespace-wrap hover:text-primary xl:text-2xl" // Changed text color to white
                    >
                      Foods
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="text-base font-medium text-white hover:text-primary" // Changed text color to white
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="min-w-fit w-full shadow-md rounded-lg flex flex-col md:flex-row justify-between relative">
                <img
                  src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-02.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gray-800 opacity-50 z-5"></div>
                <div className="absolute bottom-16 right-0 z-10  px-8 rounded">
                  <h3>
                    <Link
                      href="#"
                      className="block text-xl font-bold text-white whitespace-wrap hover:text-primary xl:text-2xl" // Changed text color to white
                    >
                      Furnitures
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="text-base font-medium text-white hover:text-primary" // Changed text color to white
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="min-w-fit w-full shadow-md rounded-lg flex flex-col md:flex-row justify-between relative">
                <img
                  src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-02.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gray-800 opacity-50 z-5"></div>
                <div className="absolute bottom-16 right-0 z-10 px-8 rounded">
                  <h3>
                    <Link
                      href="#"
                      className="block text-xl font-bold text-white whitespace-wrap hover:text-primary xl:text-2xl" // Changed text color to white
                    >
                      Electronics
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="text-base font-medium text-white hover:text-primary" // Changed text color to white
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="min-w-fit w-full shadow-md rounded-lg flex flex-col md:flex-row justify-between relative">
                <img
                  src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-02.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gray-800 opacity-50 z-5"></div>
                <div className="absolute bottom-16 right-0 z-10 px-8 rounded">
                  <h3>
                    <Link
                      href="#"
                      className="block text-xl font-bold text-white whitespace-nowrap hover:text-primary xl:text-2xl" // Changed text color to white
                    >
                      Computers & Accessories
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="text-base font-medium text-white hover:text-primary" // Changed text color to white
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="min-w-fit w-full shadow-md rounded-lg flex flex-col md:flex-row justify-between relative">
                <img
                  src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-02.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gray-800 opacity-50 z-5"></div>
                <div className="absolute bottom-16 right-0 z-10 px-8 rounded">
                  <h3>
                    <Link
                      href="#"
                      className="block text-xl font-bold text-white whitespace-nowrap hover:text-primary xl:text-2xl" // Changed text color to white
                    >
                      Mobiles & Accessories
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="text-base font-medium text-white hover:text-primary" // Changed text color to white
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="min-w-fit w-full shadow-md rounded-lg flex flex-col md:flex-row justify-between relative">
                <img
                  src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-02.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gray-800 opacity-50 z-5"></div>
                <div className="absolute bottom-16 right-0 z-10 px-8 rounded">
                  <h3>
                    <Link
                      href="#"
                      className="block text-xl font-bold text-white whitespace-nowrap hover:text-primary xl:text-2xl" // Changed text color to white
                    >
                      Service Bookings
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="text-base font-medium text-white hover:text-primary" // Changed text color to white
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="min-w-fit w-full shadow-md rounded-lg flex flex-col md:flex-row justify-between relative">
                <img
                  src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-02.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gray-800 opacity-50 z-5"></div>
                <div className="absolute bottom-16 right-0 z-10 px-8 rounded">
                  <h3>
                    <Link
                      href="#"
                      className="block text-xl font-bold text-white whitespace-nowrap hover:text-primary xl:text-2xl" // Changed text color to white
                    >
                      Holidays
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="text-base font-medium text-white hover:text-primary" // Changed text color to white
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="min-w-fit w-full shadow-md rounded-lg flex flex-col md:flex-row justify-between relative">
                <img
                  src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-02.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gray-800 opacity-50 z-5"></div>
                <div className="absolute bottom-16 right-0 z-10 px-8 rounded">
                  <h3>
                    <Link
                      href="#"
                      className="block text-xl font-bold text-white whitespace-nowrap hover:text-primary xl:text-2xl" // Changed text color to white
                    >
                      Appointments
                    </Link>
                  </h3>
                  <Link
                    href="#"
                    className="text-base font-medium text-white hover:text-primary" // Changed text color to white
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
