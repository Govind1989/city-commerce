import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
      <div className="w-full py-2  sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white sm:text-2xl">
          <span className="block">Discover Amazing Deals Now!</span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
          We believe in the value of your loyalty. Explore our exclusive
          collection of products and enjoy unbeatable prices with multiple
          campaigns and offers.
          <br /> Shop now and experience shopping like never before.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-4 md:mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              className="py-2 px-4  bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 py-2 lg:py-2">
        <img
          src="https://www.tailwind-kit.com/images/landscape/3.jpg"
          className="w-1/2 rounded-lg"
          alt="cta_image_1"
        />
        <div className="">
          <img
            src="https://www.tailwind-kit.com/images/landscape/2.jpg"
            className="mb-4 rounded-lg"
            alt="cta_image_2"
          />
          <img
            src="https://www.tailwind-kit.com/images/landscape/4.jpg"
            className="rounded-lg"
            alt="cta_image_3"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
