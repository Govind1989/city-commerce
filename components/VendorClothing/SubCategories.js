import React, { useState } from "react";
import { clothingShopCategory } from "../../data.js";
export const SubCategories = ({ activeMainCategory }) => {
  const [active, setActive] = useState(0);
  const [item, setItem] = useState("");
  // Find the object with the name "Men"
  const subCategories = clothingShopCategory.find(
    (category) => category.name === activeMainCategory
  );
  console.log(activeMainCategory);
  console.log("--------------------------------");
  console.log(subCategories.subcategories);
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <ul className="flex flex-wrap justify-evenly items-center w-full mt-4">
      {subCategories.subcategories.map((item, index) => {
        return (
          <li
            onClick={(e) => {
              handleClick(e, index);
            }}
            className={`cursor-pointer shadow-xs capitalize px-3 py-1 text-gray-400 rounded-md ${
              active === index ? " shadow-md bg-gray-200" : ""
            }`}
            key={index}
          >
            <span className={`${active === index ? "text-gray-800" : ""}`}>
              {item.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
