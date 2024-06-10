import React, { useState } from "react";
import Sidebar from "../../components/VendorDashboard/sidebar";
import { AiOutlineLogout, AiOutlineMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import Dashboard from "@/components/VendorDashboard/Dashboard";
import Users from "@/components/VendorDashboard/Users";
import Orders from "@/components/VendorDashboard/Orders";
import Settings from "@/components/VendorDashboard/Settings/Settings";
import Products from "@/components/VendorDashboard/Products";

const Layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const renderContent = () => {
    switch (currentPage) {
      case "Dashboard":
        return <DashboardContent />;
      case "Campaigns":
        return <CampaignsContent />;
      case "Discount":
        return <DiscountsContent />;
      case "Products":
        return <ProductsContent />;
      case "Users":
        return <UsersContent />;
      case "Orders":
        return <OrdersContent />;
      case "Settings":
        return <SettingsContent />;
      case "SocialMedias":
        return <SocialMediasContent />;
      // case "ShopCMS":
      //   return <ShopCMSContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-auto bg-white ">
      <Sidebar className="sticky top-0" setCurrentPage={setCurrentPage} />

      <div className="flex-1 h-full">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              {currentPage}
            </h5>
            <button className="w-12 h-16 -mr-2 border-r lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex space-x-4">
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                    <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                  />
                </div>
              </div>

              <button
                aria-label="search"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
              >
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="w-4 mx-auto fill-current text-gray-600"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </button>
              <div className="flex items-center justify-center">
                <button className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 flex items-center justify-center">
                  <AiOutlineMessage className="text-gray-500" />
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 flex items-center justify-center">
                  <IoMdNotifications className="text-gray-500" />
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 flex items-center justify-center">
                  <AiOutlineLogout className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto  mx-auto py-0 sm:px-6 lg:px-0">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

const DashboardContent = () => (
  <>
    <div className="bg-white h-auto  w-full">
      <Dashboard />
    </div>
  </>
);

const CampaignsContent = () => <div className="bg-white h-screen w-full"></div>;

const ProductsContent = () => (
  <div className="bg-white h-screen w-full">
    <Products />
  </div>
);

const DiscountsContent = () => <div className="bg-white h-screen w-full"></div>;

const UsersContent = () => (
  <div className="bg-white h-screen w-full">
    <Users />
  </div>
);

const OrdersContent = () => (
  <div className="bg-white h-screen w-full">
    <Orders />
  </div>
);

const SocialMediasContent = () => (
  <div className="bg-white h-screen w-full"></div>
);

const ShopCMSContent = () => (
  <div className="bg-white h-screen w-full">Shop</div>
);

const SettingsContent = () => (
  <div className="bg-white h-screen  w-full">
    <Settings />
  </div>
);

export default Layout;
