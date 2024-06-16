import React from "react";
import Link from "next/link";

const VendorCard = ({ slug }) => {
  return (
    <div className="rounded-xl bg-white py-3 px-2 mb-4 sm:mb-0 shadow-lg hover:shadow-xl">
      <Link href={`/elegant-apparel`}>
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoaW5nJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D"
            alt="Hotel Photo"
          />
          <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-slate-400 ml-1 text-sm">4.9</span>
          </div>
        </div>

        <div className="mt-1 p-2">
          <h2 className="text-gray-600">Elegant Apparel</h2>

          <p className="text-gray-400 mt-1 text-sm">Milan Chowk, Bhairahawa</p>

          <div className="py-4 flex flex-wrap gap-2">
            <span className="text-xs bg-gray-200 rounded-lg px-3 py-1 font-semibold text-gray-400 ">
              Loyalty Campaign
            </span>
            <span className="text-xs bg-gray-200 rounded-lg px-3 py-1 font-semibold text-gray-400 ">
              Referral Campaign
            </span>
            <span className="text-xs bg-gray-200 rounded-lg px-3 py-1 font-semibold text-gray-400">
              Free Shippings
            </span>
            <span className="text-xs bg-gray-200 rounded-lg px-3 py-1 font-semibold text-gray-400">
              Social Media Campaign
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VendorCard;
