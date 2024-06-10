import React, { useState, useEffect } from "react";
import AccountSettings from "./AccountSettings";
import ShopCMS from "./ShopCMS";
import Suppliers from "./Suppliers";

const Settings = () => {
  const [activeComponent, setActiveComponent] = useState("Account");
  useEffect(() => {
    setActiveComponent("Account");
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Account":
        return <AccountSettings />;
      case "ShopCMS":
        return <ShopCMS />;
      case "Suppliers":
        return <Suppliers />;
      default:
        return <AccountSettings />;
    }
  };
  return (
    <div className="mx-auto h-screen max-w-full px-4 py-2 sm:px-8">
      <div className="bg-white py-2 px-3">
        <nav className="flex flex-wrap gap-4">
          <a
            href="#"
            className={`inline-flex whitespace-nowrap border-b-2 py-2 px-3 text-sm font-semibold transition-all duration-200 ease-in-out ${
              activeComponent === "Account"
                ? "border-b-purple-600 text-purple-600"
                : "border-transparent text-gray-600 hover:border-b-purple-600 hover:text-purple-600"
            }`}
            onClick={() => setActiveComponent("Account")}
          >
            Account
          </a>

          <a
            href="#"
            className={`inline-flex whitespace-nowrap border-b-2 py-2 px-3 text-sm font-medium transition-all duration-200 ease-in-out ${
              activeComponent === "ShopCMS"
                ? "border-b-purple-600 text-purple-600"
                : "border-transparent text-gray-600 hover:border-b-purple-600 hover:text-purple-600"
            }`}
            onClick={() => setActiveComponent("ShopCMS")}
          >
            Shop CMS
          </a>

          <a
            href="#"
            className={`inline-flex whitespace-nowrap border-b-2 py-2 px-3 text-sm font-medium transition-all duration-200 ease-in-out ${
              activeComponent === "Suppliers"
                ? "border-b-purple-600 text-purple-600"
                : "border-transparent text-gray-600 hover:border-b-purple-600 hover:text-purple-600"
            }`}
            onClick={() => setActiveComponent("Suppliers")}
          >
            Suppliers
          </a>
        </nav>
      </div>
      <div className="p-0">{renderComponent()}</div>
    </div>
  );
};

export default Settings;
