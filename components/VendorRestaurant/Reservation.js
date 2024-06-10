import React, { useState } from "react";

const Reservation = () => {
  const [selectedTable, setSelectedTable] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };
  const handleGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };
  return (
    <div className="flip-container">
      {/* Reservation Form */}
      <div className="p-6">
        <h2 className="text-xl justify-center font-semibold text-gray-800 mb-4">
          Reserve Table
        </h2>

        <div className="flex justify-between mb-4">
          <div className="w-1/2 mr-2">
            <label
              for="name"
              className="block text-sm font-medium text-gray-400"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full h-8  rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
            />
          </div>
          <div className="w-1/2 ml-2">
            <label
              for="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 block w-full h-8  rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
            />
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <div className="w-1/2 mr-2">
            <label
              htmlFor="table"
              className="block text-sm font-medium text-gray-400"
            >
              Table No:
            </label>
            <select
              id="table"
              name="table"
              value={selectedTable}
              onChange={handleTableChange}
              className="mt-1 block w-full h-8  rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
            >
              <option value="1" className="text-gray-400">
                Table 1
              </option>
              <option value="2" className="text-gray-400">
                Table 2
              </option>
            </select>
          </div>
          <div className="w-1/2 ml-2">
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-gray-400"
            >
              Number of Guests:
            </label>
            <select
              id="guests"
              name="guests"
              value={numberOfGuests}
              onChange={handleGuestsChange}
              className="mt-1 block w-full h-8  rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
            >
              <option value="1" className="text-gray-400">
                1
              </option>
              <option value="2" className="text-gray-400">
                2
              </option>
            </select>
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <div className="w-1/2 mr-2">
            <label
              for="date"
              className="block text-sm font-medium text-gray-400"
            >
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="mt-1 block w-full h-8  rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
            />
          </div>
          <div className="w-1/2 mr-2">
            <label
              for="time"
              className="block text-sm font-medium text-gray-400"
            >
              Time:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="mt-1 block w-full h-8  rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            for="message"
            className="block text-sm font-medium text-gray-400"
          >
            Any Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            className="mt-1 block w-full rounded-md bg-gray-100 shadow-sm focus:border-gray-400 "
          ></textarea>
        </div>

        <div className="flex space-x-4">
          <button
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer "
            onClick={(e) => handleToggleForm(e)}
          >
            Submit
          </button>
          <button
            className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md cursor-pointer"
            onClick={(e) => handleToggleForm(e)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
