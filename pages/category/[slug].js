import { useRouter } from "next/router";
import NavBar from "@/components/Common/NavBar";
import React, { useState } from "react";

import { MdOutlineShoppingBag, MdStorefront } from "react-icons/md";
import CategoryProducts from "@/components/Common/CategoryProducts";
import FilterVendors from "@/components/Common/FilterVendors";
import Link from "next/link";

const CategoryPage = () => {
  const [showProducts, setShowProducts] = useState(true);
  const [showVendors, setShowVendors] = useState(false);
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <NavBar />
      <div className="bg-white py-8">
        <div className="container mx-auto pt-4 px-8  ">
          <div className="flex gap-2 flex-col sm:flex-row">
            <div
              className="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg flex-grow-0 flex-shrink-0 w-full sm:w-1/3"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHwwfDB8fHww)",
              }}
            >
              {/* Overlay Text */}
              <div className="absolute inset-0 -bottom-14 flex flex-col px-12 justify-center text-white">
                <h3 className="text-lg font-bold">New Trending</h3>
                <p className="text-md">Urban Legal</p>
                <Link href="#" className="text-sm underline mt-2">
                  Shop Now
                </Link>
              </div>
            </div>
            <div
              className="relative w-full h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg flex-grow-0 flex-shrink-0 sm:w-1/3"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHwwfDB8fHww)",
              }}
            >
              {/* Overlay Text */}
              <div className="absolute inset-0 -bottom-14 flex flex-col px-12 justify-center text-white">
                <h3 className="text-lg font-bold">Best Selling</h3>
                <p className="text-md">Urban Legal</p>
                <Link href="#" className="text-sm underline mt-2">
                  Shop Now
                </Link>
              </div>
            </div>
            <div
              className="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg flex-grow-0 flex-shrink-0 sm:w-1/3 w-full"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHwwfDB8fHww)",
              }}
            >
              {/* Overlay Text */}
              <div className="absolute inset-0 -bottom-14 flex flex-col px-12 justify-center text-white">
                <h3 className="text-lg font-bold">Discount and Sales</h3>
                <p className="text-md">Urban Legal</p>
                <Link href="#" className="text-sm underline mt-2">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-start justify-center space-y-4 py-2 sm:py-8 sm:px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
            <div className="container mx-auto">
              <h1 className="text-2xl font-bold text-gray-800">{slug}</h1>
              <p className="mt-2 text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, alias. Quas necessitatibus exercitationem
                praesentium.
              </p>
            </div>
            <div className="flex flex-col gap-2">
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
            </div>
          </div>

          {/* Conditional rendering based on state */}
          {showProducts && (
            <div>
              <CategoryProducts />
            </div>
          )}

          {showVendors && (
            <div>
              <FilterVendors />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
