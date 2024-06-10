import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip"; // Ensure you have react-tooltip installed
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSetting,
  AiOutlineMenu,
} from "react-icons/ai";
import {
  MdOutlineCampaign,
  MdOutlineProductionQuantityLimits,
  MdDisplaySettings,
  MdOutlineDiscount,
} from "react-icons/md";
import { TbSocial } from "react-icons/tb";
const Sidebar = ({ setCurrentPage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { page: "Dashboard", icon: <AiOutlineHome />, label: "Dashboard" },
    { page: "Campaigns", icon: <MdOutlineCampaign />, label: "Campaigns" },
    {
      page: "Discount",
      icon: <MdOutlineDiscount />,
      label: "Dicount & Offers",
    },
    {
      page: "Products",
      icon: <MdOutlineProductionQuantityLimits />,
      label: "Products",
    },
    { page: "Users", icon: <AiOutlineUser />, label: "Users" },
    { page: "Orders", icon: <AiOutlineShoppingCart />, label: "Orders" },
    { page: "SocialMedias", icon: <TbSocial />, label: "Social Medias" },
    // { page: "ShopCMS", icon: <MdDisplaySettings />, label: "Shop CMS" },
    { page: "Settings", icon: <AiOutlineSetting />, label: "Settings" },
  ];

  return (
    <div className="h-full flex flex-row bg-white border-r-2 border">
      <div
        className={`sticky top-0 z-30 flex flex-col bg-white  transition-width duration-200 ${
          isCollapsed ? "w-15" : "w-56"
        }`}
      >
        <div className="sticky z-10 top-0 flex items-center justify-between h-16 shadow-md px-3">
          <h1
            className={`text-xl uppercase text-gray-500 ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            Logo
          </h1>
          <button onClick={handleToggle} className="p-2 text-gray-500">
            <AiOutlineMenu size={20} />
          </button>
        </div>
        <ul className="sticky top-16 z-30 flex flex-col py-4 h-full">
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => setCurrentPage(item.page)}>
              <a
                href="#"
                className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ${
                  isHovered ? "tooltip" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                data-tooltip-id={`tooltip-${item.page}`}
                data-tooltip-content={item.label}
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </a>
              {isCollapsed && (
                <Tooltip id={`tooltip-${item.page}`} place="right">
                  {item.label}
                </Tooltip>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
