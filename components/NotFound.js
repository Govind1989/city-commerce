import React from "react";

const NotFound = ({ slug }) => {
  return (
    <div className="bg-white py-8">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold text-gray-400">404</h1>
        <span className="text-gray-800 text-xl ">"{slug}"</span>
        <p className="text-md font-medium ">Shop Not Found</p>
        <a href="/" className="mt-4 text-xl text-blue-600 hover:underline">
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
