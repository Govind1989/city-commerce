import React from "react";
import VendorRegistrationForm from "@/components/Registration/VendorRegistrationForm";
import UserRegistrationForm from "@/components/Registration/UserRegistrationForm";
const register = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <VendorRegistrationForm />
        {/* <UserRegistrationForm /> */}
        {/* Button to choose the registration type */}
      </div>
    </div>
  );
};

export default register;
