"use client";
import React, { useState } from "react";
import Alert from "../alerts/basicAlert";

const DischargePatientForm = ({ visible, onClose, patient, onSubmit }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-10 rounded relative">
        <button
          className="absolute text-2xl top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-black bg-white hover:bg-gray-50 hover:text-gray-600"
          onClick={onClose}
        >
          X{" "}
        </button>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Patient Discharge Form</h1>
          <form className="space-y-4" onSubmit={onSubmit}>
            {/* Patient Information */}

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="dischargeDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Discharge Date
                </label>
                <input
                  type="date"
                  id="dischargeDate"
                  name="dischargeDate"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Additional Note Section */}
            <div>
              <label
                htmlFor="additionalNotes"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows={4}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Staff Information and Date */}
            <h1 className="text-xl font-semibold mb-2">Staff Info</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="staffFName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Staff Name
                </label>
                <input
                  type="text"
                  id="staffFName"
                  name="staffFName"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="staffLName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Staff Last Name
                </label>
                <input
                  type="text"
                  id="staffLName"
                  name="staffLName"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="signature"
                  className="block text-sm font-medium text-gray-700"
                >
                  Signature
                </label>
                <div className="border mt-1 w-64 bg-gray-100 flex items-center justify-center">
                  <strong className="text-4xl">
                    <i>J S</i>
                  </strong>
                </div>
              </div>
              <div>
                <label
                  htmlFor="currentDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Signature
                </label>
                <input
                  type="date"
                  id="currentDate"
                  name="currentDate"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>

            {/* Submit button */}
            <div className=" text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 text-xl w-2/5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DischargePatientForm;
