import { useRouter } from "next/router";
import NavBar from "@/components/Common/NavBar";
import React, { useState } from "react";

import { MdOutlineShoppingBag, MdStorefront } from "react-icons/md";
import CategoryProducts from "@/components/Common/CategoryProducts";
import FilterVendors from "@/components/Common/FilterVendors";
import Link from "next/link";

const CategoryPage = () => {
  // const [showProducts, setShowProducts] = useState(true);
  // const [showVendors, setShowVendors] = useState(false);
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <NavBar />
      <div className="bg-white py-8">
        <div className="container mx-auto  px-8  ">
          <div className="-mx-6 flex flex-wrap">
            <div className="w-full px-2 sm:px-4 lg:w-8/12">
              <div className="relative mb-4 sm:mb-8 h-[370px] md:h-[462px]">
                <img
                  src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-01.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12">
                  <div className="max-w-[420px] w-[200px] sm:w-full">
                    <h3>
                      <Link
                        href="javascript:void(0)"
                        className="mb-5 block text-2xl font-bold text-dark hover:text-primary sm:text-4xl"
                      >
                        Mega Sale Up To 50% Off For All
                      </Link>
                    </h3>
                    <p className="mb-9 text-base text-body-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum ornare vestibulum mollis. Nam vitae augue
                      purus. Integer ac accumsan nunc.
                    </p>
                    <Link
                      href="javascript:void(0)"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-0 py-[13px] text-center text-base font-medium text-gray-800 hover:bg-blue-dark"
                    >
                      Grab The Offer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="-mx-6 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2 lg:w-full">
                  <div className="relative mb-4 h-[223px]">
                    <img
                      src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-02.jpg"
                      alt="product"
                      className="h-full w-full object-cover object-center"
                    />

                    <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                      <div className="max-w-[180px] text-right">
                        <h3>
                          <Link
                            href="javascript:void(0)"
                            className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl"
                          >
                            Summer Travel Collection
                          </Link>
                        </h3>
                        <Link
                          href="javascript:void(0)"
                          className="text-base font-medium text-dark hover:text-primary"
                        >
                          Discover Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-full">
                  <div className="relative mb-8 h-[223px]">
                    <img
                      src="https://demo.tailgrids.com/templates/planet/build/src/assets/ecom-images/headers/header-04/image-03.jpg"
                      alt="product"
                      className="h-full w-full object-cover object-center"
                    />

                    <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                      <div className="max-w-[180px] text-right">
                        <h3>
                          <Link
                            href="javascript:void(0)"
                            className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl"
                          >
                            Get 30% Off On iPhone
                          </Link>
                        </h3>
                        <Link
                          href="javascript:void(0)"
                          className="text-base font-medium text-dark hover:text-primary"
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" items-start justify-center space-y-4 py-2 sm:py-8 sm:px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
            <div className="container mx-auto">
              <h1 className="text-2xl font-bold text-gray-800">{slug}</h1>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            {/* <div className="flex flex-col gap-2">
              <button
                className="flex gap-2 whitespace-nowrap w-full rounded-lg bg-gray-800 px-6 py-2 font-bold text-white transition hover:translate-y-1"
                onClick={() => {
                  setShowProducts(true);
                  setShowVendors(false);
                }}
              >
                <MdOutlineShoppingBag className="w-5 h-auto" />
                View Products
              </button>
              <button
                className="flex gap-2 whitespace-nowrap rounded-lg bg-gray-800 px-6 py-2 font-bold text-white transition hover:translate-y-1"
                onClick={() => {
                  setShowProducts(false);
                  setShowVendors(true);
                }}
              >
                <MdStorefront className="w-5 h-auto" />
                Filter Vendors
              </button>
            </div> */}
          </div>

          {/* Conditional rendering based on state */}
          {/* {showProducts && (
            <div> */}
          <CategoryProducts />
          {/* </div> */}
          {/* )} */}

          {/* {showVendors && (
            <div>
              <FilterVendors />
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
