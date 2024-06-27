import React from "react";

const CampaignCard = ({ title, description, earning }) => {
  return (
    <div className="bg-white py-2 b flex justify-center items-center mt-2">
      <div className="relative w-[90%] border h-55 rounded overflow-hidden mx-auto shadow-md shadow-gray-300 flex items-stretch text-uppercase ">
        <div className="w-1/6 border-r-2 border-dashed border-gray-200 bg-white flex items-center justify-center ">
          <div className="transform -rotate-90 whitespace-nowrap  text-sm">
            {title}
          </div>
          <div class="w-10 h-10 bg-gray-200 rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6 z-10"></div>
        </div>
        <div className="mb-8 flex-grow text-center flex flex-col justify-center  text-gray-800">
          <div className=" bg-white">
            <h2 className=" text-orange-600 px-2 my-4 text-2xl">
              {earning} OFF
            </h2>
            <h3 className="px-1 py-2 text-md">{description}</h3>
            <div className="mt-2 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <button
                  type="button"
                  className="py-1 px-4  hover:bg-gray-800 bg-gray-200 hover:text-white text-gray-800 w-full transition ease-in duration-200 text-center text-sm rounded-md  "
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-10 bg-white flex items-center justify-center">
          <div className="text-sm font-normal transform -rotate-90 font-barcode whitespace-nowrap">
            Valid until May, 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
