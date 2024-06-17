import HomeCarousel from "@/components/Common/HomeCarousel";
import NavBar from "@/components/Common/NavBar";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <div className=" mb-8">
        <HomeCarousel />
      </div>
      <div className="bg-white py-6 px-8">
        {/* Category section */}
        <div className="container  mx-auto">
          <div className="-mx-2 flex flex-col gap-4 lg:flex-row -mt-6 mb-4">
            <div className="w-full md:flex gap-4 -mb-4 md:-mb-8">
              <div className="w-full md:w-1/2 flex-1">
                <div className="relative sm:mb-10 mb-4 sm:h-[500px] lg:h-[440px] xl:h-[476px]">
                  <img
                    src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-01.jpg"
                    alt="category"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute left-0 top-0 h-full w-full px-4 py-6 sm:px-8">
                    <div className="max-w-[400px]">
                      <span className="mb-3 block text-base font-medium text-body-color">
                        #Men&apos;s Clothing
                      </span>
                      <div className="text-md font-semibold text-dark sm:text-lg mt-4 mb-8">
                        Express Your Beautiful Life Through
                      </div>
                      <button
                        type="button"
                        className="py-2 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex-1">
                <div className="relative sm:mb-10 mb-4 sm:h-[500px] lg:h-[440px] xl:h-[476px]">
                  <img
                    src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-01.jpg"
                    alt="category"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute left-0 top-0 h-full w-full px-4 py-6 sm:px-8">
                    <div className="max-w-[400px]">
                      <span className="mb-3 block text-base font-medium text-body-color">
                        #Women&apos;s Clothing
                      </span>
                      <div className="text-md font-semibold text-dark sm:text-lg mt-4 mb-8">
                        Express Your Beautiful Life Through Furniture
                      </div>
                      <button
                        type="button"
                        className="py-2 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="w-full md:flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full -mb-4 md:mb-0">
                  <div className="flex-1 relative md:mb-4 sm:mb-4 h-[180px] sm:h-[242px] lg:h-[212px] xl:h-[230px]">
                    <img
                      src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-03.jpg"
                      alt="category"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute left-0 top-0 h-full w-full px-4 py-6 sm:px-8">
                      <div className="max-w-[400px]">
                        <span className="mb-3 block text-base font-medium text-body-color">
                          #Footwear
                        </span>
                        <div className="text-md font-semibold text-dark sm:text-lg mt-4 mb-8">
                          Make Your Working More Effective & Comfortable
                        </div>
                        <button
                          type="button"
                          className="py-2 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="w-full mb-4 md:mb-0">
                  <div className=" flex-1 relative h-[180px] sm:h-[242px] lg:h-[212px] xl:h-[230px]">
                    <img
                      src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-02.jpg"
                      alt="category"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute left-0 top-0 h-full w-full px-6 py-10 sm:px-10">
                      <div className="max-w-[400px]">
                        <span className="mb-3 block text-base font-medium text-body-color">
                          #Accessories
                        </span>
                        <div className="text-md font-semibold text-dark sm:text-lg">
                          Discover Our Accessories Collection
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                {/* <div className="w-full -mb-4 md:mb-0">
                  <div className="flex-1 relative mb-4 h-[180px] sm:h-[242px] lg:h-[212px] xl:h-[230px]">
                    <img
                      src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-03.jpg"
                      alt="category"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute left-0 top-0 h-full w-full px-6 py-10 sm:px-10">
                      <div className="max-w-[400px]">
                        <span className="mb-3 block text-base font-medium text-body-color">
                          #Laptops
                        </span>
                        <div className="text-md font-semibold text-dark sm:text-lg">
                          Make Your Working More Effective & Comfortable
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="w-full ">
                  <div className=" flex-1 relative mt-8 md:mt-0 h-[180px] sm:h-[242px] lg:h-[212px] xl:h-[230px]">
                    <img
                      src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-02.jpg"
                      alt="category"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute left-0 top-0 h-full w-full px-4 py-6 sm:px-8">
                      <div className="max-w-[400px]">
                        <span className="mb-3 block text-base font-medium text-body-color">
                          #Accessories
                        </span>
                        <div className="text-md font-semibold text-dark sm:text-lg mt-4 mb-8">
                          Discover Our Accessories Collection
                        </div>
                        <button
                          type="button"
                          className="py-2 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
        </div>
      </div>
    </div>
  );
}
