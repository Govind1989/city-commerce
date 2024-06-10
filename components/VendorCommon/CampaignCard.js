import React from "react";

const CampaignCard = ({ title, description, earning }) => {
  return (
    <div
      className="mx-2 min-h-116 w-auto bg-gray-400 max-w-xl min-w-[250px] flex-1 rounded-xl text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1687919501947-1f312343d803?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-xl h-full">
        <h1 className="text-3xl text-gray-100 leading-snug min-h-33">
          {title}
        </h1>
        <div className="mt-10 h-24">
          <p className="text-gray-100">
            <span className="text-xl">{description}</span>
          </p>
        </div>
        <div className="mt-8 flex justify-between">
          <span className="p-3 pl-0 text-white font-bold">{earning}</span>
          <span className="p-3 border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black">
            Get Started
          </span>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
