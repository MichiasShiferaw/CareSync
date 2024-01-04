"use client";
import React from "react";
import { useState } from "react";

const patientProfile = ({patientId, onSubmit=null}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValues, setEditedValues] = useState({
    // Initialize with default values from backend
    firstName: "Jane",
    lastName: "Doe",
    gender: "Male",
    dOB: "11/11/11",
    martialStatus: "Married",
    phoneNumber: "6139111234",
    addressStreetName: "123 Applebee",
    addressCity: "Toronto",
    addressPostCode: "123456",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform save operation

    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset edited values and switch back to the display mode
    setEditedValues({
      firstName: "Jane",
      lastName: "Doe",
      gender: "Male",
      dOB: "11/11/11",
      martialStatus: "Married",
      phoneNumber: "6139111234",
      addressStreetName: "123 Applebee",
      addressCity: "Toronto",
      addressPostCode: "123456",
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedValues({
      ...editedValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(editedValues);
  };

  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2">
        <div className="w-full md:w-4/12 md:mx-2 mb-4 md:mb-0">
          <div className="bg-white p-3 border-t-4 border-blue-400">
            <div className="image overflow-hidden">
              <img
                className="h-1/2 w-1/2 mx-auto"
                src="https://www.pngall.com/wp-content/uploads/5/Profile.png"
                alt=""
              />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              {patientId}
            </h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6">
              Patient ID:
            </h3>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Status</span>
                <span className="ml-auto">
                  <span className="bg-blue-500 py-1 px-2 rounded text-white text-sm">
                    Active
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Member since</span>
                <span className="ml-auto">Nov 07, 2016</span>
              </li>
            </ul>
          </div>
          <div className="my-4"></div>
          <div className="bg-white p-3 hover:shadow">
            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
              <span className="text-blue-500">
                <svg
                  className="h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <span>Next of Kin</span>
            </div>
            <div className="grid grid-cols-1">
              <div className="text-gray-700 text-sm">
                {/* <div className="grid md:grid-cols-3 text-sm"> */}
                <div className="grid grid-cols-2">
                  <div className="py-2 font-semibold">First Name</div>
                  <div className="py-2">Jane</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className=" py-2 font-semibold">Last Name</div>
                  <div className=" py-2">Doe</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className=" py-2 font-semibold">Relations</div>
                  <div className=" py-2">Female</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="py-2 font-semibold">Phone Number.</div>
                  <div className="py-2">+11 998001001</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className=" py-2 font-semibold">Address</div>
                  <div className="py-2">Beech Creek, PA, Pennsylvania</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-8/12 mx-2">
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-blue-500">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
              {isEditing ? (
                <>
                  <button
                    className="ml-auto underline text-black p-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:shadow-outline-green"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                  <button
                    className="ml-2 underline text-black p-2 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  className="ml-auto underline text-black p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
              )}
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-1 text-md">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Gov Id:</div>
                  <div className="px-4 py-2">12345678</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Doctor Id</div>
                  <div className="px-4 py-2">s3411</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">First Name</div>
                  {isEditing ? (
                    <input
                      type="text"
                      name="firstName"
                      value={editedValues.firstName}
                      onChange={handleChange}
                      className="px-4 py-2"
                    />
                  ) : (
                    <div className="px-4 py-2">{editedValues.firstName}</div>
                  )}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Last Name</div>
                  {isEditing ? (
                    <input
                      type="text"
                      name="lastName"
                      value={editedValues.lastName}
                      onChange={handleChange}
                      className="px-4 py-2"
                    />
                  ) : (
                    <div className="px-4 py-2">{editedValues.lastName}</div>
                  )}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Gender</div>
                  {isEditing ? (
                    <select
                      name="gender"
                      id="gender"
                      value={editedValues.gender}
                      onChange={handleChange}
                      className="px-4 py-2"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <div className="px-4 py-2">{editedValues.gender}</div>
                  )}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Date of Birth</div>
                  {isEditing ? (
                    <input
                      type="text"
                      name="dOB"
                      value={editedValues.dOB}
                      onChange={handleChange}
                      className="px-4 py-2"
                    />
                  ) : (
                    <div className="px-4 py-2">{editedValues.dOB}</div>
                  )}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Martial Status</div>
                  {isEditing ? (
                    <input
                      type="text"
                      name="martialStatus"
                      value={editedValues.martialStatus}
                      onChange={handleChange}
                      className="px-4 py-2"
                    />
                  ) : (
                    <div className="px-4 py-2">
                      {editedValues.martialStatus}
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Phone Number</div>
                  {isEditing ? (
                    <input
                      type="text"
                      name="phoneNumber"
                      value={editedValues.phoneNumber}
                      onChange={handleChange}
                      className="px-4 py-2"
                    />
                  ) : (
                    <div className="px-4 py-2">{editedValues.phoneNumber}</div>
                  )}
                </div>

                <div className="grid grid-cols-1">
                  <div className="px-4 py-2 font-semibold text-lg">Address</div>
                  <div className="border-t-2 border-black"></div>
                  {isEditing ? (
                    <div className="flex flex-row space-x-2 px-2 py-2 mb-2 md:mb-0">
                      <input
                        type="text"
                        name="addressStreetName"
                        value={editedValues.addressStreetName}
                        onChange={handleChange}
                        className="flex-1 px-2 py-1"
                      />
                      <input
                        type="text"
                        name="addressCity"
                        value={editedValues.addressCity}
                        onChange={handleChange}
                        className="flex-1 py-1"
                      />
                      <input
                        type="text"
                        name="addressPostCode"
                        value={editedValues.addressPostCode}
                        onChange={handleChange}
                        className="flex-1 py-1"
                      />
                    </div>
                  ) : (
                    <div className=" py-2">
                      {editedValues.addressStreetName},{" "}
                      {editedValues.addressCity}, {editedValues.addressPostCode}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="my-4"></div>

          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="grid grid-cols">
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                  <span className="text-blue-400">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>

                  <span className="tracking-wide">Prescription History</span>

                  <button className="underline text-black p-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:shadow-outline-green">
                    Prescribe Medication
                  </button>
                </div>
                <ul className="list-inside space-y-2">
                  <li>
                    <div className="text-teal-600">
                      <span className="text-blue-500">#P123 </span>Drug Name
                    </div>
                    <div className="text-gray-500 text-xs">
                      4 per day|March 2020 - December 2023
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      <span className="text-blue-500">#P123 </span>Drug Name
                    </div>
                    <div className="text-gray-500 text-xs">
                      4 per day|March 2020 - December 2023
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      <span className="text-blue-500">#P123 </span>Drug Name
                    </div>
                    <div className="text-gray-500 text-xs">
                      4 per day|March 2020 - December 2023
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
            {onSubmit&&(<button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
        Submit
      </button>)}
    </div>
  );
};

export default patientProfile;
