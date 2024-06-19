import CountDownTimer from "@/components/Common/CountDownTimer";
import HomeCarousel from "@/components/Common/HomeCarousel";
import NavBar from "@/components/Common/NavBar";
import Card from "@/components/Common/CardL";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="mb-2">
        <HomeCarousel />
      </div>
      <div className="bg-white py-2 px-8">
        {/* Wearables Category section */}
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
                      <div className="text-md font-semibold text-dark sm:text-lg mt-4 mb-4">
                        Express Your Beautiful you Through Our Collection
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
                      <div className="text-md font-semibold text-dark sm:text-lg mt-4 mb-4">
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
                        <div className="text-md font-semibold text-dark sm:text-lg mt-4 mb-4">
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
                        <div className="text-md font-semibold text-dark sm:text-lg mt-4 mb-4">
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

        {/* FlashDeal */}
        <div className="container mx-auto flex items-center flex-wrap sm:pt-4 ">
          <div id="store" className="w-full  top-0  sm:py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 sm:px-2 py-3">
              <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                Flash Deals
              </div>
              <div className="flex gap-2 items-center justify-center">
                {/* <span> classNamEnds in: </span> */}
                <CountDownTimer />
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
                  Wearables
                </Link>
              </li>
              <li className="inline-block align-top text-[14px] text-gray-400 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px]  active">
                <Link
                  className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                  href="#fruit"
                >
                  Foods
                </Link>
              </li>
              <li className="inline-block align-top text-[14px] text-gray-400 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px]">
                <Link
                  className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                  href="#veg"
                >
                  Furnitures
                </Link>
              </li>
              <li className="inline-block align-top text-[14px] text-gray-400 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px]">
                <Link
                  className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                  href="#fruit"
                >
                  Electronics
                </Link>
              </li>
              <li className="inline-block align-top text-[14px] text-gray-400 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px]">
                <Link
                  className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                  href="#fruit"
                >
                  Computer & Parts
                </Link>
              </li>
              <li className="inline-block align-top text-[14px] text-gray-400 uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px]">
                <Link
                  className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                  href="#fruit"
                >
                  Mobile & Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-screen sm:mt-4 flex relative mb-4 sm:mb-4 overflow-x-scroll custom-hr-scroll">
            <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
              <Card Discount={true} vendor={true} />
            </div>
            <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
              <Card Discount={true} vendor={true} />
            </div>
            <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
              <Card Discount={true} vendor={true} />
            </div>
            <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
              <Card Discount={true} vendor={true} />
            </div>
            <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
              <Card Discount={true} vendor={true} />
            </div>
            <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
              <Card Discount={true} vendor={true} />
            </div>
            <div className="flex-shrink-0 w-1/2 md:w-1/3 xl:w-1/4">
              <Card Discount={true} vendor={true} />
            </div>
          </div>
        </div>
        {/* Foods Category section */}
        <div className="container  mx-auto mt-8">
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
                        #Cooked Foods
                      </span>
                      <div className="text-md font-semibold text-dark sm:text-lg mt-4 mb-4">
                        Taste the cuisine from our restaurants
                      </div>
                      <button
                        type="button"
                        className="py-2 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Order Now
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
                        #Sweets & Deserts
                      </span>
                      <div className="text-md font-semibold text-dark sm:text-lg mt-4 mb-4">
                        Endulge in the delightful tastes of our restaurants
                      </div>
                      <button
                        type="button"
                        className="py-2 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Order Now
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
                          #Grocery
                        </span>
                        <div className="text-md font-semibold text-dark sm:text-lg mt-4 mb-4">
                          Get your daily grocery need delivered to you
                        </div>
                        <button
                          type="button"
                          className="py-2 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
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
                          #Drinks
                        </span>
                        <div className="text-md font-semibold text-dark sm:text-lg mt-4 mb-4">
                          Get a sip from our tasty drinks
                        </div>
                        <button
                          type="button"
                          className="py-2 px-4 bg-gray-800 hover:bg-gray-200 text-white hover:text-gray-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reels section */}
        <div>
          <ul class="flex gap-2 items-center overflow-y-scroll custom-hr-scroll mt-2">
            <li class="flex flex-col items-center space-y-2">
              <div class="p-1 relative">
                <Link
                  class="block bg-white p-1 rounded-xl transform transition hover:grow duration-300"
                  href="#"
                >
                  <img
                    class="h-32 w-32 max-w-32 max-h-auto rounded-xl"
                    src="https://i.ibb.co/yhh0Ljy/profile.jpg"
                    alt="image"
                  />
                </Link>
              </div>
              <p className="text-sm text-gray-600">Elegant Apparel</p>
            </li>
            <li class="flex flex-col items-center space-y-2">
              <div class="p-1 relative">
                <Link
                  class="block bg-white p-1 rounded-xl transform transition hover:grow duration-300"
                  href="#"
                >
                  <img
                    class="h-32 w-32 max-w-32 max-h-auto rounded-xl"
                    src="https://i.ibb.co/yhh0Ljy/profile.jpg"
                    alt="image"
                  />
                </Link>
              </div>
              <p className="text-sm text-gray-600">Elegant Apparel</p>
            </li>
            <li class="flex flex-col items-center space-y-2">
              <div class="p-1 relative">
                <Link
                  class="block bg-white p-1 rounded-xl transform transition hover:grow duration-300"
                  href="#"
                >
                  <img
                    class="h-32 w-32 max-w-32 max-h-auto rounded-xl"
                    src="https://i.ibb.co/yhh0Ljy/profile.jpg"
                    alt="image"
                  />
                </Link>
              </div>
              <p className="text-sm text-gray-600">Elegant Apparel</p>
            </li>
            <li class="flex flex-col items-center space-y-2">
              <div class="p-1 relative">
                <Link
                  class="block bg-white p-1 rounded-xl transform transition hover:grow duration-300"
                  href="#"
                >
                  <img
                    class="h-32 w-32 max-w-32 max-h-auto rounded-xl"
                    src="https://i.ibb.co/yhh0Ljy/profile.jpg"
                    alt="image"
                  />
                </Link>
              </div>
              <p className="text-sm text-gray-600">Elegant Apparel</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
