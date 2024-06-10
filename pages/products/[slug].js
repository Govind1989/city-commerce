import ProductDetailsCarousel from "@/components/VendorCommon/ProductDetailsCarousel";
import RelatedProducts from "@/components/VendorCommon/RelatedProducts";
import ProductAccordion from "@/components/Common/ProductAccordion";
import NavBar from "@/components/Common/NavBar";
import React, { useState } from "react";
import { IoStar, IoStarOutline, IoStarHalf } from "react-icons/io5";
import QuantityInput from "@/components/VendorCommon/QuantityInput";

const ProductDetails = () => {
  const renderStars = () => {
    const [rating, setRating] = useState(4);

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<IoStar key={i} className="text-gray-400 w-4 h-4" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<IoStarHalf key={i} className="text-gray-400 w-4 h-4" />);
      } else {
        stars.push(<IoStarOutline key={i} className="text-gray-400 w-4 h-4" />);
      }
    }
    return stars;
  };
  return (
    <>
      <NavBar />
      <div className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 px-4 ">
          <div className="w-full ">
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
              <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                <ProductDetailsCarousel />
              </div>

              <div className="flex-[1]">
                {/* PRODUCT TITLE */}
                <div className="text-[24px] text-gray-800  mb-2 leading-tight">
                  Product Name
                </div>

                {/* PRODUCT DESCRIPTION*/}
                <div className="text-sm font-normal mb-5 text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>

                {/* PRODUCT PRICE */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <span className="text-2xl font-bold text-gray-800 mr-2">
                      Rs. 799
                    </span>
                    <span className="text-xs text-slate-400 line-through mt-2">
                      Rs. 1150
                    </span>
                    <p className="ml-auto mt-1 text-base font-medium text-green-500">
                      [ 10 % off ]
                    </p>
                  </div>
                  <QuantityInput />
                </div>

                <div className="text-sm font-medium text-gray-400">
                  incl. of taxes
                </div>

                <div className="flex justify-between">
                  <div className="text-sm font-medium text-gray-400 mb-4">
                    {`(Also includes all applicable duties)`}
                  </div>
                  <div>
                    <div className="flex gap-1 items-center">
                      {renderStars()}
                    </div>
                  </div>
                </div>

                {/* ADD TO CART BUTTON START */}
                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-4 hover:opacity-75"
                  onClick={() => alert("Added to cart")} // Add a function or logic for the onClick event
                >
                  Add to Cart
                </button>
                {/* ADD TO CART BUTTON END */}

                {/* <div>
                  <div className="text-md font-bold mb-5">Product Details</div>
                  <div className="markdown text-sm mb-5 text-gray-400">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="markdown text-sm mb-5 text-gray-400">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam.
                    </p>
                  </div>
                </div> */}

                <ProductAccordion />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto items-center  pt-4 sm:pt-12 px-4 ">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Similar Products
              </a>
            </div>
          </nav>
          <RelatedProducts />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
