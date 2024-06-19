import React from "react";

const Stats = () => {
  return (
    <div class="flex justify-center ">
      <div class="grid grid-cols-2 md:grid-cols-4  gap-4  justify-center pt-4">
        <div class="w-full flex flex-col gap-2 h-40 text-white justify-center items-center rounded-xl shadow-md p-6 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg">
          {/* <div class="font-semibold text-lg">Product Tags</div> */}
          <div class="font-semibold text-5xl tracking-tight ">600+</div>
          <div class="font-semibold text-lg text-gray-600">Product Tags</div>
          {/* <div class="font-normal">Product Tags</div> */}
        </div>

        <div class="w-full flex flex-col gap-2 h-40 text-white justify-center items-center rounded-xl shadow-md p-6 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg">
          <div class="font-semibold text-5xl tracking-tight">400+</div>
          {/* <div class="font-normal">Brands</div> */}
          <div class="font-semibold text-lg text-gray-600">Brands</div>
        </div>
        <div class="w-full flex flex-col gap-2 h-40 text-white justify-center items-center rounded-xl shadow-md p-6 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg">
          <div class="font-semibold text-5xl tracking-tight">150+</div>
          <div class="font-semibold text-lg text-gray-600">Vendors</div>
          {/* <div class="font-normal">Vendors</div> */}
        </div>

        <div class="w-full flex flex-col gap-2 h-40 text-white justify-center items-center rounded-xl shadow-md p-6 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg">
          <div class="font-semibold text-5xl tracking-tight">58+ </div>
          <div class="font-semibold text-lg text-gray-600">Campaigns</div>
          {/* <div class="font-normal">Campaigns</div> */}
        </div>
      </div>
    </div>
  );
};

export default Stats;
