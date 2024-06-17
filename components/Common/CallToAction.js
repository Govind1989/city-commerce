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
          src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsZSUyMGJhbm5lcnxlbnwwfDF8MHx8fDA%3D"
          className="w-1/2 rounded-lg"
          alt="cta_image_1"
        />
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1572584642822-6f8de0243c93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbGUlMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D"
            className="mb-4 rounded-lg"
            alt="cta_image_2"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8MHwwfHx8MA%3D%3D"
            className="rounded-lg"
            alt="cta_image_3"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
