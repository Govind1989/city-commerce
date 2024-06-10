import React from "react";

import { FaArrowDown, FaCircle } from "react-icons/fa6";
import {
  MdDoubleArrow,
  MdOutlineAddCircleOutline,
  MdOutlineDelete,
  MdOutlineEdit,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
const Products = () => {
  return (
    <>
      {/* category */}
      <div className="mx-auto flex w-full justify-between max-w-full px-4 py-2 sm:px-8">
        <h2 className="font-semibold text-gray-700">Categories Management</h2>
        <button
          type="button"
          className=" text-gray-100 whitespace-nowrap text-sm text-bold shadow-xs px-3 py-2 bg-gray-800 rounded-md hover:bg-gray-100 hover:text-gray-800"
        >
          Add Category
        </button>
      </div>
      <div className="bg-white px-2 ">
        <div className="mx-auto w-full max-w-full px-2 py-0">
          <ul className="divide-y divide-gray-300  px-2 ">
            <li className="py-0 w-full">
              <ul className="divide-y divide-gray-300 rounded-md px-2 py-0 ">
                <li className="py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-md font-medium text-gray-600">
                      Living Room
                    </span>
                    <div className="flex items-center space-x-2 mr-4">
                      <MdOutlineAddCircleOutline className="w-4 h-auto text-gray-600" />
                      <MdOutlineEdit className="w-4 h-auto text-gray-600" />
                      <MdOutlineDelete className="w-4 h-auto text-gray-600" />
                    </div>
                  </div>
                  <ul className="divide-y divide-gray-300  rounded-md px-4">
                    <li className="py-1">
                      <div className="flex items-center justify-between">
                        <span className="flex gap-1 text-md font-normal text-gray-600">
                          <MdDoubleArrow className="w-4 h-auto mt-1 text-gray-600" />
                          Sofa
                        </span>

                        <div className="flex items-center space-x-2">
                          <MdOutlineEdit className="w-4 h-auto text-gray-600" />
                          <MdOutlineDelete className="w-4 h-auto text-gray-600" />
                        </div>
                      </div>
                    </li>
                    <li className="py-1">
                      <div className="flex items-center justify-between">
                        <span className="flex gap-1 text-md font-normal text-gray-600">
                          <MdDoubleArrow className="w-4 h-auto mt-1 text-gray-600 " />
                          Chairs
                        </span>
                        <div className="flex items-center space-x-2">
                          <MdOutlineEdit className="w-4 h-auto text-gray-600" />
                          <MdOutlineDelete className="w-4 h-auto text-gray-600" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-md font-medium text-gray-600">
                      Living Room
                    </span>
                    <div className="flex items-center space-x-2 mr-4">
                      <MdOutlineAddCircleOutline className="w-4 h-auto text-gray-600" />
                      <MdOutlineEdit className="w-4 h-auto text-gray-600" />
                      <MdOutlineDelete className="w-4 h-auto text-gray-600" />
                    </div>
                  </div>
                  <ul className="divide-y divide-gray-300  rounded-md px-4">
                    <li className="py-1">
                      <div className="flex items-center justify-between">
                        <span className="flex gap-1 text-md font-normal text-gray-600">
                          <MdDoubleArrow className="w-4 h-auto mt-1 text-gray-600" />
                          Sofa
                        </span>

                        <div className="flex items-center space-x-2">
                          <MdOutlineEdit className="w-4 h-auto text-gray-600" />
                          <MdOutlineDelete className="w-4 h-auto text-gray-600" />
                        </div>
                      </div>
                    </li>
                    <li className="py-1">
                      <div className="flex items-center justify-between">
                        <span className="flex gap-1 text-md font-normal text-gray-600">
                          <MdDoubleArrow className="w-4 h-auto mt-1 text-gray-600 " />
                          Chairs
                        </span>
                        <div className="flex items-center space-x-2">
                          <MdOutlineEdit className="w-4 h-auto text-gray-600" />
                          <MdOutlineDelete className="w-4 h-auto text-gray-600" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-md font-medium text-gray-600">
                      Living Room
                    </span>
                    <div className="flex items-center space-x-2 mr-4">
                      <MdOutlineAddCircleOutline className="w-4 h-auto text-gray-600" />
                      <MdOutlineEdit className="w-4 h-auto text-gray-600" />
                      <MdOutlineDelete className="w-4 h-auto text-gray-600" />
                    </div>
                  </div>
                  <ul className="divide-y divide-gray-300  rounded-md px-4">
                    <li className="py-1">
                      <div className="flex items-center justify-between">
                        <span className="flex gap-1 text-md font-normal text-gray-600">
                          <MdDoubleArrow className="w-4 h-auto mt-1 text-gray-600" />
                          Sofa
                        </span>

                        <div className="flex items-center space-x-2">
                          <MdOutlineEdit className="w-4 h-auto text-gray-600" />
                          <MdOutlineDelete className="w-4 h-auto text-gray-600" />
                        </div>
                      </div>
                    </li>
                    <li className="py-1">
                      <div className="flex items-center justify-between">
                        <span className="flex gap-1 text-md font-normal text-gray-600">
                          <MdDoubleArrow className="w-4 h-auto mt-1 text-gray-600 " />
                          Chairs
                        </span>
                        <div className="flex items-center space-x-2">
                          <MdOutlineEdit className="w-4 h-auto text-gray-600" />
                          <MdOutlineDelete className="w-4 h-auto text-gray-600" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* products */}
      <div className="mx-auto  max-w-full px-4 py-2 sm:px-8">
        <h2 className="font-semibold text-gray-700">Products Management</h2>
      </div>
      <div className="bg-white px-2 min-h-screen">
        <div className="mx-auto max-w-full px-2 py-0">
          <div className="mt-2 w-full">
            <div className="flex w-full flex-col  justify-between space-y-2 sm:flex-row sm:space-y-0">
              <form className="relative flex w-full max-w-2xl items-center">
                <svg
                  className="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" className=""></circle>
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                    className=""
                  ></line>
                </svg>
                <input
                  type="name"
                  name="search"
                  className="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2"
                  placeholder="Search by Product Name, Date, Customer"
                />
              </form>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="w-full relative mr-auto inline-flex cursor-pointer items-center rounded-md border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 focus:shadow sm:mr-0"
                >
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                  <svg
                    className="mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  Filter
                </button>

                <button
                  type="button"
                  className="w-full text-gray-100 whitespace-nowrap text-sm text-bold shadow-xs px-3 py-2 bg-gray-800 rounded-md hover:bg-gray-100 hover:text-gray-800"
                >
                  Add Products
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 max-w-[80vw] sm:max-w-full overflow-x-scroll md:overflow-auto   rounded-xl bg-white  shadow lg:px-4">
            <table className="min-w-full overflow-scroll md:overflow-auto border-collapse border-spacing-y-2 border-spacing-x-2 overflow-x-auto">
              <thead className="sticky top-0 border-b lg:table-header-group">
                <tr>
                  <td className="sticky left-0 z-10 flex gap-2 border-x sm:border-x-0 items-center whitespace-nowrap py-4 text-sm font-semibold text-gray-800 sm:px-3 bg-white">
                    <FaArrowDown />
                    <p className="text-gray-500">Product</p>
                  </td>
                  <td className="whitespace-nowrap border-x sm:border-x-0 py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Category
                  </td>
                  <td className="whitespace-nowrap border-x sm:border-x-0 py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Sub-Category
                  </td>
                  <td className="whitespace-nowrap hidden sm:block border-x sm:border-x-0 py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Description
                  </td>
                  <td className="whitespace-normal  border-x sm:border-x-0 py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Brand
                  </td>
                  <td className="whitespace-nowrap border-x sm:border-x-0 py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Size
                  </td>
                  <td className="whitespace-nowrap border-x sm:border-x-0 py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Price
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="float-right mt-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </td>
                  <td className="whitespace-normal border-x sm:border-x-0 py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Stock
                  </td>
                  <td className="whitespace-normal border-x sm:border-x-0 py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Supplier
                  </td>
                  <td className="whitespace-normal border-x sm:border-x-0 py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Status
                  </td>
                  <td className="whitespace-normal border-x sm:border-x-0 py-4 text-sm font-medium text-gray-500 sm:px-3">
                    Actions
                  </td>
                </tr>
              </thead>
              <tbody className="bg-white lg:border-gray-300">
                <tr>
                  <td className="sticky left-0 z-10 border-x sm:border-x-0 whitespace-nowrap py-0 text-left text-sm text-gray-600 sm:px-3 lg:text-left bg-white">
                    <div className="h-auto w-16 hidden sm:block rounded-md whitespace-nowrap sm:py-2 text-sm font-normal text-gray-600 lg:table-cell">
                      <img
                        src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZSUyMHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Product"
                      />
                    </div>
                    <div className="text-left">
                      <div>
                        <p className="text-xs  font-medium text-gray-500 dark:text-white">
                          Wooden Chair
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap border-x sm:border-x-0 py-0 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                    Living Room
                  </td>
                  <td className="whitespace-nowrap border-x sm:border-x-0 py-0 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                    Chair
                  </td>
                  <td className="hidden sm:block whitespace-wrap py-0 text-left text-xs text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td className=" whitespace-nowrap py-0 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                    <img
                      className="h-8 w-8 overflow-hidden rounded-full border p-1"
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </td>
                  <td className="whitespace-nowrap border-x sm:border-x-0 py-0 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                    24 x 10 x 5 cm
                  </td>
                  <td className="flex justify-between whitespace-nowrap py-2 sm:py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                    <p>
                      <span className="whitespace-nowrap text-sm text-gray-600">
                        Rs. 799
                      </span>
                      <p className="leading-[4px]">
                        <span className="text-[10px] text-slate-400 line-through">
                          Rs. 1150
                        </span>
                        <span className="ml-1 text-[10px] text-green-600">
                          [10%]
                        </span>
                      </p>
                    </p>
                  </td>
                  <td className="whitespace-nowrap border-x sm:border-x-0 py-0 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                    10
                  </td>
                  <td className="whitespace-nowrap border-x sm:border-x-0 py-0 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                    Wood Work
                  </td>
                  <td className="whitespace-nowrap border-x sm:border-x-0 py-0 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                    <span className="mr-3 whitespace-nowrap bg-green-100 px-2 py-0.5 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="whitespace-nowrap border-x sm:border-x-0 py-0 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                    <div className="flex items-center space-x-1">
                      <MdOutlineRemoveRedEye className="w-4 h-auto" />

                      <MdOutlineEdit className="w-4 h-auto" />
                      <MdOutlineDelete className="w-4 h-auto" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center border-t bg-white px-5 py-2 sm:flex-row sm:justify-between">
            <span className="text-xs text-gray-600 sm:text-sm">
              {" "}
              Showing 1 to 5 of 12 Entries{" "}
            </span>
            <div className="mt-2 inline-flex sm:mt-0">
              <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Prev
              </button>
              <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
