import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
const VendorRegistrationForm = () => {
  const [form, setForm] = useState({
    shopName: "",
    slug: "",
    address: "",
    products_tags: "",
    phoneNumber: "",
    category: "",
    password: "",
    googleMapsLocation: "",
  });

  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission to the backend
    console.log(form);
  };
  return (
    <>
      <div
        className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')",
        }}
      >
        {/* <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img
                src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg"
                width="150"
                alt=""
              />
              <h1 className="mb-2 text-2xl">Loyalty</h1>
              <span className="text-gray-300">Vendor Registration</span>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="mb-4 text-lg">
                <input
                  name="shopName"
                  value={form.shopName}
                  onChange={handleChange}
                  className="rounded-3xl border-none bg-slate-100 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  placeholder="Shop Name"
                  required
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-slate-100 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  name="slug"
                  required
                  value={form.slug}
                  onChange={handleChange}
                  placeholder="Shop Slug"
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-slate-100 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  name="address"
                  required
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Shop Address"
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-slate-100 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  name="number"
                  required
                  value={form.number}
                  onChange={handleChange}
                  placeholder="Shop Number"
                />
              </div>

              <div className="mb-4 text-lg relative">
                <input
                  className="rounded-3xl border-none bg-slate-100 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    color="#D1D5DB"
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    color="#D1D5DB"
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>

              <div className="mb-4 text-lg relative">
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className=" w-full rounded-3xl border-none bg-slate-100 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  required
                >
                  <option value="" className="te">Select Category</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Machinery">Machinery</option>
                  <option value="Liquor">Liquor</option>
                  <option value="Restaurant">Restaurant</option>
                </select>
              </div>

              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-slate-100 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-slate-600 hover:text-slate-100"
                >
                  Register
                </button>
              </div>
              <div className={`w-full`}>
                <h4>Already have an account?</h4>
                <Link href="/login" className="text-yellow-400 pl-2">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div> */}

        <div className="w-full flex justify-center px-4 py-8">
          <div className="w-full xl:w-5/6 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')",
              }}
            ></div>

            <div className="w-full lg:w-7/12 bg-white opacity-90 dark:bg-gray-700 p-3 rounded-lg lg:rounded-l-none">
              <h3 className="py-1 text-2xl text-center text-gray-800 dark:text-white">
                Create a Vendor Account!
              </h3>
              <form className="px-8 pt-2 pb-2  bg-white dark:bg-gray-800 rounded">
                <div className="mb-2 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="shopName"
                    >
                      Shop Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="shopName"
                      type="text"
                      placeholder="Shop Name"
                    />
                  </div>
                  <div className="md:ml-2 flex-1">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="shopSlug"
                    >
                      Shop Slug
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="shopSlug"
                      type="text"
                      placeholder="Shop Slug"
                    />
                  </div>
                </div>

                <div className="mb-2 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="shopCategory"
                    >
                      Shop Category
                    </label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className=" w-full border-none bg-slate-100 bg-opacity-50 px-3 py-2 text-start  placeholder-slate-200  shadow outline-none backdrop-blur-md"
                      required
                    >
                      <option
                        value=""
                        className="text-gray-700 dark:text-white text-sm"
                      >
                        Select Category
                      </option>
                      <option value="Grocery">Grocery</option>
                      <option value="Clothes">Clothes</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Machinery">Machinery</option>
                      <option value="Liquor">Liquor</option>
                      <option value="Restaurant">Restaurant</option>
                    </select>
                  </div>
                  <div className="md:ml-2 flex-1">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="shopPhoneNumber"
                    >
                      Shop Phone Number
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="shopPhoneNumber"
                      type="text"
                      placeholder="Shop Phone Number"
                    />
                  </div>
                </div>

                <div className="mb-2 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="shopAddress"
                    >
                      Shop Address
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="shopAddress"
                      type="text"
                      placeholder="Shop Address"
                    />
                  </div>
                  <div className="md:ml-2 flex-1">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="shopLocation"
                    >
                      Google Maps Location
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="shopLocation"
                      type="text"
                      placeholder="Shop Location on Maps"
                    />
                  </div>
                </div>

                <div className="mb-2 ">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="productTages"
                  >
                    Product Tags
                  </label>
                  <textarea
                    className="w-full px-3 py-2 text-sm leading-tight
                    text-gray-700 dark:text-white border rounded shadow
                    appearance-none focus:outline-none focus:shadow-outline"
                    id="productTags"
                    type="text"
                    placeholder="Men's Clothing  Women Clothing etc"
                  ></textarea>
                </div>

                <div className="mb-2 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    <p className="text-xs italic text-red-500">
                      Please choose a password.
                    </p>
                  </div>
                  <div className="md:ml-2 flex-1">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                </div>

                <div className="mb-2 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-1 border-t" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorRegistrationForm;
