import NavBar from "@/components/Common/NavBar";
import React, { useState } from "react";

import CategoryProducts from "@/components/Common/CategoryProducts";

import Link from "next/link";

const Index = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white py-8">
        <div className="container mx-auto  px-8  ">
          <div className="-mx-6 flex flex-wrap">
            <div className="w-full px-2 sm:px-4 lg:w-8/12">
              <div className="relative mb-4 sm:mb-8 h-[370px] md:h-[462px]">
                <img
                  src="https://marketplace.canva.com/EAF9MaRniPk/1/0/400w/canva-BklKr_q3ZIc.jpg"
                  alt="Delicious Food"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12">
                  <div className="max-w-[420px] w-[200px] sm:w-full">
                    <h3>
                      <Link
                        href="javascript:void(0)"
                        className="mb-5 block text-2xl font-bold text-dark hover:text-primary sm:text-4xl"
                      >
                        Tasty Meals Delivered To Your Doorstep
                      </Link>
                    </h3>
                    <p className="mb-9 text-base text-body-color">
                      Order now and enjoy a wide variety of delicious meals.
                      Fresh, hot, and delivered fast.
                    </p>
                    <Link
                      href="javascript:void(0)"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-0 py-[13px] text-center text-base font-medium text-gray-800 hover:bg-blue-dark"
                    >
                      Order Now
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
                      src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2QlMjBvcmRlcmluZyUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Pizza Offer"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                      <div className="max-w-[180px] text-right">
                        <h3>
                          <Link
                            href="javascript:void(0)"
                            className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl"
                          >
                            Endulge in our sweet treats
                          </Link>
                        </h3>
                        <Link
                          href="javascript:void(0)"
                          className="text-base font-medium text-dark hover:text-primary"
                        >
                          Deserts
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-full">
                  <div className="relative mb-8 h-[223px]">
                    <img
                      src="https://example.com/images/food-promo2.jpg"
                      alt="Burger Offer"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                      <div className="max-w-[180px] text-right">
                        <h3>
                          <Link
                            href="javascript:void(0)"
                            className="mb-3 block text-xl font-bold text-dark hover:text-primary xl:text-2xl"
                          >
                            Buy 1 Get 1 Free on Burgers
                          </Link>
                        </h3>
                        <Link
                          href="javascript:void(0)"
                          className="text-base font-medium text-dark hover:text-primary"
                        >
                          Order Burger
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

export default Index;
